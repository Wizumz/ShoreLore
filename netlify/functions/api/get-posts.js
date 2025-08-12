// Netlify function: get-posts
// Retrieves posts with optional geospatial filtering, pagination, and sorting
//
// Example usage:
// curl "https://your-site.netlify.app/.netlify/functions/api/get-posts?lat=41.0362&lng=-71.8562&radius_m=16093&limit=20&sort=hot"

import { getSupabaseClient, handleCors, createResponse, checkRateLimit } from '../lib/supabase.js';

export async function handler(event, context) {
    // Handle CORS preflight requests
    const corsResponse = handleCors(event);
    if (corsResponse) return corsResponse;

    // Only allow GET requests
    if (event.httpMethod !== 'GET') {
        return createResponse(405, null, 'Method not allowed');
    }

    try {
        // Rate limiting
        const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
        checkRateLimit(clientIP, 60, 60000); // 60 requests per minute for reads

        // Parse query parameters
        const params = event.queryStringParameters || {};
        const {
            lat,
            lng, 
            radius_m = '16093', // Default 10 miles in meters
            limit = '20',
            offset = '0',
            sort = 'hot', // hot, new, top
            since,
            coastwide = 'false'
        } = params;

        // Validate numeric parameters
        const numericLimit = parseInt(limit);
        const numericOffset = parseInt(offset);
        const numericRadius = parseInt(radius_m);

        if (isNaN(numericLimit) || numericLimit < 1 || numericLimit > 50) {
            return createResponse(400, null, 'limit must be between 1 and 50');
        }

        if (isNaN(numericOffset) || numericOffset < 0) {
            return createResponse(400, null, 'offset must be >= 0');
        }

        if (lat && lng) {
            const numericLat = parseFloat(lat);
            const numericLng = parseFloat(lng);

            if (isNaN(numericLat) || numericLat < -90 || numericLat > 90) {
                return createResponse(400, null, 'lat must be between -90 and 90');
            }

            if (isNaN(numericLng) || numericLng < -180 || numericLng > 180) {
                return createResponse(400, null, 'lng must be between -180 and 180');
            }

            if (isNaN(numericRadius) || numericRadius < 1000 || numericRadius > 160934) {
                return createResponse(400, null, 'radius_m must be between 1000 and 160934 (1-100 miles)');
            }
        }

        const supabase = getSupabaseClient();

        // Build the query
        let query = supabase
            .from('posts')
            .select(`
                id,
                content,
                location,
                nearest_city,
                upvotes,
                downvotes,
                vote_score,
                created_at,
                updated_at,
                user:users(screen_name, color_name, color_value),
                comment_count:comments(count)
            `);

        // Apply geospatial filtering if coordinates provided
        if (lat && lng && coastwide !== 'true') {
            // Use our PostGIS stored procedure for proper geography-based filtering
            const { data: nearbyPosts, error: nearbyError } = await supabase
                .rpc('get_posts_within_radius', {
                    center_lng: parseFloat(lng),
                    center_lat: parseFloat(lat),
                    radius_meters: numericRadius,
                    limit_count: numericLimit,
                    offset_count: numericOffset
                });

            if (nearbyError) {
                console.error('Error fetching nearby posts:', nearbyError);
                return createResponse(500, null, 'Database error while fetching nearby posts');
            }

            // Get user data for each post
            const postIds = nearbyPosts.map(p => p.id);
            const { data: postUsers } = await supabase
                .from('posts')
                .select(`
                    id,
                    user:users(screen_name, color_name, color_value)
                `)
                .in('id', postIds);

            // Get comment counts for each post
            const { data: commentCounts } = await supabase
                .from('comments')
                .select('post_id')
                .in('post_id', postIds);

            const commentCountMap = {};
            commentCounts?.forEach(comment => {
                commentCountMap[comment.post_id] = (commentCountMap[comment.post_id] || 0) + 1;
            });

            // Combine the data
            const postsWithUserData = nearbyPosts.map(post => {
                const userInfo = postUsers?.find(pu => pu.id === post.id)?.user;
                return {
                    ...post,
                    user: userInfo,
                    comment_count: commentCountMap[post.id] || 0
                };
            });

            return createResponse(200, {
                posts: formatPostsResponse(postsWithUserData, lat, lng, sort),
                pagination: {
                    limit: numericLimit,
                    offset: numericOffset,
                    count: postsWithUserData.length
                },
                filters: {
                    location: { lat: parseFloat(lat), lng: parseFloat(lng), radius_m: numericRadius },
                    sort,
                    since: since || null,
                    coastwide: false
                }
            });

        } else if (coastwide === 'true') {
            // Coastwide: filter for East Coast (rough longitude bounds)
            query = query.filter('location', 'not.is', null); // Only posts with location
        }

        // Apply time filtering if since parameter provided
        if (since) {
            const sinceDate = new Date(since);
            if (!isNaN(sinceDate.getTime())) {
                query = query.gte('created_at', sinceDate.toISOString());
            }
        }

        // Apply sorting
        switch (sort) {
            case 'new':
                query = query.order('created_at', { ascending: false });
                break;
            case 'top':
                query = query.order('vote_score', { ascending: false });
                break;
            case 'hot':
            default:
                // For hot sorting, we'll order by vote_score and created_at
                // The real "hot" algorithm would be better done in a database function
                query = query.order('vote_score', { ascending: false })
                             .order('created_at', { ascending: false });
                break;
        }

        // Apply pagination
        query = query.range(numericOffset, numericOffset + numericLimit - 1);

        const { data: posts, error: postsError } = await query;

        if (postsError) {
            console.error('Error fetching posts:', postsError);
            return createResponse(500, null, 'Database error while fetching posts');
        }

        // Format response data using helper function
        const responseData = formatPostsResponse(posts, lat, lng, sort);

        // Calculate hot score on the client side for more accurate sorting
        if (sort === 'hot') {
            responseData.sort((a, b) => {
                const now = Date.now();
                const aAge = (now - new Date(a.created_at)) / (1000 * 60 * 60); // hours
                const bAge = (now - new Date(b.created_at)) / (1000 * 60 * 60); // hours
                
                const aHotScore = a.vote_score + a.comment_count * 2 - aAge * 0.1;
                const bHotScore = b.vote_score + b.comment_count * 2 - bAge * 0.1;
                
                return bHotScore - aHotScore;
            });
        }

        return createResponse(200, {
            posts: responseData,
            pagination: {
                limit: numericLimit,
                offset: numericOffset,
                count: responseData.length
            },
            filters: {
                location: lat && lng ? { lat: parseFloat(lat), lng: parseFloat(lng), radius_m: numericRadius } : null,
                sort,
                since: since || null,
                coastwide: coastwide === 'true'
            }
        });

    } catch (error) {
        console.error('Function error:', error);
        return createResponse(500, null, error.message || 'Internal server error');
    }
}

/**
 * Format posts response data, handling PostGIS geography data
 */
function formatPostsResponse(posts, userLat, userLng, sort) {
    return posts.map(post => {
        // Extract coordinates from PostGIS geography if available
        let postLat = null;
        let postLng = null;
        let distance = null;
        
        if (post.location) {
            if (typeof post.location === 'string') {
                // PostGIS returns location as a string like "POINT(lng lat)"
                const matches = post.location.match(/POINT\(([^)]+)\)/);
                if (matches) {
                    const coords = matches[1].split(' ');
                    if (coords.length === 2) {
                        postLng = parseFloat(coords[0]);
                        postLat = parseFloat(coords[1]);
                    }
                }
            } else if (post.location.coordinates) {
                // Some PostGIS results might return as GeoJSON
                postLng = post.location.coordinates[0];
                postLat = post.location.coordinates[1];
            }
        }

        // Use PostGIS distance if available, otherwise calculate manually
        if (post.distance_meters !== undefined) {
            // Distance from PostGIS stored procedure (in meters)
            distance = Math.round(post.distance_meters * 0.000621371 * 10) / 10; // Convert to miles
        } else if (userLat && userLng && postLat && postLng) {
            // Fallback to manual calculation
            distance = calculateDistance(
                parseFloat(userLat), parseFloat(userLng),
                postLat, postLng
            );
            distance = Math.round(distance * 10) / 10;
        }

        return {
            id: post.id,
            content: post.content,
            author: post.user?.screen_name || 'Unknown',
            author_color: {
                name: post.user?.color_name || 'Navy',
                value: post.user?.color_value || '#1e3a8a'
            },
            location: {
                lat: postLat,
                lng: postLng,
                nearest_city: post.nearest_city,
                distance: distance
            },
            upvotes: post.upvotes,
            downvotes: post.downvotes,
            vote_score: post.vote_score,
            comment_count: post.comment_count || 0,
            created_at: post.created_at,
            updated_at: post.updated_at
        };
    });
}

/**
 * Calculate distance between two points using Haversine formula (fallback)
 */
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}
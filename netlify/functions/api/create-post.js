// Netlify function: create-post
// Creates a new fishing post with optional geolocation
//
// Example usage:
// curl -X POST https://your-site.netlify.app/.netlify/functions/api/create-post \
//   -H "Content-Type: application/json" \
//   -d '{"device_id": "unique-device-id", "content": "Great fishing today!", "lat": 41.0362, "lng": -71.8562}'

import { getSupabaseClient, handleCors, createResponse, validateRequired, checkRateLimit, moderateContent } from '../lib/supabase.js';

export async function handler(event, context) {
    // Handle CORS preflight requests
    const corsResponse = handleCors(event);
    if (corsResponse) return corsResponse;

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return createResponse(405, null, 'Method not allowed');
    }

    try {
        // Rate limiting - stricter for post creation
        const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
        checkRateLimit(clientIP, 3, 60000); // 3 posts per minute

        // Parse request body
        let body;
        try {
            body = JSON.parse(event.body);
        } catch (e) {
            return createResponse(400, null, 'Invalid JSON in request body');
        }

        // Validate required fields
        validateRequired(body, ['device_id', 'content']);

        const { device_id, content, lat, lng, nearest_city } = body;

        // Validate content
        moderateContent(content);

        // Validate coordinates if provided
        if ((lat && !lng) || (!lat && lng)) {
            return createResponse(400, null, 'Both lat and lng must be provided together');
        }

        if (lat && (lat < -90 || lat > 90)) {
            return createResponse(400, null, 'Latitude must be between -90 and 90');
        }

        if (lng && (lng < -180 || lng > 180)) {
            return createResponse(400, null, 'Longitude must be between -180 and 180');
        }

        const supabase = getSupabaseClient();

        // Find user by device_id
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('id, screen_name')
            .eq('device_id', device_id)
            .single();

        if (userError) {
            console.error('Error finding user:', userError);
            if (userError.code === 'PGRST116') {
                return createResponse(404, null, 'User not found. Please create user account first.');
            }
            return createResponse(500, null, 'Database error while finding user');
        }

        // Create the post with proper PostGIS location handling
        let newPost, postError;
        
        if (lat && lng) {
            // Use stored procedure for posts with location to ensure proper PostGIS usage
            const { data, error } = await supabase
                .rpc('create_post_with_location', {
                    p_user_id: user.id,
                    p_content: content.trim(),
                    p_lng: lng,
                    p_lat: lat,
                    p_nearest_city: nearest_city || null
                });
            
            newPost = data?.[0];
            postError = error;
        } else {
            // For posts without location, use regular insert
            const { data, error } = await supabase
                .from('posts')
                .insert({
                    user_id: user.id,
                    content: content.trim(),
                    nearest_city: nearest_city || null
                })
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
                    user_id
                `)
                .single();
            
            newPost = data;
            postError = error;
        }

        if (postError) {
            console.error('Error creating post:', postError);
            return createResponse(500, null, 'Database error while creating post');
        }

        // Get user data for the response
        const { data: userData, error: userError } = await supabase
            .from('users')
            .select('screen_name, color_name, color_value')
            .eq('id', user.id)
            .single();

        if (userError) {
            console.error('Error fetching user data:', userError);
            return createResponse(500, null, 'Database error while fetching user data');
        }

        // Format response data
        const responseData = {
            id: newPost.id,
            content: newPost.content,
            author: userData.screen_name,
            author_color: {
                name: userData.color_name,
                value: userData.color_value
            },
            location: {
                lat: lat || null,
                lng: lng || null,
                nearest_city: newPost.nearest_city
            },
            upvotes: newPost.upvotes,
            downvotes: newPost.downvotes,
            vote_score: newPost.vote_score,
            created_at: newPost.created_at,
            updated_at: newPost.updated_at,
            comment_count: 0 // New post has no comments
        };

        return createResponse(201, responseData);

    } catch (error) {
        console.error('Function error:', error);
        return createResponse(500, null, error.message || 'Internal server error');
    }
}

/**
 * Get nearest city name from coordinates using a simple lookup
 * In production, you might want to use a geocoding service
 */
function getNearestCityFromCoords(lat, lng) {
    // Simple lookup for Northeast US fishing locations
    const locations = [
        { name: 'Montauk Point, NY', lat: 41.0362, lng: -71.8562 },
        { name: 'Cape Cod, MA', lat: 41.6688, lng: -70.2962 },
        { name: 'Block Island, RI', lat: 41.1775, lng: -71.5773 },
        { name: 'Chesapeake Bay, MD', lat: 38.9784, lng: -76.4951 },
        { name: 'Sandy Hook, NJ', lat: 40.4168, lng: -74.0018 },
        { name: 'Boston, MA', lat: 42.3601, lng: -71.0589 },
        { name: 'New York, NY', lat: 40.7128, lng: -74.0060 }
    ];

    let closest = null;
    let minDistance = Infinity;

    locations.forEach(location => {
        const distance = calculateDistance(lat, lng, location.lat, location.lng);
        if (distance < minDistance) {
            minDistance = distance;
            closest = location;
        }
    });

    return closest ? closest.name : 'Unknown Location';
}

/**
 * Calculate distance between two points using Haversine formula
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
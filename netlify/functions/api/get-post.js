// Netlify function: get-post
// Retrieves a single post with its comments and vote information

import { getSupabaseClient, handleCors, createResponse, checkRateLimit } from '../lib/supabase.js';

export async function handler(event, context) {
    const corsResponse = handleCors(event);
    if (corsResponse) return corsResponse;

    if (event.httpMethod !== 'GET') {
        return createResponse(405, null, 'Method not allowed');
    }

    try {
        const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
        checkRateLimit(clientIP, 60, 60000); // 60 requests per minute

        const params = event.queryStringParameters || {};
        const { id, device_id } = params;

        if (!id) {
            return createResponse(400, null, 'Post id is required');
        }

        const numericId = parseInt(id);
        if (isNaN(numericId) || numericId <= 0) {
            return createResponse(400, null, 'Invalid post id');
        }

        const supabase = getSupabaseClient();

        // Get post with user info
        const { data: post, error: postError } = await supabase
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
                user:users(screen_name, color_name, color_value)
            `)
            .eq('id', numericId)
            .single();

        if (postError) {
            if (postError.code === 'PGRST116') {
                return createResponse(404, null, 'Post not found');
            }
            return createResponse(500, null, 'Database error while fetching post');
        }

        // Get comments for this post
        const { data: comments, error: commentsError } = await supabase
            .from('comments')
            .select(`
                id,
                content,
                emoji,
                created_at,
                user:users(screen_name, color_name, color_value)
            `)
            .eq('post_id', numericId)
            .order('created_at', { ascending: true });

        if (commentsError) {
            console.error('Error fetching comments:', commentsError);
            return createResponse(500, null, 'Database error while fetching comments');
        }

        // Get user's vote if device_id provided
        let userVote = null;
        if (device_id) {
            const { data: user } = await supabase
                .from('users')
                .select('id')
                .eq('device_id', device_id)
                .single();

            if (user) {
                const { data: vote } = await supabase
                    .from('votes')
                    .select('value')
                    .eq('post_id', numericId)
                    .eq('user_id', user.id)
                    .single();

                userVote = vote ? vote.value : null;
            }
        }

        // Format response
        const responseData = {
            id: post.id,
            content: post.content,
            author: post.user.screen_name,
            author_color: {
                name: post.user.color_name,
                value: post.user.color_value
            },
            location: post.location ? extractCoordinates(post.location) : null,
            nearest_city: post.nearest_city,
            upvotes: post.upvotes,
            downvotes: post.downvotes,
            vote_score: post.vote_score,
            user_vote: userVote,
            created_at: post.created_at,
            updated_at: post.updated_at,
            comments: comments.map(comment => ({
                id: comment.id,
                content: comment.content,
                emoji: comment.emoji,
                author: comment.user.screen_name,
                author_color: {
                    name: comment.user.color_name,
                    value: comment.user.color_value
                },
                created_at: comment.created_at
            }))
        };

        return createResponse(200, responseData);

    } catch (error) {
        console.error('Function error:', error);
        return createResponse(500, null, error.message || 'Internal server error');
    }
}

function extractCoordinates(postgisPoint) {
    if (!postgisPoint) return null;
    const matches = postgisPoint.match(/POINT\(([^)]+)\)/);
    if (matches) {
        const coords = matches[1].split(' ');
        if (coords.length === 2) {
            return {
                lat: parseFloat(coords[1]),
                lng: parseFloat(coords[0])
            };
        }
    }
    return null;
}
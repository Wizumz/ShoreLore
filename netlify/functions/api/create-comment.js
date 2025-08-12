// Netlify function: create-comment
// Creates a new comment on a post with emoji identifier

import { getSupabaseClient, handleCors, createResponse, validateRequired, checkRateLimit, moderateContent } from '../lib/supabase.js';

export async function handler(event, context) {
    const corsResponse = handleCors(event);
    if (corsResponse) return corsResponse;

    if (event.httpMethod !== 'POST') {
        return createResponse(405, null, 'Method not allowed');
    }

    try {
        const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
        checkRateLimit(clientIP, 5, 60000); // 5 comments per minute

        let body;
        try {
            body = JSON.parse(event.body);
        } catch (e) {
            return createResponse(400, null, 'Invalid JSON in request body');
        }

        validateRequired(body, ['device_id', 'post_id', 'content']);

        const { device_id, post_id, content, emoji = '🐟' } = body;

        // Validate content
        moderateContent(content);

        const numericPostId = parseInt(post_id);
        if (isNaN(numericPostId) || numericPostId <= 0) {
            return createResponse(400, null, 'post_id must be a positive integer');
        }

        const supabase = getSupabaseClient();

        // Find user
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('id, screen_name, color_name, color_value')
            .eq('device_id', device_id)
            .single();

        if (userError || !user) {
            return createResponse(404, null, 'User not found');
        }

        // Verify post exists
        const { data: post, error: postError } = await supabase
            .from('posts')
            .select('id')
            .eq('id', numericPostId)
            .single();

        if (postError || !post) {
            return createResponse(404, null, 'Post not found');
        }

        // Create comment
        const { data: newComment, error: commentError } = await supabase
            .from('comments')
            .insert({
                post_id: numericPostId,
                user_id: user.id,
                content: content.trim(),
                emoji: emoji
            })
            .select()
            .single();

        if (commentError) {
            console.error('Error creating comment:', commentError);
            return createResponse(500, null, 'Database error while creating comment');
        }

        const responseData = {
            id: newComment.id,
            post_id: newComment.post_id,
            content: newComment.content,
            emoji: newComment.emoji,
            author: user.screen_name,
            author_color: {
                name: user.color_name,
                value: user.color_value
            },
            created_at: newComment.created_at
        };

        return createResponse(201, responseData);

    } catch (error) {
        console.error('Function error:', error);
        return createResponse(500, null, error.message || 'Internal server error');
    }
}
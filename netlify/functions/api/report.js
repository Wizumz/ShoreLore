// Netlify function: report
// Reports posts for content moderation

import { getSupabaseClient, handleCors, createResponse, validateRequired, checkRateLimit } from '../lib/supabase.js';

export async function handler(event, context) {
    const corsResponse = handleCors(event);
    if (corsResponse) return corsResponse;

    if (event.httpMethod !== 'POST') {
        return createResponse(405, null, 'Method not allowed');
    }

    try {
        const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
        checkRateLimit(clientIP, 2, 60000); // 2 reports per minute

        let body;
        try {
            body = JSON.parse(event.body);
        } catch (e) {
            return createResponse(400, null, 'Invalid JSON in request body');
        }

        validateRequired(body, ['device_id', 'post_id', 'reason']);

        const { device_id, post_id, reason } = body;

        if (reason.length < 3 || reason.length > 200) {
            return createResponse(400, null, 'Reason must be between 3 and 200 characters');
        }

        const numericPostId = parseInt(post_id);
        if (isNaN(numericPostId) || numericPostId <= 0) {
            return createResponse(400, null, 'post_id must be a positive integer');
        }

        const supabase = getSupabaseClient();

        // Find user
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('id')
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

        // Check for existing report from this user
        const { data: existingReport } = await supabase
            .from('reports')
            .select('id')
            .eq('post_id', numericPostId)
            .eq('user_id', user.id)
            .single();

        if (existingReport) {
            return createResponse(409, null, 'You have already reported this post');
        }

        // Create report
        const { data: newReport, error: reportError } = await supabase
            .from('reports')
            .insert({
                post_id: numericPostId,
                user_id: user.id,
                reason: reason.trim()
            })
            .select()
            .single();

        if (reportError) {
            console.error('Error creating report:', reportError);
            return createResponse(500, null, 'Database error while creating report');
        }

        return createResponse(201, {
            id: newReport.id,
            post_id: newReport.post_id,
            reason: newReport.reason,
            status: newReport.status,
            created_at: newReport.created_at
        });

    } catch (error) {
        console.error('Function error:', error);
        return createResponse(500, null, error.message || 'Internal server error');
    }
}
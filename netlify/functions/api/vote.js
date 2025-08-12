// Netlify function: vote
// Handles upvoting and downvoting posts with idempotency
//
// Example usage:
// curl -X POST https://your-site.netlify.app/.netlify/functions/api/vote \
//   -H "Content-Type: application/json" \
//   -d '{"device_id": "unique-device-id", "post_id": 123, "value": 1}'

import { getSupabaseClient, handleCors, createResponse, validateRequired, checkRateLimit } from '../lib/supabase.js';

export async function handler(event, context) {
    // Handle CORS preflight requests
    const corsResponse = handleCors(event);
    if (corsResponse) return corsResponse;

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return createResponse(405, null, 'Method not allowed');
    }

    try {
        // Rate limiting for voting
        const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
        checkRateLimit(clientIP, 20, 60000); // 20 votes per minute

        // Parse request body
        let body;
        try {
            body = JSON.parse(event.body);
        } catch (e) {
            return createResponse(400, null, 'Invalid JSON in request body');
        }

        // Validate required fields
        validateRequired(body, ['device_id', 'post_id', 'value']);

        const { device_id, post_id, value } = body;

        // Validate vote value
        if (value !== 1 && value !== -1) {
            return createResponse(400, null, 'value must be 1 (upvote) or -1 (downvote)');
        }

        // Validate post_id
        const numericPostId = parseInt(post_id);
        if (isNaN(numericPostId) || numericPostId <= 0) {
            return createResponse(400, null, 'post_id must be a positive integer');
        }

        const supabase = getSupabaseClient();

        // Find user by device_id
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('id')
            .eq('device_id', device_id)
            .single();

        if (userError) {
            console.error('Error finding user:', userError);
            if (userError.code === 'PGRST116') {
                return createResponse(404, null, 'User not found. Please create user account first.');
            }
            return createResponse(500, null, 'Database error while finding user');
        }

        // Verify post exists
        const { data: post, error: postError } = await supabase
            .from('posts')
            .select('id, vote_score')
            .eq('id', numericPostId)
            .single();

        if (postError) {
            console.error('Error finding post:', postError);
            if (postError.code === 'PGRST116') {
                return createResponse(404, null, 'Post not found');
            }
            return createResponse(500, null, 'Database error while finding post');
        }

        // Check for existing vote
        const { data: existingVote, error: voteError } = await supabase
            .from('votes')
            .select('*')
            .eq('post_id', numericPostId)
            .eq('user_id', user.id)
            .single();

        if (voteError && voteError.code !== 'PGRST116') {
            console.error('Error checking existing vote:', voteError);
            return createResponse(500, null, 'Database error while checking vote');
        }

        let newVoteScore;
        let action = '';

        if (existingVote) {
            if (existingVote.value === value) {
                // Same vote - remove it (toggle off)
                const { error: deleteError } = await supabase
                    .from('votes')
                    .delete()
                    .eq('id', existingVote.id);

                if (deleteError) {
                    console.error('Error removing vote:', deleteError);
                    return createResponse(500, null, 'Database error while removing vote');
                }

                action = 'removed';
                newVoteScore = post.vote_score - value;
            } else {
                // Different vote - update it
                const { error: updateError } = await supabase
                    .from('votes')
                    .update({ value })
                    .eq('id', existingVote.id);

                if (updateError) {
                    console.error('Error updating vote:', updateError);
                    return createResponse(500, null, 'Database error while updating vote');
                }

                action = 'changed';
                newVoteScore = post.vote_score - existingVote.value + value;
            }
        } else {
            // New vote - create it
            const { error: insertError } = await supabase
                .from('votes')
                .insert({
                    post_id: numericPostId,
                    user_id: user.id,
                    value
                });

            if (insertError) {
                console.error('Error creating vote:', insertError);
                
                // Handle duplicate vote (race condition)
                if (insertError.code === '23505') {
                    return createResponse(409, null, 'Vote already exists');
                }
                
                return createResponse(500, null, 'Database error while creating vote');
            }

            action = 'created';
            newVoteScore = post.vote_score + value;
        }

        // The vote_score will be automatically updated by the database trigger,
        // but we return the calculated value for immediate UI feedback
        
        // Get updated post data with vote counts
        const { data: updatedPost, error: postUpdateError } = await supabase
            .from('posts')
            .select(`
                id,
                vote_score,
                upvotes,
                downvotes
            `)
            .eq('id', numericPostId)
            .single();

        if (postUpdateError) {
            console.error('Error fetching updated post:', postUpdateError);
            // Don't fail the request - the vote was successful
        }

        const responseData = {
            post_id: numericPostId,
            user_vote: action === 'removed' ? null : value,
            vote_score: updatedPost ? updatedPost.vote_score : newVoteScore,
            upvotes: updatedPost ? updatedPost.upvotes : null,
            downvotes: updatedPost ? updatedPost.downvotes : null,
            action: action // created, changed, removed
        };

        return createResponse(200, responseData);

    } catch (error) {
        console.error('Function error:', error);
        return createResponse(500, null, error.message || 'Internal server error');
    }
}
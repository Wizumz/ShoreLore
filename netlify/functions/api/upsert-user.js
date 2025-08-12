// Netlify function: upsert-user
// Creates or updates user based on device_id
// 
// Example usage:
// curl -X POST https://your-site.netlify.app/.netlify/functions/api/upsert-user \
//   -H "Content-Type: application/json" \
//   -d '{"device_id": "unique-device-id", "screen_name": "FISHER_123"}'

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
        // Rate limiting based on IP
        const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
        checkRateLimit(clientIP, 10, 60000); // 10 requests per minute

        // Parse request body
        let body;
        try {
            body = JSON.parse(event.body);
        } catch (e) {
            return createResponse(400, null, 'Invalid JSON in request body');
        }

        // Validate required fields
        validateRequired(body, ['device_id']);

        const { device_id, screen_name, color_name, color_value } = body;

        // Validate device_id format (should be a reasonable length UUID or similar)
        if (!device_id || device_id.length < 10 || device_id.length > 50) {
            return createResponse(400, null, 'device_id must be between 10 and 50 characters');
        }

        // Validate screen_name if provided
        if (screen_name && (screen_name.length < 3 || screen_name.length > 20)) {
            return createResponse(400, null, 'screen_name must be between 3 and 20 characters');
        }

        const supabase = getSupabaseClient();

        // Check if user already exists
        const { data: existingUser, error: findError } = await supabase
            .from('users')
            .select('*')
            .eq('device_id', device_id)
            .single();

        if (findError && findError.code !== 'PGRST116') { // PGRST116 is "not found"
            console.error('Error finding user:', findError);
            return createResponse(500, null, 'Database error while finding user');
        }

        let userData;
        
        if (existingUser) {
            // Update existing user if screen_name or color provided
            if (screen_name || color_name || color_value) {
                const updateData = {};
                if (screen_name) updateData.screen_name = screen_name.toUpperCase();
                if (color_name) updateData.color_name = color_name;
                if (color_value) updateData.color_value = color_value;

                const { data: updatedUser, error: updateError } = await supabase
                    .from('users')
                    .update(updateData)
                    .eq('device_id', device_id)
                    .select()
                    .single();

                if (updateError) {
                    console.error('Error updating user:', updateError);
                    return createResponse(500, null, 'Database error while updating user');
                }

                userData = updatedUser;
            } else {
                userData = existingUser;
            }
        } else {
            // Create new user
            const newUserData = {
                device_id,
                screen_name: screen_name ? screen_name.toUpperCase() : generateScreenName(),
                color_name: color_name || 'Navy',
                color_value: color_value || '#1e3a8a'
            };

            const { data: newUser, error: createError } = await supabase
                .from('users')
                .insert(newUserData)
                .select()
                .single();

            if (createError) {
                console.error('Error creating user:', createError);
                
                // Handle duplicate device_id (race condition)
                if (createError.code === '23505') {
                    return createResponse(409, null, 'User with this device_id already exists');
                }
                
                return createResponse(500, null, 'Database error while creating user');
            }

            userData = newUser;
        }

        // Return user data (excluding sensitive fields if any)
        const responseData = {
            id: userData.id,
            screen_name: userData.screen_name,
            device_id: userData.device_id,
            color_name: userData.color_name,
            color_value: userData.color_value,
            created_at: userData.created_at,
            updated_at: userData.updated_at
        };

        return createResponse(200, responseData);

    } catch (error) {
        console.error('Function error:', error);
        return createResponse(500, null, error.message || 'Internal server error');
    }
}

/**
 * Generate a random screen name for new users
 */
function generateScreenName() {
    const adjectives = ['REEL', 'BIG', 'DEEP', 'LUCKY', 'MASTER', 'PRO', 'BASS', 'CATCH', 'FISHER', 'ANGLER'];
    const nouns = ['FISHER', 'CASTER', 'HUNTER', 'MASTER', 'CAPTAIN', 'ADMIRAL', 'SAILOR', 'KEEPER', 'LEGEND', 'HERO'];
    const numbers = Math.floor(Math.random() * 999) + 1;
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${adj}${noun}${numbers}`;
}
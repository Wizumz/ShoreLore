import { supabase, TABLES, calculateDistance } from './supabaseClient.js'

// Generate random emoji identifier for comments
const COMMENT_EMOJIS = ['🐟', '🎣', '🌊', '⭐', '🔥', '💯', '👍', '🎯', '🌟', '💪'];

export const generateEmojiIdentifier = () => {
    return COMMENT_EMOJIS[Math.floor(Math.random() * COMMENT_EMOJIS.length)];
};

// Posts operations
export const postsService = {
    // Get posts within radius
    async getNearbyPosts(latitude, longitude, radiusMiles = 5) {
        try {
            const { data, error } = await supabase.rpc('get_nearby_posts', {
                user_lat: latitude,
                user_lng: longitude,
                radius_miles: radiusMiles,
                limit_count: 100
            });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error fetching nearby posts:', error);
            return [];
        }
    },

    // Create a new post
    async createPost(content, username, userColor, latitude, longitude, locationName = '') {
        try {
            const { data, error } = await supabase
                .from(TABLES.POSTS)
                .insert([{
                    content,
                    username,
                    user_color: userColor,
                    latitude,
                    longitude,
                    location_name: locationName
                }])
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    },

    // Get a single post
    async getPost(postId) {
        try {
            const { data, error } = await supabase
                .from(TABLES.POSTS)
                .select('*')
                .eq('id', postId)
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    }
};

// Comments operations
export const commentsService = {
    // Get comments for a post
    async getComments(postId) {
        try {
            const { data, error } = await supabase
                .from(TABLES.COMMENTS)
                .select('*')
                .eq('post_id', postId)
                .order('created_at', { ascending: true });

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
    },

    // Create a comment
    async createComment(postId, content, username, userColor) {
        try {
            const { data, error } = await supabase
                .from(TABLES.COMMENTS)
                .insert([{
                    post_id: postId,
                    content,
                    username,
                    user_color: userColor,
                    emoji_identifier: generateEmojiIdentifier()
                }])
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error creating comment:', error);
            throw error;
        }
    }
};

// Votes operations
export const votesService = {
    // Get user's vote for a post
    async getUserVote(postId, deviceId) {
        try {
            const { data, error } = await supabase
                .from(TABLES.VOTES)
                .select('vote_type')
                .eq('post_id', postId)
                .eq('user_device_id', deviceId)
                .maybeSingle();

            if (error) throw error;
            return data?.vote_type || 0;
        } catch (error) {
            console.error('Error fetching user vote:', error);
            return 0;
        }
    },

    // Cast a vote (upsert)
    async castVote(postId, deviceId, voteType) {
        try {
            if (voteType === 0) {
                // Remove vote
                const { error } = await supabase
                    .from(TABLES.VOTES)
                    .delete()
                    .eq('post_id', postId)
                    .eq('user_device_id', deviceId);

                if (error) throw error;
            } else {
                // Insert or update vote
                const { error } = await supabase
                    .from(TABLES.VOTES)
                    .upsert({
                        post_id: postId,
                        user_device_id: deviceId,
                        vote_type: voteType
                    }, {
                        onConflict: 'post_id,user_device_id'
                    });

                if (error) throw error;
            }
            
            return true;
        } catch (error) {
            console.error('Error casting vote:', error);
            throw error;
        }
    },

    // Get votes for multiple posts (for efficiency)
    async getVotesForPosts(postIds, deviceId) {
        try {
            const { data, error } = await supabase
                .from(TABLES.VOTES)
                .select('post_id, vote_type')
                .in('post_id', postIds)
                .eq('user_device_id', deviceId);

            if (error) throw error;
            
            // Convert to object for easy lookup
            const votes = {};
            data?.forEach(vote => {
                votes[vote.post_id] = vote.vote_type;
            });
            
            return votes;
        } catch (error) {
            console.error('Error fetching votes for posts:', error);
            return {};
        }
    }
};

// Reports operations
export const reportsService = {
    // Report a post
    async reportPost(postId, deviceId, reason = '') {
        try {
            const { data, error } = await supabase
                .from('reports')
                .insert([{
                    post_id: postId,
                    reported_by_device_id: deviceId,
                    reason
                }])
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error reporting post:', error);
            throw error;
        }
    },

    // Report a comment
    async reportComment(commentId, deviceId, reason = '') {
        try {
            const { data, error } = await supabase
                .from('reports')
                .insert([{
                    comment_id: commentId,
                    reported_by_device_id: deviceId,
                    reason
                }])
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error reporting comment:', error);
            throw error;
        }
    }
};

// Real-time subscriptions
export const subscriptionsService = {
    // Subscribe to posts in a specific area
    subscribeToNearbyPosts(latitude, longitude, radiusMiles, onNewPost, onPostUpdate) {
        return supabase
            .channel('posts_changes')
            .on('postgres_changes', 
                { event: 'INSERT', schema: 'public', table: TABLES.POSTS },
                (payload) => {
                    const newPost = payload.new;
                    // Check if post is within radius
                    const distance = calculateDistance(
                        latitude, longitude,
                        newPost.latitude, newPost.longitude
                    );
                    
                    if (distance <= radiusMiles) {
                        onNewPost({ ...newPost, distance_miles: distance });
                    }
                }
            )
            .on('postgres_changes',
                { event: 'UPDATE', schema: 'public', table: TABLES.POSTS },
                (payload) => {
                    const updatedPost = payload.new;
                    // Check if post is within radius
                    const distance = calculateDistance(
                        latitude, longitude,
                        updatedPost.latitude, updatedPost.longitude
                    );
                    
                    if (distance <= radiusMiles) {
                        onPostUpdate({ ...updatedPost, distance_miles: distance });
                    }
                }
            )
            .subscribe();
    },

    // Subscribe to comments for a specific post
    subscribeToComments(postId, onNewComment) {
        return supabase
            .channel(`comments_${postId}`)
            .on('postgres_changes',
                { 
                    event: 'INSERT', 
                    schema: 'public', 
                    table: TABLES.COMMENTS,
                    filter: `post_id=eq.${postId}`
                },
                (payload) => {
                    onNewComment(payload.new);
                }
            )
            .subscribe();
    },

    // Unsubscribe from a channel
    unsubscribe(subscription) {
        supabase.removeChannel(subscription);
    }
};
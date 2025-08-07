import { supabase, TABLES, calculateDistance } from './supabaseClient.js'

// Check if Supabase is properly configured
const isSupabaseConfigured = () => {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
    return url && key && 
           !url.includes('YOUR_SUPABASE_URL') && 
           !url.includes('demo.supabase.co') &&
           !key.includes('YOUR_SUPABASE_ANON_KEY') &&
           !key.includes('demo_key');
};

// Local storage fallback for when Supabase is not configured
const localStorageKey = 'riprap_local_data';

const getLocalData = () => {
    try {
        const data = localStorage.getItem(localStorageKey);
        return data ? JSON.parse(data) : { posts: [], comments: [], votes: {} };
    } catch {
        return { posts: [], comments: [], votes: {} };
    }
};

const saveLocalData = (data) => {
    try {
        localStorage.setItem(localStorageKey, JSON.stringify(data));
    } catch (error) {
        console.warn('Could not save to localStorage:', error);
    }
};

// Generate random emoji identifier for comments
const COMMENT_EMOJIS = ['🐟', '🎣', '🌊', '⭐', '🔥', '💯', '👍', '🎯', '🌟', '💪'];

export const generateEmojiIdentifier = () => {
    return COMMENT_EMOJIS[Math.floor(Math.random() * COMMENT_EMOJIS.length)];
};

// Posts operations
export const postsService = {
    // Get posts within radius
    async getNearbyPosts(latitude, longitude, radiusMiles = 5) {
        if (!isSupabaseConfigured()) {
            // Use local storage fallback
            const localData = getLocalData();
            return localData.posts.filter(post => {
                if (!post.latitude || !post.longitude) return false;
                const distance = calculateDistance(latitude, longitude, post.latitude, post.longitude);
                return distance <= radiusMiles;
            }).map(post => ({
                ...post,
                distance_miles: calculateDistance(latitude, longitude, post.latitude, post.longitude)
            }));
        }

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
            // Fallback to local storage if Supabase fails
            const localData = getLocalData();
            return localData.posts.filter(post => {
                if (!post.latitude || !post.longitude) return false;
                const distance = calculateDistance(latitude, longitude, post.latitude, post.longitude);
                return distance <= radiusMiles;
            }).map(post => ({
                ...post,
                distance_miles: calculateDistance(latitude, longitude, post.latitude, post.longitude)
            }));
        }
    },

    // Create a new post
    async createPost(content, username, userColor, latitude, longitude, locationName = '') {
        if (!isSupabaseConfigured()) {
            // Use local storage fallback
            const localData = getLocalData();
            const newPost = {
                id: crypto.randomUUID(),
                content,
                username,
                user_color: userColor,
                latitude,
                longitude,
                location_name: locationName,
                vote_count: 0,
                comment_count: 0,
                created_at: new Date().toISOString(),
                distance_miles: 0
            };
            localData.posts.unshift(newPost);
            saveLocalData(localData);
            return newPost;
        }

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
            // Fallback to local storage if Supabase fails
            const localData = getLocalData();
            const newPost = {
                id: crypto.randomUUID(),
                content,
                username,
                user_color: userColor,
                latitude,
                longitude,
                location_name: locationName,
                vote_count: 0,
                comment_count: 0,
                created_at: new Date().toISOString(),
                distance_miles: 0
            };
            localData.posts.unshift(newPost);
            saveLocalData(localData);
            return newPost;
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
        if (!isSupabaseConfigured()) {
            const localData = getLocalData();
            return localData.comments.filter(comment => comment.post_id === postId)
                .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }

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
            const localData = getLocalData();
            return localData.comments.filter(comment => comment.post_id === postId)
                .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }
    },

    // Create a comment
    async createComment(postId, content, username, userColor) {
        if (!isSupabaseConfigured()) {
            const localData = getLocalData();
            const newComment = {
                id: crypto.randomUUID(),
                post_id: postId,
                content,
                username,
                user_color: userColor,
                emoji_identifier: generateEmojiIdentifier(),
                created_at: new Date().toISOString()
            };
            localData.comments.push(newComment);
            // Update post comment count
            const post = localData.posts.find(p => p.id === postId);
            if (post) {
                post.comment_count = localData.comments.filter(c => c.post_id === postId).length;
            }
            saveLocalData(localData);
            return newComment;
        }

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
            // Fallback to local storage
            const localData = getLocalData();
            const newComment = {
                id: crypto.randomUUID(),
                post_id: postId,
                content,
                username,
                user_color: userColor,
                emoji_identifier: generateEmojiIdentifier(),
                created_at: new Date().toISOString()
            };
            localData.comments.push(newComment);
            const post = localData.posts.find(p => p.id === postId);
            if (post) {
                post.comment_count = localData.comments.filter(c => c.post_id === postId).length;
            }
            saveLocalData(localData);
            return newComment;
        }
    }
};

// Votes operations
export const votesService = {
    // Get user's vote for a post
    async getUserVote(postId, deviceId) {
        if (!isSupabaseConfigured()) {
            const localData = getLocalData();
            return localData.votes[`${postId}_${deviceId}`] || 0;
        }

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
            const localData = getLocalData();
            return localData.votes[`${postId}_${deviceId}`] || 0;
        }
    },

    // Cast a vote (upsert)
    async castVote(postId, deviceId, voteType) {
        if (!isSupabaseConfigured()) {
            const localData = getLocalData();
            if (voteType === 0) {
                delete localData.votes[`${postId}_${deviceId}`];
            } else {
                localData.votes[`${postId}_${deviceId}`] = voteType;
            }
            // Update post vote count
            const post = localData.posts.find(p => p.id === postId);
            if (post) {
                post.vote_count = Object.entries(localData.votes)
                    .filter(([key]) => key.startsWith(`${postId}_`))
                    .reduce((sum, [, value]) => sum + value, 0);
            }
            saveLocalData(localData);
            return true;
        }

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
            // Fallback to local storage
            const localData = getLocalData();
            if (voteType === 0) {
                delete localData.votes[`${postId}_${deviceId}`];
            } else {
                localData.votes[`${postId}_${deviceId}`] = voteType;
            }
            const post = localData.posts.find(p => p.id === postId);
            if (post) {
                post.vote_count = Object.entries(localData.votes)
                    .filter(([key]) => key.startsWith(`${postId}_`))
                    .reduce((sum, [, value]) => sum + value, 0);
            }
            saveLocalData(localData);
            return true;
        }
    },

    // Get votes for multiple posts (for efficiency)
    async getVotesForPosts(postIds, deviceId) {
        if (!isSupabaseConfigured()) {
            const localData = getLocalData();
            const votes = {};
            postIds.forEach(postId => {
                const voteKey = `${postId}_${deviceId}`;
                if (localData.votes[voteKey]) {
                    votes[postId] = localData.votes[voteKey];
                }
            });
            return votes;
        }

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
            const localData = getLocalData();
            const votes = {};
            postIds.forEach(postId => {
                const voteKey = `${postId}_${deviceId}`;
                if (localData.votes[voteKey]) {
                    votes[postId] = localData.votes[voteKey];
                }
            });
            return votes;
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
        if (!isSupabaseConfigured()) {
            // Return a dummy subscription object for local storage mode
            return { 
                unsubscribe: () => {}, 
                channel: 'local_storage_fallback' 
            };
        }

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
        if (!isSupabaseConfigured()) {
            return { 
                unsubscribe: () => {}, 
                channel: 'local_storage_fallback' 
            };
        }

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
        if (subscription && subscription.channel !== 'local_storage_fallback') {
            supabase.removeChannel(subscription);
        }
    }
};
// LocalStorage-based data service for RipRap fishing app
// Maintains same API as previous version but stores data locally

// Generate random emoji identifier for comments
const COMMENT_EMOJIS = ['🐟', '🎣', '🌊', '⭐', '🔥', '💯', '👍', '🎯', '🌟', '💪'];

export const generateEmojiIdentifier = () => {
    return COMMENT_EMOJIS[Math.floor(Math.random() * COMMENT_EMOJIS.length)];
};

// Helper function to calculate distance between two points (Haversine formula)
export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in miles
}

// Local storage keys
const STORAGE_KEYS = {
    POSTS: 'riprap_posts',
    COMMENTS: 'riprap_comments',
    VOTES: 'riprap_votes',
    REPORTS: 'riprap_reports'
};

// Helper functions for localStorage
const getFromStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error(`Error reading from localStorage (${key}):`, error);
        return [];
    }
};

const saveToStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Error saving to localStorage (${key}):`, error);
    }
};

// Generate unique IDs
const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Posts operations
export const postsService = {
    // Get posts within radius
    async getNearbyPosts(latitude, longitude, radiusMiles = 5) {
        try {
            const allPosts = getFromStorage(STORAGE_KEYS.POSTS);
            
            const nearbyPosts = allPosts.filter(post => {
                if (!post.latitude || !post.longitude) return false;
                
                const distance = calculateDistance(
                    latitude, longitude,
                    post.latitude, post.longitude
                );
                
                return distance <= radiusMiles;
            }).map(post => {
                // Add distance calculation
                const distance = calculateDistance(
                    latitude, longitude,
                    post.latitude, post.longitude
                );
                
                return {
                    ...post,
                    distance_miles: Math.round(distance * 10) / 10
                };
            });

            // Sort by creation time (newest first)
            nearbyPosts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            
            return nearbyPosts;
        } catch (error) {
            console.error('Error fetching nearby posts:', error);
            return [];
        }
    },

    // Create a new post
    async createPost(content, username, userColor, latitude, longitude, locationName = '') {
        try {
            const posts = getFromStorage(STORAGE_KEYS.POSTS);
            
            const newPost = {
                id: generateId(),
                content,
                username,
                user_color: userColor,
                latitude,
                longitude,
                location_name: locationName,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
                upvotes: 0,
                downvotes: 0,
                vote_count: 0,
                comment_count: 0
            };

            posts.unshift(newPost); // Add to beginning
            saveToStorage(STORAGE_KEYS.POSTS, posts);
            
            return newPost;
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    },

    // Get a single post
    async getPost(postId) {
        try {
            const posts = getFromStorage(STORAGE_KEYS.POSTS);
            return posts.find(post => post.id === postId) || null;
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    },

    // Update post vote counts (called by votes service)
    updatePostVoteCounts(postId, upvotes, downvotes) {
        try {
            const posts = getFromStorage(STORAGE_KEYS.POSTS);
            const postIndex = posts.findIndex(post => post.id === postId);
            
            if (postIndex !== -1) {
                posts[postIndex].upvotes = upvotes;
                posts[postIndex].downvotes = downvotes;
                posts[postIndex].vote_count = upvotes - downvotes;
                posts[postIndex].updated_at = new Date().toISOString();
                saveToStorage(STORAGE_KEYS.POSTS, posts);
            }
        } catch (error) {
            console.error('Error updating post vote counts:', error);
        }
    },

    // Update post comment count (called by comments service)
    updatePostCommentCount(postId, commentCount) {
        try {
            const posts = getFromStorage(STORAGE_KEYS.POSTS);
            const postIndex = posts.findIndex(post => post.id === postId);
            
            if (postIndex !== -1) {
                posts[postIndex].comment_count = commentCount;
                posts[postIndex].updated_at = new Date().toISOString();
                saveToStorage(STORAGE_KEYS.POSTS, posts);
            }
        } catch (error) {
            console.error('Error updating post comment count:', error);
        }
    }
};

// Comments operations
export const commentsService = {
    // Get comments for a post
    async getComments(postId) {
        try {
            const allComments = getFromStorage(STORAGE_KEYS.COMMENTS);
            return allComments
                .filter(comment => comment.post_id === postId)
                .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        } catch (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
    },

    // Create a comment
    async createComment(postId, content, username, userColor) {
        try {
            const comments = getFromStorage(STORAGE_KEYS.COMMENTS);
            
            const newComment = {
                id: generateId(),
                post_id: postId,
                content,
                username,
                user_color: userColor,
                emoji_identifier: generateEmojiIdentifier(),
                created_at: new Date().toISOString()
            };

            comments.push(newComment);
            saveToStorage(STORAGE_KEYS.COMMENTS, comments);
            
            // Update post comment count
            const postComments = comments.filter(c => c.post_id === postId);
            postsService.updatePostCommentCount(postId, postComments.length);
            
            return newComment;
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
            const votes = getFromStorage(STORAGE_KEYS.VOTES);
            const vote = votes.find(v => v.post_id === postId && v.user_device_id === deviceId);
            return vote?.vote_type || 0;
        } catch (error) {
            console.error('Error fetching user vote:', error);
            return 0;
        }
    },

    // Cast a vote (upsert)
    async castVote(postId, deviceId, voteType) {
        try {
            const votes = getFromStorage(STORAGE_KEYS.VOTES);
            const existingVoteIndex = votes.findIndex(v => 
                v.post_id === postId && v.user_device_id === deviceId
            );

            if (voteType === 0) {
                // Remove vote
                if (existingVoteIndex !== -1) {
                    votes.splice(existingVoteIndex, 1);
                }
            } else {
                // Add or update vote
                const voteData = {
                    post_id: postId,
                    user_device_id: deviceId,
                    vote_type: voteType,
                    created_at: new Date().toISOString()
                };

                if (existingVoteIndex !== -1) {
                    votes[existingVoteIndex] = voteData;
                } else {
                    votes.push(voteData);
                }
            }

            saveToStorage(STORAGE_KEYS.VOTES, votes);
            
            // Update post vote counts
            const postVotes = votes.filter(v => v.post_id === postId);
            const upvotes = postVotes.filter(v => v.vote_type === 1).length;
            const downvotes = postVotes.filter(v => v.vote_type === -1).length;
            postsService.updatePostVoteCounts(postId, upvotes, downvotes);
            
            return true;
        } catch (error) {
            console.error('Error casting vote:', error);
            throw error;
        }
    },

    // Get votes for multiple posts (for efficiency)
    async getVotesForPosts(postIds, deviceId) {
        try {
            const allVotes = getFromStorage(STORAGE_KEYS.VOTES);
            const userVotes = {};
            
            allVotes.forEach(vote => {
                if (postIds.includes(vote.post_id) && vote.user_device_id === deviceId) {
                    userVotes[vote.post_id] = vote.vote_type;
                }
            });
            
            return userVotes;
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
            const reports = getFromStorage(STORAGE_KEYS.REPORTS);
            
            // Check if already reported by this device
            const existingReport = reports.find(r => 
                r.post_id === postId && r.reported_by_device_id === deviceId
            );
            
            if (existingReport) {
                console.log('Post already reported by this device');
                return existingReport;
            }
            
            const newReport = {
                id: generateId(),
                post_id: postId,
                reported_by_device_id: deviceId,
                reason,
                created_at: new Date().toISOString()
            };

            reports.push(newReport);
            saveToStorage(STORAGE_KEYS.REPORTS, reports);
            
            return newReport;
        } catch (error) {
            console.error('Error reporting post:', error);
            throw error;
        }
    },

    // Report a comment
    async reportComment(commentId, deviceId, reason = '') {
        try {
            const reports = getFromStorage(STORAGE_KEYS.REPORTS);
            
            const newReport = {
                id: generateId(),
                comment_id: commentId,
                reported_by_device_id: deviceId,
                reason,
                created_at: new Date().toISOString()
            };

            reports.push(newReport);
            saveToStorage(STORAGE_KEYS.REPORTS, reports);
            
            return newReport;
        } catch (error) {
            console.error('Error reporting comment:', error);
            throw error;
        }
    }
};

// Mock real-time subscriptions (no real-time in localStorage, but maintains API compatibility)
export const subscriptionsService = {
    // Subscribe to posts in a specific area (mock - no real-time updates)
    subscribeToNearbyPosts(latitude, longitude, radiusMiles, onNewPost, onPostUpdate) {
        // Return a mock subscription object
        return {
            unsubscribe: () => {
                // Mock unsubscribe
            }
        };
    },

    // Subscribe to comments for a specific post (mock)
    subscribeToComments(postId, onNewComment) {
        return {
            unsubscribe: () => {
                // Mock unsubscribe
            }
        };
    },

    // Unsubscribe from a channel (mock)
    unsubscribe(subscription) {
        if (subscription && subscription.unsubscribe) {
            subscription.unsubscribe();
        }
    }
};
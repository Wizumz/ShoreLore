// Frontend API client for RipRap fishing app
// Replaces IndexedDB operations with Netlify serverless function calls
// Maintains same interface for seamless migration from local storage

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/.netlify/functions/api';

/**
 * Generic API request helper with retry logic
 */
async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}/${endpoint}`;
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const requestOptions = { ...defaultOptions, ...options };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
        }

        return data.data;
    } catch (error) {
        console.error(`API request failed: ${endpoint}`, error);
        throw error;
    }
}

/**
 * API request with retry for network resilience
 */
async function apiRequestWithRetry(endpoint, options = {}, maxRetries = 2) {
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await apiRequest(endpoint, options);
        } catch (error) {
            lastError = error;
            
            // Don't retry on client errors (4xx) except 429 (rate limit)
            if (error.message.includes('HTTP 4') && !error.message.includes('HTTP 429')) {
                throw error;
            }

            // Wait before retry (exponential backoff)
            if (attempt < maxRetries) {
                const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s...
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    throw lastError;
}

/**
 * User Management API
 */
export const userAPI = {
    /**
     * Create or update user based on device ID
     */
    async upsertUser(deviceId, screenName = null, colorName = null, colorValue = null) {
        const body = { device_id: deviceId };
        if (screenName) body.screen_name = screenName;
        if (colorName) body.color_name = colorName;
        if (colorValue) body.color_value = colorValue;

        return await apiRequestWithRetry('upsert-user', {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }
};

/**
 * Posts API
 */
export const postsAPI = {
    /**
     * Create a new fishing post
     */
    async createPost(deviceId, content, lat = null, lng = null, nearestCity = null) {
        const body = {
            device_id: deviceId,
            content: content.trim()
        };

        if (lat !== null && lng !== null) {
            body.lat = lat;
            body.lng = lng;
        }

        if (nearestCity) {
            body.nearest_city = nearestCity;
        }

        return await apiRequestWithRetry('create-post', {
            method: 'POST',
            body: JSON.stringify(body)
        });
    },

    /**
     * Get posts with optional geospatial filtering
     */
    async getPosts(options = {}) {
        const {
            lat = null,
            lng = null,
            radiusM = 16093, // 10 miles default
            limit = 20,
            offset = 0,
            sort = 'hot', // hot, new, top
            since = null,
            coastwide = false
        } = options;

        const params = new URLSearchParams({
            limit: limit.toString(),
            offset: offset.toString(),
            sort,
            coastwide: coastwide.toString()
        });

        if (lat !== null && lng !== null) {
            params.append('lat', lat.toString());
            params.append('lng', lng.toString());
            params.append('radius_m', radiusM.toString());
        }

        if (since) {
            params.append('since', since);
        }

        return await apiRequestWithRetry(`get-posts?${params.toString()}`, {
            method: 'GET'
        });
    },

    /**
     * Get a single post with comments
     */
    async getPost(postId, deviceId = null) {
        const params = new URLSearchParams({ id: postId.toString() });
        if (deviceId) {
            params.append('device_id', deviceId);
        }

        return await apiRequestWithRetry(`get-post?${params.toString()}`, {
            method: 'GET'
        });
    }
};

/**
 * Voting API
 */
export const votesAPI = {
    /**
     * Cast or update a vote on a post
     * @param {string} deviceId - User's device ID
     * @param {number} postId - Post ID to vote on
     * @param {number} value - Vote value: 1 (upvote), -1 (downvote)
     */
    async castVote(deviceId, postId, value) {
        return await apiRequestWithRetry('vote', {
            method: 'POST',
            body: JSON.stringify({
                device_id: deviceId,
                post_id: postId,
                value: value
            })
        });
    }
};

/**
 * Comments API
 */
export const commentsAPI = {
    /**
     * Create a comment on a post
     */
    async createComment(deviceId, postId, content, emoji = '🐟') {
        return await apiRequestWithRetry('create-comment', {
            method: 'POST',
            body: JSON.stringify({
                device_id: deviceId,
                post_id: postId,
                content: content.trim(),
                emoji: emoji
            })
        });
    }
};

/**
 * Reports API
 */
export const reportsAPI = {
    /**
     * Report a post for moderation
     */
    async reportPost(deviceId, postId, reason) {
        return await apiRequestWithRetry('report', {
            method: 'POST',
            body: JSON.stringify({
                device_id: deviceId,
                post_id: postId,
                reason: reason.trim()
            })
        });
    }
};

/**
 * Combined API service - maintains compatibility with existing IndexedDB interface
 */
export const apiService = {
    ...userAPI,
    ...postsAPI,
    ...votesAPI,
    ...commentsAPI,
    ...reportsAPI,

    /**
     * Legacy compatibility method for getting user votes on posts
     * @param {number[]} postIds - Array of post IDs
     * @param {string} deviceId - User's device ID
     * @returns {Object} Map of postId -> vote value
     */
    async getVotesForPosts(postIds, deviceId) {
        // Since we don't have a bulk endpoint, we'll get votes when fetching posts
        // This is called during post loading, so we return empty for now
        // The individual post data will include vote information
        return {};
    },

    /**
     * Legacy compatibility method for getting comments on a post
     * @param {number} postId - Post ID
     * @returns {Array} Array of comment objects
     */
    async getComments(postId) {
        try {
            const postData = await this.getPost(postId);
            return postData.comments || [];
        } catch (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
    }
};

/**
 * Offline support utilities
 */
export const offlineStorage = {
    /**
     * Store data for offline access
     */
    storeOffline(key, data) {
        try {
            localStorage.setItem(`riprap_offline_${key}`, JSON.stringify({
                data,
                timestamp: Date.now()
            }));
        } catch (error) {
            console.warn('Failed to store offline data:', error);
        }
    },

    /**
     * Retrieve offline data
     */
    getOffline(key, maxAge = 3600000) { // 1 hour default
        try {
            const stored = localStorage.getItem(`riprap_offline_${key}`);
            if (!stored) return null;

            const { data, timestamp } = JSON.parse(stored);
            const age = Date.now() - timestamp;

            if (age > maxAge) {
                localStorage.removeItem(`riprap_offline_${key}`);
                return null;
            }

            return data;
        } catch (error) {
            console.warn('Failed to retrieve offline data:', error);
            return null;
        }
    },

    /**
     * Clear all offline data
     */
    clearOffline() {
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith('riprap_offline_')) {
                    localStorage.removeItem(key);
                }
            });
        } catch (error) {
            console.warn('Failed to clear offline data:', error);
        }
    }
};

/**
 * Network status utilities
 */
export const networkUtils = {
    /**
     * Check if we're online
     */
    isOnline() {
        return navigator.onLine;
    },

    /**
     * Test API connectivity
     */
    async testConnection() {
        try {
            await fetch(`${API_BASE_URL}/get-posts?limit=1`, {
                method: 'GET',
                signal: AbortSignal.timeout(5000) // 5 second timeout
            });
            return true;
        } catch (error) {
            return false;
        }
    },

    /**
     * Setup network event listeners
     */
    setupNetworkListeners(onOnline, onOffline) {
        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);

        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }
};

// Export default for backward compatibility
export default apiService;
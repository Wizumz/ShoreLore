// CRUD Operations Example for ShoreLore Posts using Firebase
// This file demonstrates complete Create, Read, Update, Delete operations
// for the posts entity in the ShoreLore fishing app

import firebaseService from './firebaseService.js';

/**
 * Complete CRUD Example for Posts Entity
 * 
 * This demonstrates all the Firebase operations available for posts
 * in the ShoreLore fishing app, showcasing real-world usage patterns.
 */
export class PostsCRUDExample {
    constructor() {
        this.demoUser = {
            id: 'demo_user_123',
            screenName: 'DemoAngler',
            color: { name: 'Navy', value: '#1e40af' }
        };
        
        this.demoLocation = {
            lat: 41.6688,
            lng: -70.2962,
            nearestCity: 'Cape Cod, MA'
        };
    }

    /**
     * CREATE OPERATION
     * Create a new fishing post
     */
    async createPost(content = "Just caught a 28-inch striped bass off Cape Cod! Perfect conditions today! 🎣") {
        try {
            console.log('🆕 Creating new post...');
            
            const newPost = await firebaseService.createPost(
                content,
                this.demoLocation,
                this.demoUser
            );
            
            console.log('✅ Post created successfully:', newPost);
            return newPost;
        } catch (error) {
            console.error('❌ Failed to create post:', error);
            throw error;
        }
    }

    /**
     * READ OPERATIONS
     * Various ways to read posts from Firebase
     */
    async readPosts(options = {}) {
        const {
            location = this.demoLocation,
            radiusKm = 16, // 10 miles
            limitCount = 20,
            sortBy = 'hot'
        } = options;

        try {
            console.log('📖 Reading posts...');
            console.log('Parameters:', { location, radiusKm, limitCount, sortBy });
            
            const posts = await firebaseService.getPosts(
                location,
                radiusKm,
                limitCount,
                sortBy
            );
            
            console.log(`✅ Retrieved ${posts.length} posts:`, posts);
            return posts;
        } catch (error) {
            console.error('❌ Failed to read posts:', error);
            throw error;
        }
    }

    /**
     * READ SINGLE POST
     * Get a specific post with all its comments
     */
    async readSinglePost(postId) {
        try {
            console.log(`📖 Reading single post: ${postId}`);
            
            const post = await firebaseService.getPost(postId);
            
            console.log('✅ Post retrieved:', post);
            console.log(`📝 Post has ${post.comments.length} comments`);
            return post;
        } catch (error) {
            console.error('❌ Failed to read post:', error);
            throw error;
        }
    }

    /**
     * UPDATE OPERATIONS
     * Voting and commenting (posts themselves are immutable)
     */
    async voteOnPost(postId, voteType = 'upvote') {
        try {
            console.log(`👍 Casting ${voteType} on post ${postId}...`);
            
            await firebaseService.castVote(postId, this.demoUser.id, voteType);
            
            console.log(`✅ Vote cast successfully: ${voteType}`);
        } catch (error) {
            console.error('❌ Failed to vote:', error);
            throw error;
        }
    }

    async addComment(postId, content = "Great catch! What bait did you use?") {
        try {
            console.log(`💬 Adding comment to post ${postId}...`);
            
            const comment = await firebaseService.createComment(
                postId,
                content,
                this.demoUser
            );
            
            console.log('✅ Comment added successfully:', comment);
            return comment;
        } catch (error) {
            console.error('❌ Failed to add comment:', error);
            throw error;
        }
    }

    /**
     * DELETE OPERATIONS
     * Reporting posts (actual deletion is admin-only)
     */
    async reportPost(postId, reason = "Inappropriate content") {
        try {
            console.log(`🚩 Reporting post ${postId}...`);
            
            await firebaseService.reportPost(postId, this.demoUser.id, reason);
            
            console.log('✅ Post reported successfully');
        } catch (error) {
            console.error('❌ Failed to report post:', error);
            throw error;
        }
    }

    /**
     * REAL-TIME OPERATIONS
     * Subscribe to live updates
     */
    subscribeToLivePosts(callback) {
        console.log('🔄 Subscribing to live post updates...');
        
        const unsubscribe = firebaseService.subscribeToPostsUpdates(
            (posts) => {
                console.log(`📡 Live update: ${posts.length} posts received`);
                callback(posts);
            },
            this.demoLocation,
            16, // 10 miles radius
            20  // limit
        );
        
        console.log('✅ Subscription active. Call unsubscribe() to stop.');
        return unsubscribe;
    }

    /**
     * ADVANCED OPERATIONS
     * Complex queries and data management
     */
    async getUserVotingHistory(postIds) {
        try {
            console.log('📊 Getting user voting history...');
            
            const votes = await firebaseService.getUserVotes(this.demoUser.id, postIds);
            
            console.log('✅ Voting history:', votes);
            return votes;
        } catch (error) {
            console.error('❌ Failed to get voting history:', error);
            throw error;
        }
    }

    async getCommentsForPost(postId) {
        try {
            console.log(`💬 Getting all comments for post ${postId}...`);
            
            const comments = await firebaseService.getComments(postId);
            
            console.log(`✅ Retrieved ${comments.length} comments:`, comments);
            return comments;
        } catch (error) {
            console.error('❌ Failed to get comments:', error);
            throw error;
        }
    }

    /**
     * DEMONSTRATION WORKFLOW
     * Complete example showing typical app usage
     */
    async runCompleteDemo() {
        console.log('🎣 Starting ShoreLore Firebase CRUD Demo...\n');
        
        try {
            // 1. Create a new post
            const newPost = await this.createPost();
            const postId = newPost.id;
            
            // 2. Read posts in the area
            await this.readPosts();
            
            // 3. Vote on the post
            await this.voteOnPost(postId, 'upvote');
            
            // 4. Add a comment
            await this.addComment(postId);
            
            // 5. Read the post with comments
            await this.readSinglePost(postId);
            
            // 6. Get voting history
            await this.getUserVotingHistory([postId]);
            
            // 7. Subscribe to live updates (will run for 10 seconds)
            const unsubscribe = this.subscribeToLivePosts((posts) => {
                console.log(`📡 Live update received: ${posts.length} posts`);
            });
            
            // Stop subscription after 10 seconds
            setTimeout(() => {
                unsubscribe();
                console.log('🔄 Live subscription stopped');
            }, 10000);
            
            console.log('\n🎉 Demo completed successfully!');
            
        } catch (error) {
            console.error('💥 Demo failed:', error);
        }
    }
}

/**
 * Utility functions for testing and debugging
 */
export const FirebaseTestUtils = {
    /**
     * Test Firebase connection
     */
    async testConnection() {
        try {
            console.log('🔌 Testing Firebase connection...');
            
            // Try to read posts (should work even with no data)
            const posts = await firebaseService.getPosts(null, 16, 1);
            
            console.log('✅ Firebase connection successful');
            return true;
        } catch (error) {
            console.error('❌ Firebase connection failed:', error);
            return false;
        }
    },

    /**
     * Network operations testing
     */
    async testOfflineMode() {
        try {
            console.log('📴 Testing offline mode...');
            
            // Go offline
            await firebaseService.goOffline();
            console.log('📴 Switched to offline mode');
            
            // Try to read cached data
            const posts = await firebaseService.getPosts(null, 16, 1);
            console.log(`✅ Offline read successful: ${posts.length} posts from cache`);
            
            // Go back online
            await firebaseService.goOnline();
            console.log('📶 Switched back to online mode');
            
            return true;
        } catch (error) {
            console.error('❌ Offline mode test failed:', error);
            return false;
        }
    }
};

// Export a ready-to-use demo instance
export const crudDemo = new PostsCRUDExample();

// Quick demo function for immediate testing
export async function runQuickDemo() {
    console.log('🚀 Running quick Firebase CRUD demo...');
    
    const demo = new PostsCRUDExample();
    
    try {
        // Test connection first
        const connected = await FirebaseTestUtils.testConnection();
        if (!connected) {
            throw new Error('Firebase connection failed');
        }
        
        // Create and read a post
        const post = await demo.createPost("Demo post: Firebase integration is working! 🔥");
        console.log('📝 Created demo post:', post.id);
        
        // Read recent posts
        const posts = await demo.readPosts({ limitCount: 5 });
        console.log(`📚 Read ${posts.length} recent posts`);
        
        console.log('✨ Quick demo completed successfully!');
        
    } catch (error) {
        console.error('💥 Quick demo failed:', error);
    }
}

export default PostsCRUDExample;
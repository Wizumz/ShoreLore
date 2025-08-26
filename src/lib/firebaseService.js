// Firebase service layer for ShoreLore fishing app
// Provides same interface as existing IndexedDB operations for seamless migration

import { 
  collection, 
  doc, 
  addDoc, 
  setDoc,
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter,
  onSnapshot,
  increment,
  serverTimestamp,
  GeoPoint,
  enableNetwork,
  disableNetwork
} from 'firebase/firestore';

import { db, auth, getAnonymousUser, isDemoMode } from './firebase.js';

/**
 * Geographic distance calculation (Haversine formula)
 */
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in kilometers
}

/**
 * Convert kilometers to miles
 */
function kmToMiles(km) {
  return km * 0.621371;
}

/**
 * Generate device-based user ID that persists across sessions
 * This maintains compatibility with the existing anonymous user system
 */
function generateDeviceId() {
  let deviceId = localStorage.getItem('shorelore_device_id');
  if (!deviceId) {
    // Generate a unique device ID based on browser characteristics
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('ShoreLore device fingerprint', 2, 2);
    
    const fingerprint = [
      canvas.toDataURL(),
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      navigator.platform
    ].join('|');
    
    // Create hash from fingerprint
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    deviceId = `device_${Math.abs(hash)}_${Date.now()}`;
    localStorage.setItem('shorelore_device_id', deviceId);
  }
  return deviceId;
}

/**
 * User Management Service
 */
export const userService = {
  /**
   * Get or create user profile in Firebase
   */
  async getOrCreateUser(screenName = null, color = null) {
    try {
      // In demo mode, return mock user immediately
      if (isDemoMode) {
        console.warn('Demo mode: Returning mock user profile');
        return {
          id: 'demo-user-' + Date.now(),
          screenName: screenName || this.generateScreenName(),
          color: color || { name: 'Navy', value: '#1e40af' },
          createdAt: new Date(),
          postsCount: 0,
          commentsCount: 0,
          votesCount: 0,
          isDemoMode: true
        };
      }
      
      // Ensure anonymous authentication
      const firebaseUser = await getAnonymousUser();
      const deviceId = generateDeviceId();
      const userId = `${firebaseUser.uid}_${deviceId}`;
      
      // Check if user profile exists in Firestore
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);
      
      if (userDoc.exists()) {
        return { id: userId, ...userDoc.data() };
      }
      
      // Create new user profile
      const userData = {
        deviceId,
        firebaseUid: firebaseUser.uid,
        screenName: screenName || this.generateScreenName(),
        color: color || { name: 'Navy', value: '#1e40af' },
        createdAt: serverTimestamp(),
        postsCount: 0,
        commentsCount: 0,
        votesCount: 0,
        lastActive: serverTimestamp()
      };
      
      await setDoc(userRef, userData);
      return { id: userId, ...userData };
    } catch (error) {
      console.error('Error getting/creating user:', error);
      
      // Fallback for network/Firebase errors
      if (error.code === 'auth/network-request-failed' || 
          error.message.includes('network') ||
          error.message.includes('CSP') ||
          error.message.includes('firestore')) {
        console.warn('Firebase error detected, falling back to offline user profile');
        return {
          id: 'offline-user-' + Date.now(),
          screenName: screenName || this.generateScreenName(),
          color: color || { name: 'Navy', value: '#1e40af' },
          createdAt: new Date(),
          postsCount: 0,
          commentsCount: 0,
          votesCount: 0,
          isOfflineMode: true
        };
      }
      
      throw error;
    }
  },

  /**
   * Update user profile
   */
  async updateUser(userId, updates) {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        ...updates,
        lastActive: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  /**
   * Generate random screen name (compatible with existing system)
   */
  generateScreenName() {
    const adjectives = ['Angler', 'Reel', 'Deep', 'Shore', 'Cast', 'Hook', 'Tide', 'Wave'];
    const nouns = ['Fisher', 'Master', 'Hunter', 'Catcher', 'Seeker', 'Captain', 'Admiral'];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 999) + 1;
    return `${adjective}${noun}${number}`;
  }
};

/**
 * Posts Service
 */
export const postsService = {
  /**
   * Create a new post
   */
  async createPost(content, location, user) {
    try {
      // In demo mode, return mock success without actually creating the post
      if (isDemoMode) {
        console.warn('Demo mode: Post creation simulated (no actual Firebase connection)');
        return { 
          id: 'demo-post-' + Date.now(), 
          success: true,
          message: 'Post created in demo mode' 
        };
      }
      
      const postsRef = collection(db, 'posts');
      const postData = {
        content: content.trim(),
        authorId: user.id,
        authorName: user.screenName,
        authorColor: user.color,
        location: location ? new GeoPoint(location.lat, location.lng) : null,
        nearestCity: location?.nearestCity || null,
        upvotes: 0,
        downvotes: 0,
        score: 0,
        commentsCount: 0,
        reportsCount: 0,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      const docRef = await addDoc(postsRef, postData);
      
      // Update user's post count
      await userService.updateUser(user.id, {
        postsCount: increment(1),
        lastActive: serverTimestamp()
      });
      
      return { id: docRef.id, ...postData };
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  /**
   * Get posts with location filtering
   */
  async getPosts(userLocation = null, radiusKm = 16, limitCount = 20, sortBy = 'hot') {
    try {
      // In demo mode, return empty array without Firebase call
      if (isDemoMode) {
        console.warn('Demo mode: Returning empty posts array (no actual Firebase connection)');
        return [];
      }
      
      const postsRef = collection(db, 'posts');
      let q;
      
      // Base query with sorting
      switch (sortBy) {
        case 'new':
          q = query(postsRef, orderBy('createdAt', 'desc'), limit(limitCount));
          break;
        case 'top':
          q = query(postsRef, orderBy('score', 'desc'), limit(limitCount));
          break;
        case 'hot':
        default:
          // Hot = combination of score and recency
          q = query(postsRef, orderBy('updatedAt', 'desc'), limit(limitCount));
          break;
      }
      
      const querySnapshot = await getDocs(q);
      let posts = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        posts.push({
          id: doc.id,
          ...data,
          // Convert Firestore timestamps to ISO strings for compatibility
          createdAt: data.createdAt?.toDate()?.toISOString() || new Date().toISOString(),
          updatedAt: data.updatedAt?.toDate()?.toISOString() || new Date().toISOString(),
          // Convert GeoPoint to lat/lng object
          location: data.location ? {
            lat: data.location.latitude,
            lng: data.location.longitude
          } : null
        });
      });
      
      // Filter by location if provided (client-side filtering for now)
      if (userLocation && userLocation.lat && userLocation.lng) {
        posts = posts.filter(post => {
          if (!post.location) return false;
          const distance = calculateDistance(
            userLocation.lat, userLocation.lng,
            post.location.lat, post.location.lng
          );
          return distance <= radiusKm;
        });
        
        // Add distance to each post
        posts = posts.map(post => ({
          ...post,
          distance: post.location ? kmToMiles(calculateDistance(
            userLocation.lat, userLocation.lng,
            post.location.lat, post.location.lng
          )) : null
        }));
      }
      
      // Filter out heavily downvoted posts (score <= -5)
      posts = posts.filter(post => post.score > -5);
      
      return posts;
    } catch (error) {
      console.error('Error getting posts:', error);
      throw error;
    }
  },

  /**
   * Get a single post with comments
   */
  async getPost(postId) {
    try {
      const postRef = doc(db, 'posts', postId);
      const postDoc = await getDoc(postRef);
      
      if (!postDoc.exists()) {
        throw new Error('Post not found');
      }
      
      const postData = postDoc.data();
      
      // Get comments for this post
      const comments = await commentsService.getComments(postId);
      
      return {
        id: postDoc.id,
        ...postData,
        comments,
        createdAt: postData.createdAt?.toDate()?.toISOString() || new Date().toISOString(),
        updatedAt: postData.updatedAt?.toDate()?.toISOString() || new Date().toISOString(),
        location: postData.location ? {
          lat: postData.location.latitude,
          lng: postData.location.longitude
        } : null
      };
    } catch (error) {
      console.error('Error getting post:', error);
      throw error;
    }
  },

  /**
   * Subscribe to posts updates (real-time)
   */
  subscribeToPosts(callback, userLocation = null, radiusKm = 16, limitCount = 20) {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('updatedAt', 'desc'), limit(limitCount));
    
    return onSnapshot(q, (querySnapshot) => {
      let posts = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        posts.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate()?.toISOString() || new Date().toISOString(),
          updatedAt: data.updatedAt?.toDate()?.toISOString() || new Date().toISOString(),
          location: data.location ? {
            lat: data.location.latitude,
            lng: data.location.longitude
          } : null
        });
      });
      
      // Apply location filtering
      if (userLocation && userLocation.lat && userLocation.lng) {
        posts = posts.filter(post => {
          if (!post.location) return false;
          const distance = calculateDistance(
            userLocation.lat, userLocation.lng,
            post.location.lat, post.location.lng
          );
          return distance <= radiusKm;
        });
      }
      
      posts = posts.filter(post => post.score > -5);
      callback(posts);
    });
  }
};

/**
 * Voting Service
 */
export const votesService = {
  /**
   * Cast or update a vote
   */
  async castVote(postId, userId, voteType) {
    try {
      const voteRef = doc(db, 'votes', `${userId}_${postId}`);
      const postRef = doc(db, 'posts', postId);
      
      // Get existing vote and post
      const [voteDoc, postDoc] = await Promise.all([
        getDoc(voteRef),
        getDoc(postRef)
      ]);
      
      if (!postDoc.exists()) {
        throw new Error('Post not found');
      }
      
      const postData = postDoc.data();
      const existingVote = voteDoc.exists() ? voteDoc.data() : null;
      
      let upvoteChange = 0;
      let downvoteChange = 0;
      let scoreChange = 0;
      
      // Calculate vote changes
      if (existingVote) {
        // Remove existing vote
        if (existingVote.type === 'upvote') {
          upvoteChange -= 1;
          scoreChange -= 1;
        } else {
          downvoteChange -= 1;
          scoreChange += 1;
        }
      }
      
      // Add new vote if different or remove if same
      if (!existingVote || existingVote.type !== voteType) {
        if (voteType === 'upvote') {
          upvoteChange += 1;
          scoreChange += 1;
        } else {
          downvoteChange += 1;
          scoreChange -= 1;
        }
        
        // Save vote
        await setDoc(voteRef, {
          userId,
          postId,
          type: voteType,
          createdAt: serverTimestamp()
        });
      } else {
        // Remove vote if clicking same type
        await deleteDoc(voteRef);
      }
      
      // Update post counts
      await updateDoc(postRef, {
        upvotes: increment(upvoteChange),
        downvotes: increment(downvoteChange),
        score: increment(scoreChange),
        updatedAt: serverTimestamp()
      });
      
      // Update user vote count
      await userService.updateUser(userId, {
        votesCount: increment(1)
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error casting vote:', error);
      throw error;
    }
  },

  /**
   * Get user's votes for multiple posts
   */
  async getUserVotes(userId, postIds) {
    try {
      const votes = {};
      
      // Get all votes for this user
      const votesRef = collection(db, 'votes');
      const q = query(votesRef, where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (postIds.includes(data.postId)) {
          votes[data.postId] = data.type;
        }
      });
      
      return votes;
    } catch (error) {
      console.error('Error getting user votes:', error);
      throw error;
    }
  }
};

/**
 * Comments Service
 */
export const commentsService = {
  /**
   * Create a comment on a post
   */
  async createComment(postId, content, user) {
    try {
      const commentsRef = collection(db, 'comments');
      const commentData = {
        postId,
        content: content.trim(),
        authorId: user.id,
        authorName: user.screenName,
        authorColor: user.color,
        createdAt: serverTimestamp()
      };
      
      const docRef = await addDoc(commentsRef, commentData);
      
      // Update post comment count
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        commentsCount: increment(1),
        updatedAt: serverTimestamp()
      });
      
      // Update user comment count
      await userService.updateUser(user.id, {
        commentsCount: increment(1)
      });
      
      return { id: docRef.id, ...commentData };
    } catch (error) {
      console.error('Error creating comment:', error);
      throw error;
    }
  },

  /**
   * Get comments for a post
   */
  async getComments(postId) {
    try {
      const commentsRef = collection(db, 'comments');
      const q = query(
        commentsRef, 
        where('postId', '==', postId), 
        orderBy('createdAt', 'asc')
      );
      
      const querySnapshot = await getDocs(q);
      const comments = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        comments.push({
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate()?.toISOString() || new Date().toISOString()
        });
      });
      
      return comments;
    } catch (error) {
      console.error('Error getting comments:', error);
      throw error;
    }
  }
};

/**
 * Reports Service
 */
export const reportsService = {
  /**
   * Report a post
   */
  async reportPost(postId, userId, reason) {
    try {
      const reportsRef = collection(db, 'reports');
      const reportData = {
        postId,
        userId,
        reason: reason.trim(),
        createdAt: serverTimestamp()
      };
      
      await addDoc(reportsRef, reportData);
      
      // Update post report count
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        reportsCount: increment(1)
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error reporting post:', error);
      throw error;
    }
  }
};

/**
 * Network management
 */
export const networkService = {
  async goOffline() {
    await disableNetwork(db);
  },
  
  async goOnline() {
    await enableNetwork(db);
  }
};

/**
 * Main Firebase service object - maintains compatibility with existing IndexedDB interface
 */
export const firebaseService = {
  // User operations
  getUserIdentity: userService.getOrCreateUser,
  updateUserProfile: userService.updateUser,
  
  // Post operations
  createPost: postsService.createPost,
  getPosts: postsService.getPosts,
  getPost: postsService.getPost,
  subscribeToPostsUpdates: postsService.subscribeToPosts,
  
  // Voting operations
  castVote: votesService.castVote,
  getUserVotes: votesService.getUserVotes,
  
  // Comment operations
  createComment: commentsService.createComment,
  getComments: commentsService.getComments,
  
  // Report operations
  reportPost: reportsService.reportPost,
  
  // Network operations
  goOffline: networkService.goOffline,
  goOnline: networkService.goOnline
};

export default firebaseService;
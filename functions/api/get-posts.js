const { 
  db, 
  createResponse, 
  checkRateLimit, 
  getClientIP,
  calculateDistance 
} = require('../lib/firebase-utils');

/**
 * Firebase function: get-posts
 * Retrieves posts with optional geospatial filtering, pagination, and sorting
 */
async function getPosts(req, res) {
  try {
    // Rate limiting
    const clientIP = getClientIP(req);
    checkRateLimit(clientIP, 60, 60000); // 60 requests per minute for reads

    // Parse query parameters
    const {
      lat,
      lng, 
      radius_m = '16093', // Default 10 miles in meters
      limit = '20',
      offset = '0',
      sort = 'hot', // hot, new, top
      since,
      coastwide = 'false'
    } = req.query;

    // Validate numeric parameters
    const numericLimit = parseInt(limit);
    const numericOffset = parseInt(offset);
    const numericRadius = parseInt(radius_m);

    if (isNaN(numericLimit) || numericLimit < 1 || numericLimit > 50) {
      return createResponse(res, 400, null, 'limit must be between 1 and 50');
    }

    if (isNaN(numericOffset) || numericOffset < 0) {
      return createResponse(res, 400, null, 'offset must be >= 0');
    }

    if (lat && lng) {
      const numericLat = parseFloat(lat);
      const numericLng = parseFloat(lng);

      if (isNaN(numericLat) || numericLat < -90 || numericLat > 90) {
        return createResponse(res, 400, null, 'lat must be between -90 and 90');
      }

      if (isNaN(numericLng) || numericLng < -180 || numericLng > 180) {
        return createResponse(res, 400, null, 'lng must be between -180 and 180');
      }

      if (isNaN(numericRadius) || numericRadius < 1000 || numericRadius > 160934) {
        return createResponse(res, 400, null, 'radius_m must be between 1000 and 160934 (1-100 miles)');
      }
    }

    // Build the query
    let query = db.collection('posts');

    // Apply date filtering if 'since' provided
    if (since) {
      const sinceDate = new Date(since);
      if (!isNaN(sinceDate.getTime())) {
        query = query.where('created_at', '>=', sinceDate);
      }
    }

    // Apply sorting
    switch (sort) {
      case 'new':
        query = query.orderBy('created_at', 'desc');
        break;
      case 'top':
        query = query.orderBy('vote_score', 'desc').orderBy('created_at', 'desc');
        break;
      case 'hot':
      default:
        // For hot sorting, we'll use a combination of vote score and recency
        // Since Firestore doesn't support complex sorting, we'll fetch and sort in memory
        query = query.orderBy('created_at', 'desc');
        break;
    }

    // Apply pagination
    query = query.offset(numericOffset).limit(numericLimit);

    // Execute query
    const postsSnapshot = await query.get();
    let posts = [];

    // Get user data for each post
    for (const doc of postsSnapshot.docs) {
      const postData = doc.data();
      
      // Get user information
      const userDoc = await db.collection('users').doc(postData.user_id).get();
      const userData = userDoc.exists ? userDoc.data() : null;

      // Get comment count
      const commentsSnapshot = await db.collection('comments')
        .where('post_id', '==', doc.id)
        .get();

      const post = {
        id: doc.id,
        content: postData.content,
        author: userData ? userData.screen_name : 'Unknown',
        author_color: userData ? {
          name: userData.color_name,
          value: userData.color_value
        } : { name: 'Gray', value: '#6b7280' },
        location: postData.location ? {
          lat: postData.location.lat,
          lng: postData.location.lng,
          nearest_city: postData.nearest_city
        } : {
          lat: null,
          lng: null,
          nearest_city: postData.nearest_city
        },
        upvotes: postData.upvotes || 0,
        downvotes: postData.downvotes || 0,
        vote_score: postData.vote_score || 0,
        created_at: postData.created_at.toISOString(),
        updated_at: postData.updated_at.toISOString(),
        comment_count: commentsSnapshot.size,
        distance_m: null // Will be calculated if lat/lng provided
      };

      posts.push(post);
    }

    // Apply geospatial filtering if coordinates provided and not coastwide
    if (lat && lng && coastwide !== 'true') {
      const numericLat = parseFloat(lat);
      const numericLng = parseFloat(lng);
      const radiusInMiles = numericRadius / 1609.34; // Convert meters to miles

      posts = posts.filter(post => {
        if (!post.location.lat || !post.location.lng) return false;
        
        const distance = calculateDistance(
          numericLat, numericLng,
          post.location.lat, post.location.lng
        );
        
        post.distance_m = Math.round(distance * 1609.34); // Convert miles to meters
        return distance <= radiusInMiles;
      });

      // Sort by distance for geospatial queries
      posts.sort((a, b) => a.distance_m - b.distance_m);
    }

    // Apply hot sorting if specified (after filtering)
    if (sort === 'hot') {
      posts.sort((a, b) => {
        const aScore = calculateHotScore(a.vote_score, a.created_at);
        const bScore = calculateHotScore(b.vote_score, b.created_at);
        return bScore - aScore;
      });
    }

    // Calculate total count for pagination (approximate)
    let totalCount = posts.length;
    if (numericOffset === 0) {
      // For first page, try to get a better estimate
      const countSnapshot = await db.collection('posts').get();
      totalCount = countSnapshot.size;
    }

    const responseData = {
      posts,
      pagination: {
        limit: numericLimit,
        offset: numericOffset,
        total: totalCount,
        has_more: posts.length === numericLimit
      },
      filters: {
        lat: lat ? parseFloat(lat) : null,
        lng: lng ? parseFloat(lng) : null,
        radius_m: numericRadius,
        sort,
        since: since || null,
        coastwide: coastwide === 'true'
      }
    };

    return createResponse(res, 200, responseData);

  } catch (error) {
    console.error('Get posts error:', error);
    return createResponse(res, 500, null, error.message || 'Internal server error');
  }
}

/**
 * Calculate "hot" score based on vote score and post age
 */
function calculateHotScore(voteScore, createdAt) {
  const now = new Date();
  const postTime = new Date(createdAt);
  const ageInHours = (now - postTime) / (1000 * 60 * 60);
  
  // Hot score formula: vote score divided by age factor
  // More recent posts get higher scores
  const ageFactor = Math.pow(ageInHours + 2, 1.8);
  return voteScore / ageFactor;
}

module.exports = { getPosts };
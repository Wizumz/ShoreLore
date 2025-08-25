const { 
  db, 
  createResponse, 
  validateRequired, 
  checkRateLimit, 
  moderateContent, 
  getClientIP,
  getNearestCityFromCoords 
} = require('../lib/firebase-utils');

/**
 * Firebase function: create-post
 * Creates a new fishing post with optional geolocation
 */
async function createPost(req, res) {
  try {
    // Rate limiting - stricter for post creation
    const clientIP = getClientIP(req);
    checkRateLimit(clientIP, 3, 60000); // 3 posts per minute

    // Parse request body
    let body;
    try {
      body = req.body;
    } catch (e) {
      return createResponse(res, 400, null, 'Invalid JSON in request body');
    }

    // Validate required fields
    validateRequired(body, ['device_id', 'content']);

    const { device_id, content, lat, lng, nearest_city } = body;

    // Validate content
    moderateContent(content);

    // Validate coordinates if provided
    if ((lat && !lng) || (!lat && lng)) {
      return createResponse(res, 400, null, 'Both lat and lng must be provided together');
    }

    if (lat && (lat < -90 || lat > 90)) {
      return createResponse(res, 400, null, 'Latitude must be between -90 and 90');
    }

    if (lng && (lng < -180 || lng > 180)) {
      return createResponse(res, 400, null, 'Longitude must be between -180 and 180');
    }

    // Find user by device_id
    const usersSnapshot = await db.collection('users')
      .where('device_id', '==', device_id)
      .limit(1)
      .get();

    if (usersSnapshot.empty) {
      return createResponse(res, 404, null, 'User not found. Please create user account first.');
    }

    const userDoc = usersSnapshot.docs[0];
    const userData = userDoc.data();
    const userId = userDoc.id;

    // Prepare post data
    const postData = {
      user_id: userId,
      content: content.trim(),
      upvotes: 0,
      downvotes: 0,
      vote_score: 0,
      created_at: new Date(),
      updated_at: new Date(),
      nearest_city: nearest_city || (lat && lng ? getNearestCityFromCoords(lat, lng) : null)
    };

    // Add location data if provided
    if (lat && lng) {
      postData.location = {
        lat: lat,
        lng: lng
      };
    }

    // Create the post
    const postRef = await db.collection('posts').add(postData);
    const newPost = await postRef.get();
    const newPostData = { id: newPost.id, ...newPost.data() };

    // Format response data
    const responseData = {
      id: newPostData.id,
      content: newPostData.content,
      author: userData.screen_name,
      author_color: {
        name: userData.color_name,
        value: userData.color_value
      },
      location: {
        lat: lat || null,
        lng: lng || null,
        nearest_city: newPostData.nearest_city
      },
      upvotes: newPostData.upvotes,
      downvotes: newPostData.downvotes,
      vote_score: newPostData.vote_score,
      created_at: newPostData.created_at.toISOString(),
      updated_at: newPostData.updated_at.toISOString(),
      comment_count: 0 // New post has no comments
    };

    return createResponse(res, 201, responseData);

  } catch (error) {
    console.error('Create post error:', error);
    return createResponse(res, 500, null, error.message || 'Internal server error');
  }
}

module.exports = { createPost };
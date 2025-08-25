const { 
  db, 
  createResponse, 
  checkRateLimit, 
  getClientIP 
} = require('../lib/firebase-utils');

/**
 * Firebase function: get-post
 * Retrieves a single post with its comments
 */
async function getPost(req, res) {
  try {
    // Rate limiting
    const clientIP = getClientIP(req);
    checkRateLimit(clientIP, 60, 60000); // 60 requests per minute for reads

    // Get post ID from query parameters
    const { post_id } = req.query;

    if (!post_id) {
      return createResponse(res, 400, null, 'post_id is required');
    }

    // Get the post
    const postDoc = await db.collection('posts').doc(post_id).get();
    
    if (!postDoc.exists) {
      return createResponse(res, 404, null, 'Post not found');
    }

    const postData = postDoc.data();

    // Get user information
    const userDoc = await db.collection('users').doc(postData.user_id).get();
    const userData = userDoc.exists ? userDoc.data() : null;

    // Get comments for this post
    const commentsSnapshot = await db.collection('comments')
      .where('post_id', '==', post_id)
      .orderBy('created_at', 'asc')
      .get();

    const comments = [];
    for (const commentDoc of commentsSnapshot.docs) {
      const commentData = commentDoc.data();
      
      // Get comment author information
      const commentUserDoc = await db.collection('users').doc(commentData.user_id).get();
      const commentUserData = commentUserDoc.exists ? commentUserDoc.data() : null;

      comments.push({
        id: commentDoc.id,
        content: commentData.content,
        author: commentUserData ? commentUserData.screen_name : 'Unknown',
        author_color: commentUserData ? {
          name: commentUserData.color_name,
          value: commentUserData.color_value
        } : { name: 'Gray', value: '#6b7280' },
        created_at: commentData.created_at.toISOString(),
        updated_at: commentData.updated_at.toISOString()
      });
    }

    // Format the post data
    const responseData = {
      id: postDoc.id,
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
      comment_count: comments.length,
      comments: comments
    };

    return createResponse(res, 200, responseData);

  } catch (error) {
    console.error('Get post error:', error);
    return createResponse(res, 500, null, error.message || 'Internal server error');
  }
}

module.exports = { getPost };
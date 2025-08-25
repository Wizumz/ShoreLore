const { 
  db, 
  createResponse, 
  validateRequired, 
  checkRateLimit, 
  moderateContent,
  getClientIP 
} = require('../lib/firebase-utils');

/**
 * Firebase function: create-comment
 * Creates a comment on a post
 */
async function createComment(req, res) {
  try {
    // Rate limiting for comment creation
    const clientIP = getClientIP(req);
    checkRateLimit(clientIP, 5, 60000); // 5 comments per minute

    // Parse request body
    let body;
    try {
      body = req.body;
    } catch (e) {
      return createResponse(res, 400, null, 'Invalid JSON in request body');
    }

    // Validate required fields
    validateRequired(body, ['device_id', 'post_id', 'content']);

    const { device_id, post_id, content } = body;

    // Validate content
    moderateContent(content);

    // Validate post_id
    if (!post_id || typeof post_id !== 'string') {
      return createResponse(res, 400, null, 'post_id must be a valid string');
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

    // Verify post exists
    const postDoc = await db.collection('posts').doc(post_id).get();
    if (!postDoc.exists) {
      return createResponse(res, 404, null, 'Post not found');
    }

    // Create the comment
    const commentData = {
      post_id: post_id,
      user_id: userId,
      content: content.trim(),
      created_at: new Date(),
      updated_at: new Date()
    };

    const commentRef = await db.collection('comments').add(commentData);
    const newComment = await commentRef.get();
    const newCommentData = { id: newComment.id, ...newComment.data() };

    // Format response data
    const responseData = {
      id: newCommentData.id,
      content: newCommentData.content,
      author: userData.screen_name,
      author_color: {
        name: userData.color_name,
        value: userData.color_value
      },
      post_id: newCommentData.post_id,
      created_at: newCommentData.created_at.toISOString(),
      updated_at: newCommentData.updated_at.toISOString()
    };

    return createResponse(res, 201, responseData);

  } catch (error) {
    console.error('Create comment error:', error);
    return createResponse(res, 500, null, error.message || 'Internal server error');
  }
}

module.exports = { createComment };
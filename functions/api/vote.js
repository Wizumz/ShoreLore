const { 
  db, 
  createResponse, 
  validateRequired, 
  checkRateLimit, 
  getClientIP 
} = require('../lib/firebase-utils');

/**
 * Firebase function: vote
 * Handles upvoting and downvoting posts with idempotency
 */
async function vote(req, res) {
  try {
    // Rate limiting for voting
    const clientIP = getClientIP(req);
    checkRateLimit(clientIP, 20, 60000); // 20 votes per minute

    // Parse request body
    let body;
    try {
      body = req.body;
    } catch (e) {
      return createResponse(res, 400, null, 'Invalid JSON in request body');
    }

    // Validate required fields
    validateRequired(body, ['device_id', 'post_id', 'value']);

    const { device_id, post_id, value } = body;

    // Validate vote value
    if (value !== 1 && value !== -1) {
      return createResponse(res, 400, null, 'value must be 1 (upvote) or -1 (downvote)');
    }

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
    const userId = userDoc.id;

    // Verify post exists
    const postDoc = await db.collection('posts').doc(post_id).get();
    if (!postDoc.exists) {
      return createResponse(res, 404, null, 'Post not found');
    }

    const postData = postDoc.data();

    // Check for existing vote
    const existingVoteSnapshot = await db.collection('votes')
      .where('post_id', '==', post_id)
      .where('user_id', '==', userId)
      .limit(1)
      .get();

    let newVoteScore = postData.vote_score || 0;
    let action = '';

    // Use Firestore transaction to ensure consistency
    await db.runTransaction(async (transaction) => {
      if (!existingVoteSnapshot.empty) {
        const existingVoteDoc = existingVoteSnapshot.docs[0];
        const existingVote = existingVoteDoc.data();

        if (existingVote.value === value) {
          // Same vote - remove it (toggle off)
          transaction.delete(existingVoteDoc.ref);
          newVoteScore -= value;
          action = 'removed';
        } else {
          // Different vote - update it
          transaction.update(existingVoteDoc.ref, {
            value: value,
            updated_at: new Date()
          });
          newVoteScore = newVoteScore - existingVote.value + value;
          action = 'changed';
        }
      } else {
        // New vote - create it
        const voteRef = db.collection('votes').doc();
        transaction.set(voteRef, {
          post_id: post_id,
          user_id: userId,
          value: value,
          created_at: new Date(),
          updated_at: new Date()
        });
        newVoteScore += value;
        action = 'added';
      }

      // Update post vote counts
      const newUpvotes = Math.max(0, (postData.upvotes || 0) + (value === 1 && action === 'added' ? 1 : 0) - (existingVoteSnapshot.docs[0]?.data().value === 1 && action !== 'added' ? 1 : 0));
      const newDownvotes = Math.max(0, (postData.downvotes || 0) + (value === -1 && action === 'added' ? 1 : 0) - (existingVoteSnapshot.docs[0]?.data().value === -1 && action !== 'added' ? 1 : 0));

      transaction.update(postDoc.ref, {
        upvotes: newUpvotes,
        downvotes: newDownvotes,
        vote_score: newVoteScore,
        updated_at: new Date()
      });
    });

    const responseData = {
      post_id: post_id,
      user_voted: action !== 'removed',
      user_vote_value: action !== 'removed' ? value : null,
      new_vote_score: newVoteScore,
      action: action
    };

    return createResponse(res, 200, responseData);

  } catch (error) {
    console.error('Vote error:', error);
    return createResponse(res, 500, null, error.message || 'Internal server error');
  }
}

module.exports = { vote };
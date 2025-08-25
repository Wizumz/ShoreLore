const { 
  db, 
  createResponse, 
  validateRequired, 
  checkRateLimit, 
  getClientIP 
} = require('../lib/firebase-utils');

/**
 * Firebase function: report
 * Reports inappropriate content
 */
async function report(req, res) {
  try {
    // Rate limiting for reports
    const clientIP = getClientIP(req);
    checkRateLimit(clientIP, 5, 60000); // 5 reports per minute

    // Parse request body
    let body;
    try {
      body = req.body;
    } catch (e) {
      return createResponse(res, 400, null, 'Invalid JSON in request body');
    }

    // Validate required fields
    validateRequired(body, ['device_id', 'target_type', 'target_id', 'reason']);

    const { device_id, target_type, target_id, reason } = body;

    // Validate target_type
    if (!['post', 'comment'].includes(target_type)) {
      return createResponse(res, 400, null, 'target_type must be "post" or "comment"');
    }

    // Validate reason
    const validReasons = [
      'spam', 'harassment', 'inappropriate', 'misinformation', 
      'violence', 'hate_speech', 'other'
    ];
    if (!validReasons.includes(reason)) {
      return createResponse(res, 400, null, `reason must be one of: ${validReasons.join(', ')}`);
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

    // Verify target exists
    let targetExists = false;
    if (target_type === 'post') {
      const postDoc = await db.collection('posts').doc(target_id).get();
      targetExists = postDoc.exists;
    } else if (target_type === 'comment') {
      const commentDoc = await db.collection('comments').doc(target_id).get();
      targetExists = commentDoc.exists;
    }

    if (!targetExists) {
      return createResponse(res, 404, null, `${target_type} not found`);
    }

    // Check if user has already reported this content
    const existingReportSnapshot = await db.collection('reports')
      .where('user_id', '==', userId)
      .where('target_type', '==', target_type)
      .where('target_id', '==', target_id)
      .limit(1)
      .get();

    if (!existingReportSnapshot.empty) {
      return createResponse(res, 409, null, 'You have already reported this content');
    }

    // Create the report
    const reportData = {
      user_id: userId,
      target_type: target_type,
      target_id: target_id,
      reason: reason,
      status: 'pending', // pending, reviewed, dismissed
      created_at: new Date(),
      updated_at: new Date()
    };

    const reportRef = await db.collection('reports').add(reportData);
    const newReport = await reportRef.get();
    const newReportData = { id: newReport.id, ...newReport.data() };

    // Format response data
    const responseData = {
      id: newReportData.id,
      target_type: newReportData.target_type,
      target_id: newReportData.target_id,
      reason: newReportData.reason,
      status: newReportData.status,
      created_at: newReportData.created_at.toISOString()
    };

    return createResponse(res, 201, responseData);

  } catch (error) {
    console.error('Report error:', error);
    return createResponse(res, 500, null, error.message || 'Internal server error');
  }
}

module.exports = { report };
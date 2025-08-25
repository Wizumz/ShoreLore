const { 
  db, 
  createResponse, 
  validateRequired, 
  checkRateLimit, 
  getClientIP 
} = require('../lib/firebase-utils');

/**
 * Firebase function: upsert-user
 * Creates or updates user based on device_id
 */
async function upsertUser(req, res) {
  try {
    // Rate limiting based on IP
    const clientIP = getClientIP(req);
    checkRateLimit(clientIP, 10, 60000); // 10 requests per minute

    // Parse request body
    let body;
    try {
      body = req.body;
    } catch (e) {
      return createResponse(res, 400, null, 'Invalid JSON in request body');
    }

    // Validate required fields
    validateRequired(body, ['device_id']);

    const { device_id, screen_name, color_name, color_value } = body;

    // Validate device_id format (should be a reasonable length UUID or similar)
    if (!device_id || device_id.length < 10 || device_id.length > 50) {
      return createResponse(res, 400, null, 'device_id must be between 10 and 50 characters');
    }

    // Validate screen_name if provided
    if (screen_name && (screen_name.length < 3 || screen_name.length > 20)) {
      return createResponse(res, 400, null, 'screen_name must be between 3 and 20 characters');
    }

    // Check if user already exists
    const usersSnapshot = await db.collection('users')
      .where('device_id', '==', device_id)
      .limit(1)
      .get();

    let userData;
    
    if (!usersSnapshot.empty) {
      // Update existing user if screen_name or color provided
      const userDoc = usersSnapshot.docs[0];
      const existingData = userDoc.data();
      
      if (screen_name || color_name || color_value) {
        const updateData = { updated_at: new Date() };
        if (screen_name) updateData.screen_name = screen_name.toUpperCase();
        if (color_name) updateData.color_name = color_name;
        if (color_value) updateData.color_value = color_value;

        await userDoc.ref.update(updateData);
        
        // Get updated data
        const updatedDoc = await userDoc.ref.get();
        userData = { id: updatedDoc.id, ...updatedDoc.data() };
      } else {
        userData = { id: userDoc.id, ...existingData };
      }
    } else {
      // Create new user
      const newUserData = {
        device_id,
        screen_name: screen_name ? screen_name.toUpperCase() : generateScreenName(),
        color_name: color_name || 'Navy',
        color_value: color_value || '#1e3a8a',
        created_at: new Date(),
        updated_at: new Date()
      };

      const newUserRef = await db.collection('users').add(newUserData);
      const newUserDoc = await newUserRef.get();
      userData = { id: newUserDoc.id, ...newUserDoc.data() };
    }

    // Return user data (excluding sensitive fields if any)
    const responseData = {
      id: userData.id,
      screen_name: userData.screen_name,
      device_id: userData.device_id,
      color_name: userData.color_name,
      color_value: userData.color_value,
      created_at: userData.created_at.toISOString(),
      updated_at: userData.updated_at.toISOString()
    };

    return createResponse(res, 200, responseData);

  } catch (error) {
    console.error('Upsert user error:', error);
    return createResponse(res, 500, null, error.message || 'Internal server error');
  }
}

/**
 * Generate a random screen name for new users
 */
function generateScreenName() {
  const adjectives = ['REEL', 'BIG', 'DEEP', 'LUCKY', 'MASTER', 'PRO', 'BASS', 'CATCH', 'FISHER', 'ANGLER'];
  const nouns = ['FISHER', 'CASTER', 'HUNTER', 'MASTER', 'CAPTAIN', 'ADMIRAL', 'SAILOR', 'KEEPER', 'LEGEND', 'HERO'];
  const numbers = Math.floor(Math.random() * 999) + 1;
  
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `${adj}${noun}${numbers}`;
}

module.exports = { upsertUser };
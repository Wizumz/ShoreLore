const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp();
}

// Import individual function handlers
const { createPost } = require('./api/create-post');
const { getPost } = require('./api/get-post');
const { getPosts } = require('./api/get-posts');
const { createComment } = require('./api/create-comment');
const { vote } = require('./api/vote');
const { report } = require('./api/report');
const { upsertUser } = require('./api/upsert-user');

// Export all API functions under a single function
exports.api = functions.https.onRequest(async (req, res) => {
  // Handle CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Route requests based on path
  const path = req.path;
  
  try {
    if (path === '/create-post' && req.method === 'POST') {
      await createPost(req, res);
    } else if (path === '/get-post' && req.method === 'GET') {
      await getPost(req, res);
    } else if (path === '/get-posts' && req.method === 'GET') {
      await getPosts(req, res);
    } else if (path === '/create-comment' && req.method === 'POST') {
      await createComment(req, res);
    } else if (path === '/vote' && req.method === 'POST') {
      await vote(req, res);
    } else if (path === '/report' && req.method === 'POST') {
      await report(req, res);
    } else if (path === '/upsert-user' && req.method === 'POST') {
      await upsertUser(req, res);
    } else {
      res.status(404).json({ error: 'Not found', success: false });
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ 
      error: error.message || 'Internal server error', 
      success: false 
    });
  }
});
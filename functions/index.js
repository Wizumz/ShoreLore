const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

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

// Create Express app for Cloud Run compatibility
const app = express();

// Middleware
app.use(express.json());

// Handle CORS
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});

// Route handlers
app.post('/create-post', async (req, res) => {
  try {
    await createPost(req, res);
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
});

app.get('/get-post', async (req, res) => {
  try {
    await getPost(req, res);
  } catch (error) {
    console.error('Get post error:', error);
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
});

app.get('/get-posts', async (req, res) => {
  try {
    await getPosts(req, res);
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
});

app.post('/create-comment', async (req, res) => {
  try {
    await createComment(req, res);
  } catch (error) {
    console.error('Create comment error:', error);
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
});

app.post('/vote', async (req, res) => {
  try {
    await vote(req, res);
  } catch (error) {
    console.error('Vote error:', error);
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
});

app.post('/report', async (req, res) => {
  try {
    await report(req, res);
  } catch (error) {
    console.error('Report error:', error);
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
});

app.post('/upsert-user', async (req, res) => {
  try {
    await upsertUser(req, res);
  } catch (error) {
    console.error('Upsert user error:', error);
    res.status(500).json({ error: error.message || 'Internal server error', success: false });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Catch-all handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not found', success: false });
});

// Export as Cloud Function (this will work for both 1st and 2nd gen)
exports.api = functions.https.onRequest(app);

// For local development with Cloud Run
if (process.env.NODE_ENV !== 'production' && require.main === module) {
  const port = process.env.PORT || 8080;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
}
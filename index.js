const admin = require('firebase-admin');
const express = require('express');

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  admin.initializeApp();
}

// Import individual function handlers
const { createPost } = require('./functions/api/create-post');
const { getPost } = require('./functions/api/get-post');
const { getPosts } = require('./functions/api/get-posts');
const { createComment } = require('./functions/api/create-comment');
const { vote } = require('./functions/api/vote');
const { report } = require('./functions/api/report');
const { upsertUser } = require('./functions/api/upsert-user');

// Create Express app for Cloud Run
const app = express();

// Middleware
app.use(express.json({ limit: '10mb' }));

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
  res.json({ 
    status: 'ok', 
    message: 'ShoreLore API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Additional health check for Cloud Run
app.get('/health', (req, res) => {
  res.status(200).json({ healthy: true });
});

// Catch-all handler for unmatched routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found', 
    success: false,
    path: req.originalUrl,
    method: req.method
  });
});

// Start the server
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`🚀 ShoreLore API server running on ${host}:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Health check: http://${host}:${port}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});
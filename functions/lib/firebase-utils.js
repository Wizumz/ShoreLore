const admin = require('firebase-admin');

// Get Firestore instance
const db = admin.firestore();

/**
 * Create a standardized API response
 */
function createResponse(res, statusCode, data = null, error = null) {
  const body = error 
    ? { error: error.message || error, success: false }
    : { data, success: true };

  res.status(statusCode).json(body);
}

/**
 * Validate required fields in request body
 */
function validateRequired(body, requiredFields) {
  const missing = requiredFields.filter(field => !body[field]);
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
}

/**
 * Rate limiting helper (simple IP-based)
 * In production, consider using Redis or more sophisticated rate limiting
 */
const rateLimitMap = new Map();

function checkRateLimit(ip, maxRequests = 30, windowMs = 60000) {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Clean old entries
  for (const [key, requests] of rateLimitMap.entries()) {
    rateLimitMap.set(key, requests.filter(time => time > windowStart));
    if (rateLimitMap.get(key).length === 0) {
      rateLimitMap.delete(key);
    }
  }
  
  // Check current IP
  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(time => time > windowStart);
  
  if (recentRequests.length >= maxRequests) {
    throw new Error(`Rate limit exceeded. Max ${maxRequests} requests per minute.`);
  }
  
  // Add current request
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
}

/**
 * Content moderation helper
 */
const BLOCKED_WORDS = [
  'spam', 'scam', 'fake', 'bot', 'hack', 'cheat', 'exploit',
  'idiot', 'stupid', 'hate', 'kill', 'die', 'suicide',
  'buy now', 'click here', 'make money', 'get rich', 'free money'
];

const SUSPICIOUS_PATTERNS = [
  /(.)\1{4,}/g, // Repeated characters
  /[A-Z]{10,}/g, // Excessive caps
  /https?:\/\/[^\s]+/g, // URLs
  /\d{10,}/g, // Long numbers
  /[!@#$%^&*]{3,}/g // Excessive special characters
];

function moderateContent(content) {
  if (!content || typeof content !== 'string') {
    throw new Error('Content is required and must be a string');
  }

  const lowerContent = content.toLowerCase();
  const issues = [];

  // Check for blocked words
  const foundBlockedWords = BLOCKED_WORDS.filter(word => lowerContent.includes(word));
  if (foundBlockedWords.length > 0) {
    issues.push(`Contains inappropriate words: ${foundBlockedWords.join(', ')}`);
  }

  // Check for suspicious patterns
  SUSPICIOUS_PATTERNS.forEach(pattern => {
    if (pattern.test(content)) {
      issues.push('Contains suspicious patterns');
    }
  });

  // Check length
  if (content.length < 3) {
    issues.push('Content too short');
  }

  if (content.length > 200) {
    issues.push('Content too long (max 200 characters)');
  }

  // Check for excessive repetition
  const words = content.split(/\s+/);
  const wordCounts = {};
  words.forEach(word => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    if (cleanWord.length > 2) {
      wordCounts[cleanWord] = (wordCounts[cleanWord] || 0) + 1;
    }
  });

  const maxRepeats = Math.max(...Object.values(wordCounts));
  if (maxRepeats > 3) {
    issues.push('Excessive word repetition detected');
  }

  if (issues.length > 0) {
    throw new Error(`Content moderation failed: ${issues.join(', ')}`);
  }

  return true;
}

/**
 * Get client IP address from request
 */
function getClientIP(req) {
  return req.headers['x-forwarded-for'] || 
         req.headers['x-real-ip'] || 
         req.connection.remoteAddress || 
         'unknown';
}

/**
 * Calculate distance between two points using Haversine formula
 */
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

/**
 * Get nearest city name from coordinates using a simple lookup
 */
function getNearestCityFromCoords(lat, lng) {
  // Simple lookup for Northeast US fishing locations
  const locations = [
    { name: 'Montauk Point, NY', lat: 41.0362, lng: -71.8562 },
    { name: 'Cape Cod, MA', lat: 41.6688, lng: -70.2962 },
    { name: 'Block Island, RI', lat: 41.1775, lng: -71.5773 },
    { name: 'Chesapeake Bay, MD', lat: 38.9784, lng: -76.4951 },
    { name: 'Sandy Hook, NJ', lat: 40.4168, lng: -74.0018 },
    { name: 'Boston, MA', lat: 42.3601, lng: -71.0589 },
    { name: 'New York, NY', lat: 40.7128, lng: -74.0060 }
  ];

  let closest = null;
  let minDistance = Infinity;

  locations.forEach(location => {
    const distance = calculateDistance(lat, lng, location.lat, location.lng);
    if (distance < minDistance) {
      minDistance = distance;
      closest = location;
    }
  });

  return closest ? closest.name : 'Unknown Location';
}

module.exports = {
  db,
  createResponse,
  validateRequired,
  checkRateLimit,
  moderateContent,
  getClientIP,
  calculateDistance,
  getNearestCityFromCoords
};
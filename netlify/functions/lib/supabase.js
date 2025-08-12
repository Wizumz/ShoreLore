// Shared Supabase client for Netlify functions
// Uses service role key for full database access

import { createClient } from '@supabase/supabase-js';

// Global client instance to reuse across function invocations
let supabaseClient = null;

/**
 * Get or create Supabase client with service role key
 * Reuses client instance to avoid connection overhead
 */
export function getSupabaseClient() {
    if (!supabaseClient) {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

        if (!supabaseUrl || !supabaseServiceKey) {
            throw new Error('Missing required Supabase environment variables');
        }

        supabaseClient = createClient(supabaseUrl, supabaseServiceKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        });
    }

    return supabaseClient;
}

/**
 * Standard CORS headers for API responses
 */
export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Content-Type': 'application/json'
};

/**
 * Handle preflight OPTIONS requests
 */
export function handleCors(event) {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: ''
        };
    }
    return null;
}

/**
 * Create a standardized API response
 */
export function createResponse(statusCode, data = null, error = null) {
    const body = error 
        ? { error: error.message || error, success: false }
        : { data, success: true };

    return {
        statusCode,
        headers: corsHeaders,
        body: JSON.stringify(body)
    };
}

/**
 * Validate required fields in request body
 */
export function validateRequired(body, requiredFields) {
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

export function checkRateLimit(ip, maxRequests = 30, windowMs = 60000) {
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

export function moderateContent(content) {
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
#!/bin/bash

# Firebase Deployment Script for RipRap PWA
# This script automates the build and deployment process to Firebase Hosting

set -e

echo "🚀 Starting Firebase deployment for RipRap PWA..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Check Firebase CLI version
echo "📋 Firebase CLI version: $(firebase --version)"

# Load environment variables from .env.local if it exists
if [ -f ".env.local" ]; then
    echo "📄 Loading environment variables from .env.local"
    export $(cat .env.local | xargs)
fi

# Build the application
echo "🔨 Building the application..."
npm run build

# Verify build output
echo "🔍 Verifying build output..."
if [ ! -f "dist/index.html" ]; then
    echo "❌ Build failed: dist/index.html not found"
    exit 1
fi

if [ ! -f "dist/manifest.json" ]; then
    echo "❌ Build failed: dist/manifest.json not found"
    exit 1
fi

if [ ! -f "dist/sw.js" ]; then
    echo "❌ Build failed: dist/sw.js not found"
    exit 1
fi

echo "✅ Build output verified successfully"

# Check Firebase configuration
echo "🔧 Checking Firebase configuration..."
if [ ! -f "firebase.json" ]; then
    echo "❌ firebase.json not found"
    exit 1
fi

# Try to determine if we're logged in
if firebase projects:list &> /dev/null; then
    echo "✅ Firebase CLI authenticated"
else
    echo "🔑 Firebase authentication required. Please run 'firebase login' first."
    echo "   For CI/CD environments, make sure FIREBASE_TOKEN is set."
    if [ -z "$FIREBASE_TOKEN" ]; then
        echo "   You can also use: firebase login:ci to get a token"
        exit 1
    fi
fi

# Get current project
PROJECT_ID=$(firebase use 2>/dev/null | grep "Now using project" | awk '{print $4}' || echo "")
if [ -z "$PROJECT_ID" ]; then
    echo "🎯 Setting Firebase project to riprap-c725e"
    firebase use riprap-c725e
else
    echo "🎯 Using Firebase project: $PROJECT_ID"
fi

# Deploy to Firebase Hosting
echo "🚀 Deploying to Firebase Hosting..."
firebase deploy --only hosting

echo "✅ Deployment completed successfully!"
echo "🌐 Your app should be available at: https://riprap-c725e.web.app"
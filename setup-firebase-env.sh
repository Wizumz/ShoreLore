#!/bin/bash

# Firebase Environment Setup Script for RipRap PWA
# This script helps set up Firebase environment variables and configuration

set -e

echo "🔧 Firebase Environment Setup for RipRap PWA"
echo "============================================="

# Function to prompt for input with default value
prompt_with_default() {
    local prompt="$1"
    local default="$2"
    local var_name="$3"
    
    read -p "$prompt [$default]: " input
    if [ -z "$input" ]; then
        input="$default"
    fi
    
    eval "$var_name='$input'"
}

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local already exists with Firebase configuration"
    echo "Current configuration:"
    grep "VITE_FIREBASE_" .env.local | sed 's/=.*/=***/'
    echo ""
    read -p "Do you want to update the configuration? (y/N): " update_config
    if [[ ! "$update_config" =~ ^[Yy]$ ]]; then
        echo "Using existing configuration."
        exit 0
    fi
fi

echo "📋 Firebase Project Configuration"
echo "Please provide your Firebase project details:"
echo ""

# Get Firebase project details
prompt_with_default "Firebase Project ID" "riprap-c725e" "PROJECT_ID"
prompt_with_default "Firebase API Key" "AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY" "API_KEY"
prompt_with_default "Firebase Auth Domain" "$PROJECT_ID.firebaseapp.com" "AUTH_DOMAIN"
prompt_with_default "Firebase Storage Bucket" "$PROJECT_ID.firebasestorage.app" "STORAGE_BUCKET"
prompt_with_default "Firebase Messaging Sender ID" "995615030562" "MESSAGING_SENDER_ID"
prompt_with_default "Firebase App ID" "1:995615030562:web:5194ca1ed7659de1cd797b" "APP_ID"
prompt_with_default "Firebase Measurement ID (optional)" "G-6MDLTVXSTF" "MEASUREMENT_ID"

# Create .env.local file
echo "📝 Creating .env.local file..."
cat > .env.local << EOF
# Firebase Configuration for RipRap Fishing App
# Generated: $(date)

VITE_FIREBASE_API_KEY=$API_KEY
VITE_FIREBASE_AUTH_DOMAIN=$AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=$PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=$STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=$MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=$APP_ID
VITE_FIREBASE_MEASUREMENT_ID=$MEASUREMENT_ID

# Development settings
VITE_FIREBASE_USE_EMULATOR=false

# Optional: API base URL (fallback for existing Netlify functions)
VITE_API_BASE_URL=/.netlify/functions/api
EOF

echo "✅ .env.local created successfully!"

# Copy to production env if needed
if [ ! -f ".env.production" ]; then
    echo "📝 Creating .env.production file..."
    cat > .env.production << EOF
# Firebase Configuration for Production Deployment
# These values will be used when repository secrets are not available
# This file is for reference only - actual secrets should be set in GitHub repository settings

VITE_FIREBASE_API_KEY=$API_KEY
VITE_FIREBASE_AUTH_DOMAIN=$AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=$PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=$STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=$MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=$APP_ID
VITE_FIREBASE_MEASUREMENT_ID=$MEASUREMENT_ID
VITE_FIREBASE_USE_EMULATOR=false
EOF
    echo "✅ .env.production created successfully!"
fi

# Test Firebase configuration
echo ""
echo "🧪 Testing Firebase configuration..."
if command -v firebase &> /dev/null; then
    echo "✅ Firebase CLI is installed"
    
    # Try to set Firebase project
    if firebase use "$PROJECT_ID" 2>/dev/null; then
        echo "✅ Firebase project '$PROJECT_ID' set successfully"
    else
        echo "⚠️  Firebase authentication required. Run 'firebase login' to continue."
    fi
else
    echo "⚠️  Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Run 'firebase login' to authenticate with Firebase"
echo "2. Run 'npm run build' to build the application"
echo "3. Run './deploy-firebase.sh' to deploy to Firebase Hosting"
echo "4. Or run 'firebase deploy --only hosting' manually"
echo ""
echo "📁 Files created/updated:"
echo "   - .env.local (local development environment)"
echo "   - .env.production (production environment reference)"
echo ""
echo "🔒 Security Note:"
echo "   - Keep your Firebase API keys secure"
echo "   - Add .env.local to .gitignore (already done)"
echo "   - Use GitHub repository secrets for production deployment"

echo ""
echo "✅ Firebase environment setup complete!"
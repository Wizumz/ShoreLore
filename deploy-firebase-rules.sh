#!/bin/bash

# Firebase Security Rules Deployment Script
# Based on Grok AI recommendations for testing and deploying rules

echo "🔥 Firebase Security Rules Deployment"
echo "======================================"

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
    echo "✅ Firebase CLI installed"
fi

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please log in to Firebase:"
    firebase login
fi

# Show current project
echo "📋 Current Firebase project:"
firebase use

echo ""
echo "🧪 Testing Firebase rules locally first..."
echo "(Note: Local testing requires Firebase emulator suite)"

# Optional: Start emulator for testing (commented out as it requires setup)
# echo "Starting Firebase emulator for testing..."
# firebase emulators:start --only firestore &
# EMULATOR_PID=$!
# sleep 5

# Test rules syntax
echo "🔍 Validating rules syntax..."
if firebase firestore:rules:validate firestore.rules; then
    echo "✅ Rules syntax is valid"
else
    echo "❌ Rules syntax validation failed"
    exit 1
fi

# Deploy rules
echo ""
echo "🚀 Deploying Firestore security rules..."
if firebase deploy --only firestore:rules; then
    echo "✅ Firebase rules deployed successfully!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Test the rules using your web app"
    echo "2. Run security tests: import('./firebase-rules-test.js').then(m => new m.default().runAllTests())"
    echo "3. Monitor Firebase console for any rule violations"
    echo ""
    echo "🔗 View rules in Firebase Console:"
    echo "https://console.firebase.google.com/project/riprap-c725e/firestore/rules"
else
    echo "❌ Failed to deploy Firebase rules"
    exit 1
fi

# Clean up emulator if it was started
# if [ ! -z "$EMULATOR_PID" ]; then
#     kill $EMULATOR_PID
# fi

echo "🎉 Deployment complete!"
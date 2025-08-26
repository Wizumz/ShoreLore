#!/bin/bash

# Firebase Deployment Verification Script for RipRap PWA
# This script verifies that everything is ready for Firebase deployment

set -e

echo "🔍 Firebase Deployment Verification for RipRap PWA"
echo "================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions for colored output
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

info() {
    echo -e "ℹ️  $1"
}

# Check 1: Node.js and npm
echo ""
info "Checking Node.js and npm..."
if command -v node &> /dev/null && command -v npm &> /dev/null; then
    NODE_VERSION=$(node --version)
    NPM_VERSION=$(npm --version)
    success "Node.js $NODE_VERSION and npm $NPM_VERSION are installed"
else
    error "Node.js and/or npm not found"
    exit 1
fi

# Check 2: Dependencies
echo ""
info "Checking project dependencies..."
if [ -f "package.json" ] && [ -d "node_modules" ]; then
    success "Dependencies are installed"
else
    error "Dependencies missing. Run 'npm install'"
    exit 1
fi

# Check 3: Firebase CLI
echo ""
info "Checking Firebase CLI..."
if command -v firebase &> /dev/null; then
    FIREBASE_VERSION=$(firebase --version)
    success "Firebase CLI $FIREBASE_VERSION is installed"
else
    error "Firebase CLI not found. Run 'npm install -g firebase-tools'"
    exit 1
fi

# Check 4: Environment variables
echo ""
info "Checking environment variables..."
if [ -f ".env.local" ]; then
    success ".env.local file exists"
    
    # Check for required variables
    required_vars=("VITE_FIREBASE_API_KEY" "VITE_FIREBASE_AUTH_DOMAIN" "VITE_FIREBASE_PROJECT_ID")
    for var in "${required_vars[@]}"; do
        if grep -q "^$var=" .env.local; then
            success "$var is set"
        else
            error "$var is missing from .env.local"
        fi
    done
else
    warning ".env.local file not found. Run './setup-firebase-env.sh' to create it"
fi

# Check 5: Firebase configuration
echo ""
info "Checking Firebase configuration..."
if [ -f "firebase.json" ]; then
    success "firebase.json exists"
    
    # Check hosting configuration
    if grep -q '"public": "dist"' firebase.json; then
        success "Hosting public directory set to 'dist'"
    else
        error "Hosting public directory not set to 'dist'"
    fi
    
    if grep -q '"destination": "/index.html"' firebase.json; then
        success "SPA routing configured"
    else
        error "SPA routing not configured"
    fi
else
    error "firebase.json not found"
    exit 1
fi

# Check 6: Build output
echo ""
info "Checking build output..."
if [ -d "dist" ]; then
    success "dist directory exists"
    
    # Check required files
    required_files=("index.html" "manifest.json" "sw.js")
    for file in "${required_files[@]}"; do
        if [ -f "dist/$file" ]; then
            success "dist/$file exists"
        else
            error "dist/$file is missing"
        fi
    done
    
    # Check assets directory
    if [ -d "dist/assets" ]; then
        success "dist/assets directory exists"
        JS_FILES=$(find dist/assets -name "*.js" | wc -l)
        CSS_FILES=$(find dist/assets -name "*.css" | wc -l)
        info "Found $JS_FILES JavaScript files and $CSS_FILES CSS files"
    else
        warning "dist/assets directory not found"
    fi
    
    # Check icons directory
    if [ -d "dist/icons" ]; then
        success "dist/icons directory exists"
        ICON_COUNT=$(find dist/icons -name "*.png" | wc -l)
        info "Found $ICON_COUNT icon files"
    else
        error "dist/icons directory not found"
    fi
else
    error "dist directory not found. Run 'npm run build'"
    exit 1
fi

# Check 7: Service Worker
echo ""
info "Checking Service Worker..."
if [ -f "dist/sw.js" ]; then
    success "Service worker exists"
    
    # Check for correct cache paths
    if grep -q '"/icons/' dist/sw.js; then
        success "Service worker uses correct icon paths"
    else
        warning "Service worker may have incorrect icon paths"
    fi
    
    if grep -q '"/manifest.json"' dist/sw.js; then
        success "Service worker references manifest correctly"
    else
        warning "Service worker may not reference manifest correctly"
    fi
else
    error "Service worker not found"
fi

# Check 8: PWA Manifest
echo ""
info "Checking PWA Manifest..."
if [ -f "dist/manifest.json" ]; then
    success "PWA manifest exists"
    
    # Check manifest content
    if grep -q '"name"' dist/manifest.json && grep -q '"icons"' dist/manifest.json; then
        success "Manifest has required fields"
    else
        error "Manifest is missing required fields"
    fi
else
    error "PWA manifest not found"
fi

# Check 9: Firebase Authentication
echo ""
info "Checking Firebase authentication..."
if firebase projects:list &> /dev/null; then
    success "Firebase CLI is authenticated"
    
    # Get current project
    if firebase use 2>/dev/null | grep -q "riprap-c725e"; then
        success "Firebase project 'riprap-c725e' is selected"
    else
        warning "Firebase project 'riprap-c725e' not selected. Run 'firebase use riprap-c725e'"
    fi
else
    warning "Firebase CLI not authenticated. Run 'firebase login'"
fi

# Check 10: Deployment scripts
echo ""
info "Checking deployment scripts..."
if [ -f "deploy-firebase.sh" ] && [ -x "deploy-firebase.sh" ]; then
    success "Firebase deployment script exists and is executable"
else
    warning "Firebase deployment script not found or not executable"
fi

if [ -f "setup-firebase-env.sh" ] && [ -x "setup-firebase-env.sh" ]; then
    success "Firebase environment setup script exists and is executable"
else
    warning "Firebase environment setup script not found or not executable"
fi

# Check 11: GitHub Actions workflow
echo ""
info "Checking GitHub Actions workflows..."
if [ -f ".github/workflows/firebase-deploy.yml" ]; then
    success "Firebase deployment workflow exists"
else
    warning "Firebase deployment workflow not found"
fi

# Summary
echo ""
echo "🎯 Verification Summary"
echo "======================"

# Count errors and warnings
ERROR_COUNT=$(grep -c "❌" <<< "$(verify-firebase-setup.sh 2>&1)" || echo "0")
WARNING_COUNT=$(grep -c "⚠️" <<< "$(verify-firebase-setup.sh 2>&1)" || echo "0")

if [ -d "dist" ] && [ -f "firebase.json" ] && [ -f ".env.local" ]; then
    success "Core requirements met - ready for deployment!"
    echo ""
    echo "🚀 Next steps:"
    echo "   1. Authenticate Firebase CLI: firebase login"
    echo "   2. Set Firebase project: firebase use riprap-c725e"
    echo "   3. Deploy: ./deploy-firebase.sh"
    echo ""
    echo "🌐 Expected URL: https://riprap-c725e.web.app"
else
    error "Some core requirements are missing. Please fix the issues above."
    exit 1
fi

echo ""
info "For detailed deployment instructions, see: FIREBASE_DEPLOYMENT_GUIDE.md"
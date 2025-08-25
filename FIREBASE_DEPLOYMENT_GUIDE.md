# Firebase Deployment Guide for RipRap PWA

## Overview
This guide covers migrating the RipRap PWA from Netlify to Firebase Hosting while maintaining all PWA features and Firestore integration.

## 🚀 Quick Start (Automated Deployment)

### Option 1: Using the deployment script
```bash
./deploy-firebase.sh
```

### Option 2: Manual deployment
```bash
npm run build
firebase deploy --only hosting
```

## 📋 Prerequisites

1. **Firebase CLI installed** ✅
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase Authentication** ⚠️
   ```bash
   # For local development
   firebase login
   
   # For CI/CD (get token)
   firebase login:ci
   ```

3. **Environment Variables** ✅
   - Environment variables are configured in `.env.local` and `.env.production`
   - Variables are already set up for the Firebase project `riprap-c725e`

## 🔧 Configuration Status

### ✅ Completed Items:
- [x] `firebase.json` exists with proper hosting configuration
- [x] Firebase project configured (`riprap-c725e`)
- [x] Environment variables set up for Firebase config
- [x] Vite build configured to output to `dist` directory
- [x] PWA assets (manifest.json, service worker) included in build
- [x] Service worker updated for Firebase hosting paths
- [x] GitHub Actions workflow created for Firebase deployment
- [x] Automated deployment script created

### ⚠️ Requires Authentication:
- Firebase CLI authentication (run `firebase login`)
- Deployment to Firebase Hosting

## 📁 Project Structure After Migration

```
├── dist/                    # Build output (Firebase hosting public dir)
│   ├── index.html          # Main app entry point
│   ├── manifest.json       # PWA manifest
│   ├── sw.js              # Service worker
│   ├── assets/            # Vite-built JS/CSS bundles
│   └── icons/             # PWA icons
├── firebase.json          # Firebase configuration
├── .env.local            # Local environment variables
├── .env.production       # Production environment variables
├── deploy-firebase.sh    # Automated deployment script
└── .github/workflows/
    ├── deploy.yml        # Original GitHub Pages workflow
    └── firebase-deploy.yml # New Firebase deployment workflow
```

## 🛠️ Firebase Configuration Details

### firebase.json Configuration:
- **Public directory**: `dist` (Vite build output)
- **SPA routing**: All routes redirect to `/index.html`
- **Cache headers**: Optimized for PWA assets
- **Security headers**: Enhanced security configuration

### Key Features:
1. **Service Worker caching**: No-cache policy for immediate updates
2. **Asset caching**: Long-term caching for built assets
3. **PWA icons**: Proper caching for installability
4. **Security headers**: CSP, XSS protection, frame options

## 🔒 Environment Variables

The app uses environment variables for Firebase configuration:

```env
VITE_FIREBASE_API_KEY=AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY
VITE_FIREBASE_AUTH_DOMAIN=riprap-c725e.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=riprap-c725e
VITE_FIREBASE_STORAGE_BUCKET=riprap-c725e.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=995615030562
VITE_FIREBASE_APP_ID=1:995615030562:web:5194ca1ed7659de1cd797b
VITE_FIREBASE_MEASUREMENT_ID=G-6MDLTVXSTF
```

## 🚀 Deployment Options

### 1. Manual Deployment
```bash
# Build the app
npm run build

# Deploy to Firebase
firebase deploy --only hosting
```

### 2. Automated Script
```bash
# Make script executable (if not already)
chmod +x deploy-firebase.sh

# Run deployment
./deploy-firebase.sh
```

### 3. GitHub Actions (Recommended for CI/CD)
The GitHub Actions workflow (`.github/workflows/firebase-deploy.yml`) will automatically:
1. Build the app with environment variables
2. Deploy to Firebase Hosting
3. Deploy on every push to `main` branch

**Required GitHub Secrets:**
- `FIREBASE_SERVICE_ACCOUNT_RIPRAP_C725E`
- Firebase environment variables (if different from fallback)

## 🔍 Troubleshooting

### Common Issues and Solutions:

1. **Authentication Error**
   ```bash
   Error: Failed to authenticate, have you run firebase login?
   ```
   **Solution**: Run `firebase login` or set `FIREBASE_TOKEN` environment variable

2. **Missing Build Files**
   ```bash
   Error: dist/index.html not found
   ```
   **Solution**: Run `npm run build` before deployment

3. **Service Worker 404 Errors**
   - Service worker has been updated to use correct Firebase hosting paths
   - Icons now reference `/icons/` instead of `/public/icons/`

4. **Environment Variables Not Loading**
   - Ensure `.env.local` exists for development
   - For production, use GitHub repository secrets

### Debug Commands:
```bash
# Check Firebase project status
firebase projects:list

# Check current project
firebase use

# Deploy with debug info
firebase deploy --only hosting --debug
```

## 🌐 Expected URLs After Deployment

- **Production**: https://riprap-c725e.web.app
- **Firebase Console**: https://console.firebase.google.com/project/riprap-c725e

## 📊 Performance Optimizations

The migration includes several performance improvements:

1. **Asset bundling**: Vite optimizes JavaScript and CSS
2. **Code splitting**: Vendor libraries separated for better caching
3. **Service Worker**: Offline functionality with smart caching
4. **CDN hosting**: Firebase's global CDN for fast delivery
5. **Cache headers**: Optimized caching for static assets

## 🔄 Migration from Netlify

Key differences from Netlify hosting:

1. **Build command**: Still `npm run build`
2. **Public directory**: Changed from `public` to `dist`
3. **Environment variables**: Prefixed with `VITE_` (no change needed)
4. **Functions**: Firebase Functions instead of Netlify Functions (if needed)
5. **Domain**: Firebase provides `.web.app` domain

## ✅ Verification Checklist

After deployment, verify:

- [ ] App loads at Firebase URL
- [ ] PWA manifest accessible
- [ ] Service worker registers correctly
- [ ] Icons display properly
- [ ] Offline functionality works
- [ ] Firestore data loads correctly
- [ ] App is installable as PWA

## 📞 Support

If you encounter issues:

1. Check Firebase Console logs
2. Review browser developer tools
3. Verify environment variables
4. Check Firebase project permissions
5. Ensure build output is complete

## 🎯 Next Steps

1. **Authenticate Firebase CLI**: `firebase login`
2. **Run deployment script**: `./deploy-firebase.sh`
3. **Set up GitHub Actions**: Add required secrets to repository
4. **Test deployment**: Verify all features work on Firebase hosting
5. **Update DNS**: Point custom domain to Firebase (if needed)
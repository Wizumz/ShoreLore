# Firebase Deployment Troubleshooting Guide

## Common Issues and Solutions

### 🔐 Authentication Issues

#### Error: "Failed to authenticate, have you run firebase login?"
**Solution:**
```bash
firebase login
```
If you're in a CI/CD environment:
```bash
# Get a CI token
firebase login:ci
# Set as environment variable
export FIREBASE_TOKEN="your-token"
```

#### Error: "Project not found"
**Solution:**
```bash
firebase use riprap-c725e
firebase projects:list  # Verify project exists
```

### 🏗️ Build Issues

#### Error: "dist/index.html not found"
**Solution:**
```bash
npm run build  # Rebuild the application
ls -la dist/   # Verify files exist
```

#### Error: "Build failed" or "Module not found"
**Solution:**
```bash
npm install    # Reinstall dependencies
npm run build  # Try building again
```

### 🌐 Deployment Issues

#### Error: "Hosting: HTTP Error: 403, The caller does not have permission"
**Solution:**
1. Verify Firebase project permissions
2. Check if user has Hosting Admin role
3. Try re-authenticating: `firebase logout && firebase login`

#### Error: "Resource not accessible by integration"
**Solution for GitHub Actions:**
1. Add `FIREBASE_SERVICE_ACCOUNT_RIPRAP_C725E` to repository secrets
2. Verify the service account has proper permissions

### 📱 PWA Issues

#### Service Worker not loading
**Check:**
1. Verify `dist/sw.js` exists after build
2. Check browser dev tools → Application → Service Workers
3. Clear browser cache and reload

#### Icons not displaying
**Check:**
1. Verify `dist/icons/` directory exists
2. Check file paths in `dist/manifest.json`
3. Verify icon files are copied during build

#### App not installable
**Check:**
1. HTTPS is required (Firebase provides this)
2. Manifest is valid: Use lighthouse PWA audit
3. Service worker is registered

### 🔥 Firebase Specific Issues

#### Error: "Firebase project not initialized"
**Solution:**
```bash
firebase init hosting
# Select existing project: riprap-c725e
# Public directory: dist
# Single-page app: Yes
# GitHub deploys: Optional
```

#### Error: "Hosting already exists"
If you get deployment conflicts:
```bash
firebase hosting:disable  # Disable current hosting
firebase deploy --only hosting  # Redeploy
```

### 🚀 Performance Issues

#### Large bundle size warnings
**Solutions:**
1. Implement code splitting in `vite.config.js`
2. Optimize images and assets
3. Remove unused dependencies

#### Slow loading
**Check:**
1. Enable asset compression in Firebase
2. Verify cache headers in `firebase.json`
3. Use Lighthouse for performance audit

### 🔧 Environment Variable Issues

#### App shows "Demo mode" warning
**Solution:**
1. Verify `.env.local` exists with correct variables
2. Check variable names start with `VITE_`
3. Restart development server after env changes

#### Production variables not working
**Solution:**
1. Set variables in GitHub repository secrets
2. Verify GitHub Actions workflow uses them
3. Check Firebase console for environment variables

### 🐛 Debugging Commands

#### Check Firebase status
```bash
firebase projects:list
firebase use
firebase hosting:sites:list
```

#### Verbose deployment
```bash
firebase deploy --only hosting --debug
```

#### Test locally
```bash
npm run build
firebase serve  # Test hosting locally
```

#### Check build output
```bash
ls -la dist/
du -sh dist/*  # Check file sizes
```

### 📊 Verification Steps

#### After each deployment:
1. **Check URL**: Visit https://riprap-c725e.web.app
2. **Test PWA**: Try installing the app
3. **Check Console**: Look for errors in browser dev tools
4. **Test Offline**: Disconnect internet, verify basic functionality
5. **Check Firestore**: Verify data loads correctly

#### Lighthouse Audit
```bash
# Install lighthouse CLI
npm install -g lighthouse

# Run PWA audit
lighthouse https://riprap-c725e.web.app --view
```

### 🆘 Emergency Procedures

#### Rollback deployment
```bash
firebase hosting:releases:list
firebase hosting:releases:restore [RELEASE_ID]
```

#### Clear all caches
```bash
# Clear build cache
rm -rf dist/
npm run build

# Clear Firebase cache
firebase hosting:cache:clear
```

#### Reset Firebase project
```bash
firebase logout
firebase login
firebase use riprap-c725e
firebase init hosting  # Reconfigure if needed
```

### 📞 Getting Help

1. **Firebase Console**: Check logs in Firebase Console
2. **Browser DevTools**: Network, Console, Application tabs
3. **GitHub Actions**: Check workflow logs
4. **Firebase CLI**: Use `--debug` flag for verbose output

### 🔍 Log Analysis

#### Firebase deployment logs
Look for:
- Upload progress
- File processing errors
- Cache invalidation
- SSL certificate issues

#### Browser console errors
Common patterns:
- 404 errors for missing assets
- CORS issues
- Service worker registration failures
- Manifest parsing errors

### ✅ Success Indicators

When everything works correctly:
- App loads without errors
- Service worker registers successfully
- PWA install prompt appears (mobile)
- All routes work correctly
- Firestore data loads
- Offline functionality works

Remember: Most issues are resolved by ensuring proper authentication and rebuilding the application with `npm run build`.
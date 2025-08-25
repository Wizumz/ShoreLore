# Firebase Secrets Setup Guide

## Quick Setup Instructions

You need to add the Firebase configuration as **repository secrets** in GitHub to enable full functionality.

### Step 1: Access Repository Settings

1. Go to your GitHub repository: https://github.com/Wizumz/RipRap
2. Click on **Settings** tab (at the top of the repository)
3. In the left sidebar, click **Secrets and variables** → **Actions**

### Step 2: Add Each Secret

Click **"New repository secret"** for each of these:

| Secret Name | Secret Value |
|-------------|--------------|
| `VITE_FIREBASE_API_KEY` | `AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `riprap-c725e.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `riprap-c725e` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `riprap-c725e.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `995615030562` |
| `VITE_FIREBASE_APP_ID` | `1:995615030562:web:5194ca1ed7659de1cd797b` |
| `VITE_FIREBASE_MEASUREMENT_ID` | `G-6MDLTVXSTF` |

### Step 3: Trigger Deployment

After adding all secrets:
1. Go to **Actions** tab in your repository
2. You should see the latest workflow run
3. Either wait for the next push, or manually trigger by going to the workflow and clicking "Re-run jobs"

## Alternative: Quick Copy-Paste Instructions

**For each secret, copy these exact values:**

```
Secret: VITE_FIREBASE_API_KEY
Value: AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY
```

```
Secret: VITE_FIREBASE_AUTH_DOMAIN  
Value: riprap-c725e.firebaseapp.com
```

```
Secret: VITE_FIREBASE_PROJECT_ID
Value: riprap-c725e
```

```
Secret: VITE_FIREBASE_STORAGE_BUCKET
Value: riprap-c725e.firebasestorage.app
```

```
Secret: VITE_FIREBASE_MESSAGING_SENDER_ID
Value: 995615030562
```

```
Secret: VITE_FIREBASE_APP_ID
Value: 1:995615030562:web:5194ca1ed7659de1cd797b
```

```
Secret: VITE_FIREBASE_MEASUREMENT_ID
Value: G-6MDLTVXSTF
```

## Verification

After adding secrets and the next deployment completes:

### ✅ Success Indicators
- App loads without "demo mode" warnings in console
- Firebase authentication works (real user IDs)
- Posts can be created and stored in Firestore
- Real-time updates work
- No "network-request-failed" errors

### 🔍 Console Messages to Look For
```
✅ "Firebase configuration loaded from environment variables"
✅ "Signed in anonymously: [real-firebase-uid]"  
✅ "Firebase offline persistence enabled"
```

### ❌ If Still in Demo Mode
- Check that all 7 secrets are added with exact names
- Verify no typos in secret names or values
- Wait for deployment to complete (may take 2-5 minutes)
- Check GitHub Actions logs for any build errors

## Quick Test Commands

Once deployed with secrets, test in browser console:

```javascript
// Check if Firebase is working
console.log('Firebase config loaded:', !window.location.href.includes('demo'));

// Test authentication
import('./src/lib/firebaseService.js').then(m => 
  m.userService.getOrCreateUser().then(user => 
    console.log('User created:', user)
  )
);
```

## Troubleshooting

### If secrets don't work:
1. **Double-check secret names** - they must match exactly (case-sensitive)
2. **Verify values** - no extra spaces or missing characters
3. **Wait for deployment** - changes take effect only after new build
4. **Check Actions logs** - look for any build failures
5. **Clear browser cache** - force refresh the deployed app

### If Firebase errors persist:
1. Verify Firebase project is active and properly configured
2. Check Firebase Authentication settings allow anonymous auth
3. Ensure Firestore database is created and has proper rules
4. Confirm billing is enabled if required for your Firebase plan

---

**Time to Complete**: ~5 minutes  
**Required Access**: Repository admin/owner permissions  
**Next Step**: Add secrets → wait for deployment → test full functionality!
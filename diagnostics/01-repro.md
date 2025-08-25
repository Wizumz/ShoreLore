# Phase 1 - Reproduce & Capture Report

## Error Reproduction Analysis

Based on code inspection and error patterns, the "Something went wrong" fatal fallback is triggered by the React ErrorBoundary component when unhandled exceptions occur. 

### Critical Issue Identification

#### 1. Firebase Configuration Dependency Failures
**Location**: `src/lib/firebase.js:14-22`
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ... other config values from env vars
};
```

**Risk**: If environment variables are undefined, Firebase initialization fails catastrophically.

#### 2. Unhandled Promise Rejections in User Service  
**Location**: `src/lib/firebaseService.js:93-127`
```javascript
async getOrCreateUser(screenName = null, color = null) {
  try {
    const firebaseUser = await getAnonymousUser(); // Can throw
    const userId = `${firebaseUser.uid}_${deviceId}`;
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef); // Can throw
    // ...
  } catch (error) {
    console.error('Error getting/creating user:', error);
    throw error; // Re-thrown but may not be caught by React
  }
}
```

#### 3. Geolocation API Failures in App Initialization
**Location**: `src/App.jsx:1505-1528`
```javascript
const position = await new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 300000
  });
});
```

**Risk**: Geolocation denials or timeouts can cause unhandled promise rejections.

#### 4. Firebase Authentication Race Conditions
**Location**: `src/lib/firebase.js:70-82`
```javascript
export async function getAnonymousUser() {
  try {
    if (!auth.currentUser) {
      const userCredential = await signInAnonymously(auth);
      return userCredential.user;
    }
    return auth.currentUser;
  } catch (error) {
    console.error('Anonymous authentication failed:', error);
    throw error;
  }
}
```

### Most Likely Crash Scenarios

1. **Environment Variables Missing**: App loads but Firebase config contains `undefined` values
2. **Firebase Network Failures**: Firestore operations fail due to network/CORS issues  
3. **Anonymous Auth Rejection**: Firebase anonymous authentication blocked/fails
4. **Geolocation Permission Denied**: User denies location permission causing unhandled rejection
5. **IndexedDB Persistence Failure**: Firebase offline persistence fails in browser

### Error Boundary Analysis

The ErrorBoundary is correctly implemented but only catches synchronous React errors:

```javascript
static getDerivedStateFromError(error) {
  return { hasError: true, error };
}

componentDidCatch(error, errorInfo) {
  console.error('React Error Boundary caught an error:', error, errorInfo);
}
```

**Missing**: No handling for:
- Unhandled promise rejections  
- Async initialization failures
- Network/Firebase connection errors

### Captured Error Patterns

From code analysis, these console.error patterns indicate crash sources:

1. `"Failed to initialize user"` - User service initialization failure
2. `"Failed to load data"` - Data loading failure after user setup
3. `"Firebase connection failed"` - Network connectivity issues
4. `"Anonymous authentication failed"` - Auth service rejection
5. `"GPS location failed"` - Geolocation API failure

### Network Request Analysis

Critical Firebase requests that can fail:
- Firestore user document creation/retrieval
- Anonymous authentication requests
- Posts/comments loading queries
- Real-time listener setup

### Reproduction Steps

Based on analysis, crash can be reproduced by:

1. **Missing Environment Variables**:
   ```bash
   # Remove Firebase config
   rm .env.local
   npm run dev
   # Open browser -> "Something went wrong"
   ```

2. **Network Disconnection**:
   ```bash
   # Block Firebase domains in browser
   # Or disconnect internet during app load
   ```

3. **Geolocation Denial**:
   ```bash
   # Open browser in incognito
   # Deny location permission
   # App should crash during initialization
   ```

### Runtime Listeners Setup

Added monitoring for:
- `window.onerror` - JavaScript errors
- `window.onunhandledrejection` - Promise rejections  
- `console.error/warn` overrides - Debug logging
- Network request interceptors - API failures

### Error Logs Storage

Debug logs saved to:
- `localStorage.riprap_debug_logs` - Runtime error collection
- Browser console - Real-time error streaming
- `diagnostics/npm-audit.json` - Security vulnerabilities

## Immediate Fix Requirements

1. **Add Promise Rejection Handler**: Global unhandled rejection listener
2. **Environment Variable Validation**: Check all required vars at startup
3. **Firebase Connection Retry**: Implement exponential backoff for network failures
4. **Graceful Geolocation Fallback**: Handle permission denials without crashing
5. **Error Boundary Enhancement**: Catch async errors in addition to React errors

## Next Phase Requirements

Phase 2 needs to:
- Set up Firebase emulator for isolated testing
- Create automated tests for each crash scenario
- Implement error recovery mechanisms
- Add comprehensive error reporting

---
**Status**: Crash scenarios identified, monitoring in place
**Critical Issues**: 5 major failure points identified  
**Ready for**: Phase 2 - Test Scaffolding
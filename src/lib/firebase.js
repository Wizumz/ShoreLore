// Firebase configuration and initialization for RipRap fishing app
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  connectFirestoreEmulator,
  enableNetwork,
  disableNetwork,
  enableIndexedDbPersistence,
  clearIndexedDbPersistence
} from 'firebase/firestore';
import { getAuth, signInAnonymously, connectAuthEmulator } from 'firebase/auth';

// Check for Firebase environment variables and provide fallback configuration
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN', 
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
];

const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);

// If environment variables are missing, use fallback configuration for build/demo purposes
const firebaseConfig = missingVars.length > 0 ? {
  // Fallback configuration for builds without environment variables
  apiKey: "demo-api-key",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:demo-app-id",
  measurementId: "G-DEMO-ID"
} : {
  // Production configuration from environment variables
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Log configuration status
if (missingVars.length > 0) {
  console.warn('Firebase environment variables not found, using fallback configuration:', missingVars);
  console.warn('Firebase features will be limited. Set up environment variables for full functionality.');
} else {
  console.log('Firebase configuration loaded from environment variables');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

// Export demo mode flag for other services to check
export const isDemoMode = missingVars.length > 0;

// Enable offline persistence for better PWA experience
let persistenceEnabled = false;

// Initialize persistence (async function to handle top-level await issue)
async function initializePersistence() {
  try {
    await enableIndexedDbPersistence(db);
    persistenceEnabled = true;
    console.log('Firebase offline persistence enabled');
  } catch (err) {
    console.warn('Firebase persistence failed:', err.code);
    // Multiple tabs open, or other error
    if (err.code === 'failed-precondition') {
      console.warn('Firebase persistence failed: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.warn('Firebase persistence failed: Browser not supported');
    }
  }
}

// Initialize persistence when module loads
initializePersistence();

// Development environment setup
if (import.meta.env.DEV && import.meta.env.VITE_FIREBASE_USE_EMULATOR === 'true') {
  // Connect to Firebase emulators in development
  try {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectAuthEmulator(auth, 'http://localhost:9099');
    console.log('Connected to Firebase emulators');
  } catch (error) {
    console.warn('Firebase emulator connection failed:', error);
  }
}

/**
 * Get or create anonymous user for device-based identity
 * This maintains the current anonymous user pattern while leveraging Firebase Auth
 */
export async function getAnonymousUser() {
  try {
    if (!auth.currentUser) {
      const userCredential = await signInAnonymously(auth);
      console.log('Signed in anonymously:', userCredential.user.uid);
      return userCredential.user;
    }
    return auth.currentUser;
  } catch (error) {
    console.error('Anonymous authentication failed:', error);
    throw error;
  }
}

/**
 * Network status management for offline/online behavior
 */
export const firebaseNetwork = {
  async goOffline() {
    try {
      await disableNetwork(db);
      console.log('Firebase switched to offline mode');
    } catch (error) {
      console.error('Failed to go offline:', error);
    }
  },

  async goOnline() {
    try {
      await enableNetwork(db);
      console.log('Firebase switched to online mode');
    } catch (error) {
      console.error('Failed to go online:', error);
    }
  }
};

/**
 * Clear all offline data (for debugging/reset)
 */
export async function clearFirebaseCache() {
  try {
    await clearIndexedDbPersistence(db);
    console.log('Firebase cache cleared');
  } catch (error) {
    console.error('Failed to clear Firebase cache:', error);
    throw error;
  }
}

/**
 * Firebase connection status
 */
export function getFirebaseStatus() {
  return {
    isInitialized: !!app,
    persistenceEnabled,
    currentUser: auth.currentUser?.uid || null,
    isOfflineReady: persistenceEnabled
  };
}

// Export Firebase instances
export { db, auth, app };
export default { db, auth, app, getAnonymousUser, firebaseNetwork };
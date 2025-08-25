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

// Validate environment variables before Firebase initialization
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN', 
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
];

const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);

if (missingVars.length > 0) {
  console.error('Missing Firebase environment variables:', missingVars);
  throw new Error(`Firebase configuration incomplete. Missing: ${missingVars.join(', ')}`);
}

// Firebase configuration - these will be loaded from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

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
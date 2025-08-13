// Firebase Connection Test Script
// This script tests the Firebase connection independently

import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY",
  authDomain: "riprap-c725e.firebaseapp.com",
  projectId: "riprap-c725e",
  storageBucket: "riprap-c725e.firebasestorage.app",
  messagingSenderId: "995615030562",
  appId: "1:995615030562:web:5194ca1ed7659de1cd797b",
  measurementId: "G-6MDLTVXSTF"
};

async function testFirebaseConnection() {
  console.log('🔌 Testing Firebase Connection...\n');
  
  try {
    // Initialize Firebase
    console.log('1. Initializing Firebase app...');
    const app = initializeApp(firebaseConfig);
    console.log('✅ Firebase app initialized successfully');
    
    // Initialize Firestore
    console.log('2. Initializing Firestore...');
    const db = getFirestore(app);
    console.log('✅ Firestore initialized successfully');
    
    // Initialize Auth
    console.log('3. Initializing Authentication...');
    const auth = getAuth(app);
    console.log('✅ Authentication initialized successfully');
    
    // Test anonymous authentication
    console.log('4. Testing anonymous authentication...');
    const userCredential = await signInAnonymously(auth);
    console.log('✅ Anonymous authentication successful');
    console.log(`   User ID: ${userCredential.user.uid}`);
    
    // Test offline persistence
    console.log('5. Testing offline persistence...');
    try {
      await enableIndexedDbPersistence(db);
      console.log('✅ Offline persistence enabled successfully');
    } catch (err) {
      if (err.code === 'failed-precondition') {
        console.log('⚠️  Offline persistence failed: Multiple tabs open');
      } else if (err.code === 'unimplemented') {
        console.log('⚠️  Offline persistence not supported in this browser');
      } else {
        console.log('⚠️  Offline persistence failed:', err.message);
      }
    }
    
    console.log('\n🎉 All Firebase tests passed! Connection is working correctly.');
    
    return {
      success: true,
      app,
      db,
      auth,
      user: userCredential.user
    };
    
  } catch (error) {
    console.error('❌ Firebase connection test failed:', error);
    
    // Detailed error reporting
    if (error.code === 'auth/api-key-not-valid') {
      console.error('🔑 Invalid API key. Check your Firebase configuration.');
    } else if (error.code === 'auth/project-not-found') {
      console.error('🏗️  Firebase project not found. Verify project ID.');
    } else if (error.code === 'auth/network-request-failed') {
      console.error('🌐 Network error. Check internet connection.');
    }
    
    return {
      success: false,
      error: error
    };
  }
}

// Run the test
if (typeof window === 'undefined') {
  // Node.js environment
  console.log('This test should be run in a browser environment.');
} else {
  // Browser environment
  testFirebaseConnection().then(result => {
    if (result.success) {
      console.log('Firebase setup complete and ready for use! 🚀');
      
      // Make test results available globally for console testing
      window.firebaseTestResult = result;
      
      console.log('\n💡 You can now test CRUD operations:');
      console.log('   1. Open browser console');
      console.log('   2. Import and run: import("./src/lib/firebaseCrudExample.js").then(m => m.runQuickDemo())');
      
    } else {
      console.log('Please check Firebase configuration and try again.');
    }
  });
}

export default testFirebaseConnection;
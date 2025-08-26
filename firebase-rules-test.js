// Firebase Security Rules Testing Script
// This script tests the enhanced security rules implemented based on Grok AI recommendations

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

// Test Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMhCGiUmH6R7-PrKq0raLZba2Cj0truzY",
  authDomain: "shorelore-c725e.firebaseapp.com",
  projectId: "shorelore-c725e",
  storageBucket: "shorelore-c725e.firebasestorage.app",
  messagingSenderId: "995615030562",
  appId: "1:995615030562:web:5194ca1ed7659de1cd797b",
  measurementId: "G-6MDLTVXSTF"
};

class FirebaseRulesTest {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.auth = getAuth(this.app);
    this.testResults = [];
  }

  async runAllTests() {
    console.log('🔒 Starting Firebase Security Rules Tests...\n');
    
    try {
      // Authenticate first
      const userCredential = await signInAnonymously(this.auth);
      const firebaseUid = userCredential.user.uid;
      const deviceId = crypto.randomUUID();
      
      console.log(`✅ Authenticated with UID: ${firebaseUid}`);
      console.log(`📱 Device ID: ${deviceId}\n`);

      // Test 1: Valid User Creation
      await this.testValidUserCreation(firebaseUid, deviceId);
      
      // Test 2: Invalid User Creation (wrong format)
      await this.testInvalidUserCreation(firebaseUid, deviceId);
      
      // Test 3: Valid Post Creation
      await this.testValidPostCreation(firebaseUid, deviceId);
      
      // Test 4: Invalid Post Creation (missing fields)
      await this.testInvalidPostCreation();
      
      // Test 5: Valid Comment Creation
      await this.testValidCommentCreation(firebaseUid, deviceId);
      
      // Test 6: Valid Vote Creation
      await this.testValidVoteCreation(firebaseUid, deviceId);
      
      // Test 7: Invalid Vote Creation (old timestamp)
      await this.testInvalidVoteCreation();

      this.printResults();
      
    } catch (error) {
      console.error('❌ Test setup failed:', error);
    }
  }

  async testValidUserCreation(firebaseUid, deviceId) {
    console.log('🧪 Test 1: Valid User Creation');
    
    try {
      const userId = `${firebaseUid}_${deviceId}`;
      const userData = {
        deviceId,
        firebaseUid,
        screenName: 'TestAngler',
        color: { name: 'Navy', value: '#1e40af' },
        createdAt: serverTimestamp(),
        postsCount: 0,
        commentsCount: 0,
        votesCount: 0,
        lastActive: serverTimestamp()
      };
      
      await setDoc(doc(this.db, 'users', userId), userData);
      this.addResult('Valid User Creation', 'PASS', 'User created successfully with proper format');
      console.log('   ✅ PASS: User created successfully\n');
      
    } catch (error) {
      this.addResult('Valid User Creation', 'FAIL', error.message);
      console.log(`   ❌ FAIL: ${error.message}\n`);
    }
  }

  async testInvalidUserCreation(firebaseUid, deviceId) {
    console.log('🧪 Test 2: Invalid User Creation (wrong format)');
    
    try {
      // Try to create user with invalid userId format (missing firebaseUid prefix)
      const userId = `invalid_${deviceId}`;
      const userData = {
        deviceId,
        firebaseUid,
        screenName: 'TestAngler',
        color: { name: 'Navy', value: '#1e40af' },
        createdAt: serverTimestamp()
      };
      
      await setDoc(doc(this.db, 'users', userId), userData);
      this.addResult('Invalid User Creation', 'FAIL', 'Should have been rejected but succeeded');
      console.log('   ❌ FAIL: Should have been rejected but succeeded\n');
      
    } catch (error) {
      this.addResult('Invalid User Creation', 'PASS', 'Correctly rejected invalid user format');
      console.log('   ✅ PASS: Correctly rejected invalid user format\n');
    }
  }

  async testValidPostCreation(firebaseUid, deviceId) {
    console.log('🧪 Test 3: Valid Post Creation');
    
    try {
      const postData = {
        content: 'Test post content',
        authorId: `${firebaseUid}_${deviceId}`,
        author: 'TestAngler',
        authorColor: { name: 'Navy', value: '#1e40af' },
        location: {
          lat: 41.6688,
          lng: -70.2962,
          nearestCity: 'Cape Cod, MA'
        },
        upvotes: 0,
        downvotes: 0,
        score: 0,
        commentsCount: 0,
        reportsCount: 0,
        createdAt: serverTimestamp()
      };
      
      await addDoc(collection(this.db, 'posts'), postData);
      this.addResult('Valid Post Creation', 'PASS', 'Post created successfully with all required fields');
      console.log('   ✅ PASS: Post created successfully\n');
      
    } catch (error) {
      this.addResult('Valid Post Creation', 'FAIL', error.message);
      console.log(`   ❌ FAIL: ${error.message}\n`);
    }
  }

  async testInvalidPostCreation() {
    console.log('🧪 Test 4: Invalid Post Creation (missing fields)');
    
    try {
      // Try to create post with missing required fields
      const postData = {
        content: 'Test post content',
        authorId: 'test_user',
        // Missing author, authorColor, location fields
        upvotes: 0,
        downvotes: 0,
        score: 0
      };
      
      await addDoc(collection(this.db, 'posts'), postData);
      this.addResult('Invalid Post Creation', 'FAIL', 'Should have been rejected but succeeded');
      console.log('   ❌ FAIL: Should have been rejected but succeeded\n');
      
    } catch (error) {
      this.addResult('Invalid Post Creation', 'PASS', 'Correctly rejected incomplete post data');
      console.log('   ✅ PASS: Correctly rejected incomplete post data\n');
    }
  }

  async testValidCommentCreation(firebaseUid, deviceId) {
    console.log('🧪 Test 5: Valid Comment Creation');
    
    try {
      const commentData = {
        content: 'Test comment content',
        postId: 'test_post_id',
        authorId: `${firebaseUid}_${deviceId}`,
        author: 'TestAngler',
        authorColor: { name: 'Navy', value: '#1e40af' },
        createdAt: serverTimestamp()
      };
      
      await addDoc(collection(this.db, 'comments'), commentData);
      this.addResult('Valid Comment Creation', 'PASS', 'Comment created successfully');
      console.log('   ✅ PASS: Comment created successfully\n');
      
    } catch (error) {
      this.addResult('Valid Comment Creation', 'FAIL', error.message);
      console.log(`   ❌ FAIL: ${error.message}\n`);
    }
  }

  async testValidVoteCreation(firebaseUid, deviceId) {
    console.log('🧪 Test 6: Valid Vote Creation');
    
    try {
      const voteId = `${firebaseUid}_${deviceId}_test_post_id`;
      const voteData = {
        userId: `${firebaseUid}_${deviceId}`,
        postId: 'test_post_id',
        type: 'upvote',
        createdAt: serverTimestamp()
      };
      
      await setDoc(doc(this.db, 'votes', voteId), voteData);
      this.addResult('Valid Vote Creation', 'PASS', 'Vote created successfully');
      console.log('   ✅ PASS: Vote created successfully\n');
      
    } catch (error) {
      this.addResult('Valid Vote Creation', 'FAIL', error.message);
      console.log(`   ❌ FAIL: ${error.message}\n`);
    }
  }

  async testInvalidVoteCreation() {
    console.log('🧪 Test 7: Invalid Vote Creation (invalid type)');
    
    try {
      const voteId = `test_user_test_post_id`;
      const voteData = {
        userId: 'test_user',
        postId: 'test_post_id',
        type: 'invalid_vote_type', // Should only be 'upvote' or 'downvote'
        createdAt: serverTimestamp()
      };
      
      await setDoc(doc(this.db, 'votes', voteId), voteData);
      this.addResult('Invalid Vote Creation', 'FAIL', 'Should have been rejected but succeeded');
      console.log('   ❌ FAIL: Should have been rejected but succeeded\n');
      
    } catch (error) {
      this.addResult('Invalid Vote Creation', 'PASS', 'Correctly rejected invalid vote type');
      console.log('   ✅ PASS: Correctly rejected invalid vote type\n');
    }
  }

  addResult(testName, status, message) {
    this.testResults.push({ testName, status, message });
  }

  printResults() {
    console.log('📊 Test Results Summary:');
    console.log('=' .repeat(50));
    
    let passed = 0;
    let failed = 0;
    
    this.testResults.forEach(result => {
      const icon = result.status === 'PASS' ? '✅' : '❌';
      console.log(`${icon} ${result.testName}: ${result.status}`);
      console.log(`   ${result.message}`);
      
      if (result.status === 'PASS') passed++;
      else failed++;
    });
    
    console.log('=' .repeat(50));
    console.log(`📈 Results: ${passed} passed, ${failed} failed`);
    
    if (failed === 0) {
      console.log('🎉 All security rules tests passed!');
    } else {
      console.log('⚠️  Some tests failed - review security rules');
    }
  }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.FirebaseRulesTest = FirebaseRulesTest;
  console.log('🔧 Firebase Rules Test loaded!');
  console.log('Run: new FirebaseRulesTest().runAllTests()');
}

export default FirebaseRulesTest;
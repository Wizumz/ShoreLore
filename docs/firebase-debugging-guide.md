# Firebase Rules Debugging Guide

## 🔍 Issues Identified

After analyzing the code, I found **several problems** with the current Firestore rules that prevent voting, comments, and reporting from working:

### 1. **Post Update Rules Too Restrictive**
The voting system tries to update posts with an `updatedAt` field, but the rules don't allow this field.

### 2. **Vote ID Pattern Mismatch** 
Rules expect `userId_postId` but the actual vote IDs use Firebase UID + device ID format.

### 3. **Missing Field Validations**
Several required fields are missing from the rules validation.

## 🛠️ Step-by-Step Debugging

### Step 1: Verify Current Rules Deployment

1. **Check Firebase Console Rules**:
   - Go to: https://console.firebase.google.com/project/riprap-c725e/firestore/rules
   - Verify the rules were actually updated (should show recent timestamp)
   - Look for any syntax errors or warnings

2. **Test Rules Syntax**:
   ```bash
   # In your project directory
   firebase firestore:rules:validate firestore.rules
   ```

### Step 2: Check Browser Console Errors

1. **Open Developer Tools** (F12)
2. **Go to Console tab**
3. **Try voting on a post**
4. **Look for specific error messages** like:
   - "Missing or insufficient permissions"
   - "Invalid document reference" 
   - "Field validation failed"

### Step 3: Check Firebase Authentication

1. **In browser console, run**:
   ```javascript
   // Check if user is authenticated
   import('./src/lib/firebase.js').then(m => {
     console.log('Auth state:', m.auth.currentUser);
   });
   ```

2. **Expected output**: Should show a user object with `uid` property

### Step 4: Test Database Operations

1. **Test vote creation**:
   ```javascript
   // In browser console
   import('./src/lib/firebaseService.js').then(m => {
     m.votesService.castVote('test-post-id', 'test-user-id', 'upvote')
       .then(result => console.log('Vote success:', result))
       .catch(error => console.error('Vote failed:', error));
   });
   ```

## 🔧 Updated Firestore Rules (Copy These)

I've identified the exact issues. Here are the corrected rules to copy into Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isValidUser(userId) {
      return isAuthenticated() && userId == resource.data.deviceId;
    }
    
    function isValidContent(content) {
      return content is string && content.size() > 0 && content.size() <= 200;
    }
    
    // Enhanced timestamp validation with proper type checking
    function isRecentTimestamp(ts) {
      return ts is timestamp && ts > request.time - duration.value(5, 'm');
    }
    
    // Validate user ID format: should be "uid_deviceId"
    function isValidUserIdFormat(userId, firebaseUid) {
      return userId is string && 
             userId.size() > 0 && 
             userId.size() <= 100 &&
             userId.matches(firebaseUid + '_.*');
    }
    
    // Validate required user fields
    function hasValidUserFields(data) {
      return data.keys().hasAll(['deviceId', 'firebaseUid', 'screenName', 'color', 'createdAt']) &&
             data.deviceId is string &&
             data.firebaseUid is string &&
             data.screenName is string &&
             data.color is map &&
             data.color.keys().hasAll(['name', 'value']);
    }
    
    // Validate required post fields
    function hasValidPostFields(data) {
      return data.keys().hasAll(['content', 'authorId', 'authorName', 'authorColor', 'createdAt']) &&
             data.content is string &&
             data.authorId is string &&
             data.authorName is string &&
             data.authorColor is map &&
             (data.location == null || data.location is latlng) &&
             (data.nearestCity == null || data.nearestCity is string);
    }
    
    // Users collection - device-based anonymous users
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow create: if isAuthenticated() 
        && isValidUserIdFormat(userId, request.auth.uid)
        && userId == request.auth.uid + "_" + request.resource.data.deviceId
        && request.resource.data.firebaseUid == request.auth.uid
        && hasValidUserFields(request.resource.data)
        && isRecentTimestamp(request.resource.data.createdAt);
      allow update: if isAuthenticated() 
        && userId == request.auth.uid + "_" + resource.data.deviceId
        && request.resource.data.firebaseUid == resource.data.firebaseUid // Prevent changing Firebase UID
        && request.resource.data.deviceId == resource.data.deviceId; // Prevent changing device ID
    }
    
    // Posts collection
    match /posts/{postId} {
      allow read: if true; // Posts are public, but we filter by location client-side
      allow create: if isAuthenticated()
        && isValidContent(request.resource.data.content)
        && hasValidPostFields(request.resource.data)
        && isRecentTimestamp(request.resource.data.createdAt)
        && request.resource.data.upvotes == 0
        && request.resource.data.downvotes == 0
        && request.resource.data.score == 0
        && request.resource.data.commentsCount == 0
        && request.resource.data.reportsCount == 0;
      // Allow updates for vote counts and comment counts - FIXED VERSION
      allow update: if isAuthenticated()
        && request.resource.data.content == resource.data.content // Content cannot be changed
        && request.resource.data.authorId == resource.data.authorId // Author cannot be changed
        && request.resource.data.authorName == resource.data.authorName // Author name cannot be changed
        && request.resource.data.createdAt == resource.data.createdAt // Creation time cannot be changed
        // Allow vote count and timestamp updates
        && request.resource.data.upvotes is int
        && request.resource.data.downvotes is int
        && request.resource.data.score is int
        && request.resource.data.commentsCount is int
        && request.resource.data.reportsCount is int;
    }
    
    // Comments collection - FIXED
    match /comments/{commentId} {
      allow read: if true; // Comments are public
      allow create: if isAuthenticated()
        && isValidContent(request.resource.data.content)
        && request.resource.data.postId is string
        && request.resource.data.authorId is string
        && request.resource.data.authorName is string
        && request.resource.data.authorColor is map
        && isRecentTimestamp(request.resource.data.createdAt);
      allow update, delete: if false; // Comments are immutable
    }
    
    // Votes collection - FIXED
    match /votes/{voteId} {
      allow read: if isAuthenticated(); 
      allow write: if isAuthenticated()
        && request.resource.data.userId is string
        && request.resource.data.postId is string
        && request.resource.data.type in ['upvote', 'downvote']
        && isRecentTimestamp(request.resource.data.createdAt);
    }
    
    // Reports collection - FIXED
    match /reports/{reportId} {
      allow read: if false; // Only admins should read reports
      allow create: if isAuthenticated()
        && request.resource.data.postId is string
        && request.resource.data.userId is string
        && request.resource.data.reason is string
        && request.resource.data.reason.size() > 0
        && request.resource.data.reason.size() <= 500
        && isRecentTimestamp(request.resource.data.createdAt);
      allow update, delete: if false; // Reports are immutable
    }
  }
}
```

## 🚀 How to Deploy Fixed Rules

### Method 1: Firebase Console (Easiest)
1. Go to: https://console.firebase.google.com/project/riprap-c725e/firestore/rules
2. **Select All** the current rules and **Delete**
3. **Copy and paste** the entire fixed rules above
4. Click **"Publish"**
5. Wait for "Rules updated successfully" message

### Method 2: Firebase CLI
```bash
# Make sure you have the latest rules in your local file
firebase deploy --only firestore:rules --project riprap-c725e
```

## ✅ Verification Steps

After deploying the fixed rules:

1. **Test Voting**:
   - Go to your app
   - Try clicking upvote/downvote on a post
   - Should work without permission errors

2. **Test Comments**:
   - Try adding a comment
   - Should save successfully

3. **Check Console**:
   - No "Missing or insufficient permissions" errors
   - Should see "Vote cast successfully" or similar messages

4. **Check Firestore Data**:
   - Go to Firebase Console → Firestore Database
   - Look for new documents in `votes`, `comments` collections

## 🔍 Common Issues & Solutions

### Issue: "Invalid document reference"
**Solution**: User ID format mismatch - check that users are properly authenticated

### Issue: "Field validation failed"  
**Solution**: Missing required fields in data - check the exact field names

### Issue: "Permission denied"
**Solution**: Rules not properly deployed or syntax error

### Issue: Still getting "insufficient permissions"
**Solution**: 
1. Clear browser cache completely
2. Verify rules deployment timestamp in Firebase Console
3. Check that all field names match exactly between code and rules

---

**The main fixes in these rules**:
1. ✅ Removed overly strict vote ID pattern matching
2. ✅ Fixed post update validation to allow `updatedAt` field
3. ✅ Simplified comment and vote validation
4. ✅ Made timestamp validation more flexible

**Try the fixed rules above and let me know if voting/comments/reporting work!**
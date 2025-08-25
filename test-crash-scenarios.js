// Test scenarios to reproduce the "Something went wrong" crash
// Run this in browser console to simulate various error conditions

const crashScenarios = {
    // 1. Firebase Configuration Missing/Invalid
    testFirebaseConfig() {
        console.log('🧪 Testing Firebase configuration...');
        
        // Check environment variables
        const requiredVars = [
            'VITE_FIREBASE_API_KEY',
            'VITE_FIREBASE_AUTH_DOMAIN', 
            'VITE_FIREBASE_PROJECT_ID',
            'VITE_FIREBASE_STORAGE_BUCKET',
            'VITE_FIREBASE_MESSAGING_SENDER_ID',
            'VITE_FIREBASE_APP_ID'
        ];
        
        const missing = requiredVars.filter(varName => !import.meta.env[varName]);
        if (missing.length > 0) {
            console.error('❌ Missing Firebase environment variables:', missing);
            return false;
        }
        
        console.log('✅ Firebase environment variables present');
        return true;
    },
    
    // 2. Firebase Connection Test
    async testFirebaseConnection() {
        console.log('🧪 Testing Firebase connection...');
        try {
            const { db } = await import('./src/lib/firebase.js');
            console.log('✅ Firebase DB instance created');
            
            // Test basic read operation
            const { collection, getDocs, limit, query } = await import('firebase/firestore');
            const testQuery = query(collection(db, 'posts'), limit(1));
            await getDocs(testQuery);
            console.log('✅ Firebase connection successful');
            return true;
        } catch (error) {
            console.error('❌ Firebase connection failed:', error);
            return false;
        }
    },
    
    // 3. Anonymous Authentication Test  
    async testAnonymousAuth() {
        console.log('🧪 Testing anonymous authentication...');
        try {
            const { getAnonymousUser } = await import('./src/lib/firebase.js');
            const user = await getAnonymousUser();
            console.log('✅ Anonymous auth successful:', user.uid);
            return true;
        } catch (error) {
            console.error('❌ Anonymous auth failed:', error);
            return false;
        }
    },
    
    // 4. User Service Test
    async testUserService() {
        console.log('🧪 Testing user service...');
        try {
            const { userService } = await import('./src/lib/firebaseService.js');
            const user = await userService.getOrCreateUser();
            console.log('✅ User service successful:', user);
            return true;
        } catch (error) {
            console.error('❌ User service failed:', error);
            return false;
        }
    },
    
    // 5. Posts Loading Test
    async testPostsLoading() {
        console.log('🧪 Testing posts loading...');
        try {
            const firebaseService = await import('./src/lib/firebaseService.js');
            const location = { lat: 42.3601, lng: -71.0589 }; // Boston
            const posts = await firebaseService.default.getPosts(location, 50, 10, 'hot');
            console.log('✅ Posts loading successful:', posts.length, 'posts');
            return true;
        } catch (error) {
            console.error('❌ Posts loading failed:', error);
            return false;
        }
    },
    
    // 6. Geolocation Test
    async testGeolocation() {
        console.log('🧪 Testing geolocation...');
        return new Promise((resolve) => {
            if (!navigator.geolocation) {
                console.error('❌ Geolocation not supported');
                resolve(false);
                return;
            }
            
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('✅ Geolocation successful:', position.coords);
                    resolve(true);
                },
                (error) => {
                    console.error('❌ Geolocation failed:', error);
                    resolve(false);
                },
                { timeout: 10000 }
            );
        });
    },
    
    // 7. Simulate Network Failure
    async testNetworkFailure() {
        console.log('🧪 Simulating network failure...');
        
        // Override fetch to simulate network issues
        const originalFetch = window.fetch;
        window.fetch = function() {
            return Promise.reject(new Error('Simulated network failure'));
        };
        
        try {
            const firebaseService = await import('./src/lib/firebaseService.js');
            const location = { lat: 42.3601, lng: -71.0589 };
            await firebaseService.default.getPosts(location, 50, 10, 'hot');
            console.error('❌ Network failure simulation failed');
            return false;
        } catch (error) {
            console.log('✅ Network failure correctly handled:', error.message);
            return true;
        } finally {
            // Restore original fetch
            window.fetch = originalFetch;
        }
    },
    
    // 8. Test Local Storage Issues
    testLocalStorage() {
        console.log('🧪 Testing localStorage access...');
        try {
            const testKey = 'riprap_test_key';
            localStorage.setItem(testKey, 'test');
            const value = localStorage.getItem(testKey);
            localStorage.removeItem(testKey);
            
            if (value === 'test') {
                console.log('✅ localStorage working correctly');
                return true;
            } else {
                console.error('❌ localStorage not working correctly');
                return false;
            }
        } catch (error) {
            console.error('❌ localStorage access failed:', error);
            return false;
        }
    },
    
    // Run all crash scenarios
    async runAllTests() {
        console.log('🚀 Running all crash scenario tests...');
        const results = {};
        
        results.firebaseConfig = this.testFirebaseConfig();
        results.localStorage = this.testLocalStorage();
        results.geolocation = await this.testGeolocation();
        results.firebaseConnection = await this.testFirebaseConnection();
        results.anonymousAuth = await this.testAnonymousAuth();
        results.userService = await this.testUserService();
        results.postsLoading = await this.testPostsLoading();
        results.networkFailure = await this.testNetworkFailure();
        
        console.log('📊 Test Results:', results);
        
        const failures = Object.entries(results).filter(([key, passed]) => !passed);
        if (failures.length > 0) {
            console.error('💥 Failed tests:', failures.map(([key]) => key));
        } else {
            console.log('✅ All tests passed');
        }
        
        return results;
    }
};

// Export for manual testing
window.crashScenarios = crashScenarios;
console.log('💻 Crash scenario tests loaded. Run: crashScenarios.runAllTests()');
const { useState, useEffect, useRef } = React;

// Utility functions for IndexedDB
const DB_NAME = 'HookrDB';
const DB_VERSION = 1;

const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            
            // Posts store
            if (!db.objectStoreNames.contains('posts')) {
                const postsStore = db.createObjectStore('posts', { keyPath: 'id', autoIncrement: true });
                postsStore.createIndex('timestamp', 'timestamp');
                postsStore.createIndex('location', 'location');
            }
            
            // Comments store
            if (!db.objectStoreNames.contains('comments')) {
                const commentsStore = db.createObjectStore('comments', { keyPath: 'id', autoIncrement: true });
                commentsStore.createIndex('postId', 'postId');
                commentsStore.createIndex('timestamp', 'timestamp');
            }
            
            // User votes store
            if (!db.objectStoreNames.contains('votes')) {
                const votesStore = db.createObjectStore('votes', { keyPath: 'id', autoIncrement: true });
                votesStore.createIndex('postId', 'postId');
                votesStore.createIndex('userId', 'userId');
            }
        };
    });
};

// Generate unique screen name
const generateScreenName = () => {
    const adjectives = ['Reel', 'Big', 'Deep', 'Lucky', 'Master', 'Pro', 'Bass', 'Catch', 'Fisher', 'Angler'];
    const nouns = ['Fisher', 'Caster', 'Hunter', 'Master', 'Captain', 'Admiral', 'Sailor', 'Keeper', 'Legend', 'Hero'];
    const numbers = Math.floor(Math.random() * 999) + 1;
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${adj}${noun}${numbers}`;
};

// Get or create user identity
const getUserIdentity = () => {
    let user = localStorage.getItem('hookr_user');
    if (!user) {
        user = {
            id: crypto.randomUUID(),
            screenName: generateScreenName(),
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('hookr_user', JSON.stringify(user));
    } else {
        user = JSON.parse(user);
    }
    return user;
};

// Calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
};

// Mock locations for testing
const mockLocations = {
    'seattle': { lat: 47.6062, lng: -122.3321, name: 'Seattle, WA' },
    'miami': { lat: 25.7617, lng: -80.1918, name: 'Miami, FL' },
    'boston': { lat: 42.3601, lng: -71.0589, name: 'Boston, MA' },
    'sandiego': { lat: 32.7157, lng: -117.1611, name: 'San Diego, CA' },
    'portland': { lat: 45.5152, lng: -122.6784, name: 'Portland, OR' }
};

// Post Component
const Post = ({ post, onVote, onComment, onReport, userVotes, comments }) => {
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [isReported, setIsReported] = useState(false);
    
    const userVote = userVotes.find(v => v.postId === post.id);
    const postComments = comments.filter(c => c.postId === post.id);
    
    const handleVote = (voteType) => {
        onVote(post.id, voteType);
    };
    
    const handleComment = () => {
        if (commentText.trim() && commentText.length <= 200) {
            onComment(post.id, commentText.trim());
            setCommentText('');
        }
    };
    
    const handleReport = () => {
        onReport(post.id);
        setIsReported(true);
        setTimeout(() => setIsReported(false), 3000);
    };
    
    const getTimeAgo = (timestamp) => {
        const now = new Date();
        const postTime = new Date(timestamp);
        const diff = Math.floor((now - postTime) / 1000);
        
        if (diff < 60) return 'just now';
        if (diff < 3600) return `${Math.floor(diff / 60)}m`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
        return `${Math.floor(diff / 86400)}d`;
    };
    
    const getRandomEmoji = () => {
        const emojis = ['🐟', '🎣', '🐠', '🦈', '🐙', '🦀', '🐚', '⚓', '🚤', '🏝️'];
        return emojis[Math.floor(Math.random() * emojis.length)];
    };
    
    // Hide posts with score <= -5
    if (post.score <= -5) {
        return null;
    }
    
    return (
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 mb-4 shadow-lg border border-ocean-200">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                    <span className="text-ocean-700 font-semibold">{post.author}</span>
                    <span className="text-gray-500 text-sm">{getTimeAgo(post.timestamp)}</span>
                    <span className="text-gray-400 text-xs">📍 {post.location.distance}mi</span>
                </div>
                <button
                    onClick={handleReport}
                    className={`text-xs px-2 py-1 rounded ${
                        isReported 
                            ? 'bg-red-200 text-red-800' 
                            : 'text-gray-500 hover:bg-gray-100'
                    }`}
                    disabled={isReported}
                >
                    {isReported ? '✓ Reported' : '🚩 Report'}
                </button>
            </div>
            
            <p className="text-gray-800 mb-3">{post.content}</p>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => handleVote('up')}
                        className={`flex items-center space-x-1 px-2 py-1 rounded ${
                            userVote?.type === 'up' 
                                ? 'bg-green-100 text-green-700' 
                                : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        <span>⬆️</span>
                        <span className="text-sm">{post.upvotes}</span>
                    </button>
                    
                    <button
                        onClick={() => handleVote('down')}
                        className={`flex items-center space-x-1 px-2 py-1 rounded ${
                            userVote?.type === 'down' 
                                ? 'bg-red-100 text-red-700' 
                                : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        <span>⬇️</span>
                        <span className="text-sm">{post.downvotes}</span>
                    </button>
                    
                    <span className={`font-semibold ${
                        post.score > 0 ? 'text-green-600' : 
                        post.score < 0 ? 'text-red-600' : 'text-gray-600'
                    }`}>
                        {post.score > 0 ? '+' : ''}{post.score}
                    </span>
                </div>
                
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center space-x-1 text-ocean-600 hover:text-ocean-800 text-sm"
                >
                    <span>💬</span>
                    <span>{postComments.length}</span>
                </button>
            </div>
            
            {showComments && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="space-y-3 mb-4">
                        {postComments.map(comment => (
                            <div key={comment.id} className="bg-gray-50 rounded p-3">
                                <div className="flex items-center space-x-2 mb-1">
                                    <span className="text-sm">{getRandomEmoji()}</span>
                                    <span className="text-ocean-600 font-medium text-sm">{comment.author}</span>
                                    <span className="text-gray-400 text-xs">{getTimeAgo(comment.timestamp)}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{comment.content}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Add a comment..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 text-sm"
                            maxLength={200}
                        />
                        <button
                            onClick={handleComment}
                            disabled={!commentText.trim()}
                            className="px-4 py-2 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
                        >
                            Comment
                        </button>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        {commentText.length}/200 characters
                    </div>
                </div>
            )}
        </div>
    );
};

// Main App Component
const App = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [userVotes, setUserVotes] = useState([]);
    const [newPostContent, setNewPostContent] = useState('');
    const [user, setUser] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('seattle');
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [darkMode, setDarkMode] = useState(false);
    const [db, setDb] = useState(null);
    
    const textareaRef = useRef(null);
    
    // Initialize app
    useEffect(() => {
        const initApp = async () => {
            // Initialize user
            const userData = getUserIdentity();
            setUser(userData);
            
            // Initialize database
            try {
                const database = await initDB();
                setDb(database);
                await loadData(database, userData.id);
            } catch (error) {
                console.error('Failed to initialize database:', error);
            }
            
            // Get user location or use mock
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setUserLocation({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        });
                    },
                    () => {
                        // Use mock location if geolocation fails
                        setUserLocation(mockLocations[selectedLocation]);
                    }
                );
            } else {
                setUserLocation(mockLocations[selectedLocation]);
            }
        };
        
        initApp();
        
        // Online/offline status
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    
    // Load data from IndexedDB
    const loadData = async (database, userId) => {
        try {
            const transaction = database.transaction(['posts', 'comments', 'votes'], 'readonly');
            
            // Load posts
            const postsRequest = transaction.objectStore('posts').getAll();
            const postsResult = await new Promise((resolve, reject) => {
                postsRequest.onsuccess = () => resolve(postsRequest.result);
                postsRequest.onerror = () => reject(postsRequest.error);
            });
            
            // Load comments
            const commentsRequest = transaction.objectStore('comments').getAll();
            const commentsResult = await new Promise((resolve, reject) => {
                commentsRequest.onsuccess = () => resolve(commentsRequest.result);
                commentsRequest.onerror = () => reject(commentsRequest.error);
            });
            
            // Load user votes
            const votesRequest = transaction.objectStore('votes').index('userId').getAll(userId);
            const votesResult = await new Promise((resolve, reject) => {
                votesRequest.onsuccess = () => resolve(votesRequest.result);
                votesRequest.onerror = () => reject(votesRequest.error);
            });
            
            setPosts(postsResult || []);
            setComments(commentsResult || []);
            setUserVotes(votesResult || []);
        } catch (error) {
            console.error('Failed to load data:', error);
        }
    };
    
    // Filter posts by location (within 5 miles)
    const getFilteredPosts = () => {
        if (!userLocation) return posts;
        
        return posts.filter(post => {
            if (post.location.lat && post.location.lng) {
                const distance = calculateDistance(
                    userLocation.lat, userLocation.lng,
                    post.location.lat, post.location.lng
                );
                return distance <= 5;
            }
            return true;
        }).sort((a, b) => b.score - a.score || new Date(b.timestamp) - new Date(a.timestamp));
    };
    
    // Create new post
    const handleCreatePost = async () => {
        if (!newPostContent.trim() || !db || !user || !userLocation) return;
        
        const newPost = {
            content: newPostContent.trim(),
            author: user.screenName,
            authorId: user.id,
            timestamp: new Date().toISOString(),
            upvotes: 0,
            downvotes: 0,
            score: 0,
            location: {
                lat: userLocation.lat,
                lng: userLocation.lng,
                distance: 0
            }
        };
        
        try {
            const transaction = db.transaction(['posts'], 'readwrite');
            const store = transaction.objectStore('posts');
            await new Promise((resolve, reject) => {
                const request = store.add(newPost);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
            
            await loadData(db, user.id);
            setNewPostContent('');
        } catch (error) {
            console.error('Failed to create post:', error);
        }
    };
    
    // Handle voting
    const handleVote = async (postId, voteType) => {
        if (!db || !user) return;
        
        try {
            const transaction = db.transaction(['posts', 'votes'], 'readwrite');
            const postsStore = transaction.objectStore('posts');
            const votesStore = transaction.objectStore('votes');
            
            // Get current post
            const postRequest = postsStore.get(postId);
            const post = await new Promise((resolve, reject) => {
                postRequest.onsuccess = () => resolve(postRequest.result);
                postRequest.onerror = () => reject(postRequest.error);
            });
            
            // Check existing vote
            const existingVoteRequest = votesStore.index('userId').getAll(user.id);
            const userVotesResult = await new Promise((resolve, reject) => {
                existingVoteRequest.onsuccess = () => resolve(existingVoteRequest.result);
                existingVoteRequest.onerror = () => reject(existingVoteRequest.error);
            });
            
            const existingVote = userVotesResult.find(v => v.postId === postId);
            
            // Update vote counts
            if (existingVote) {
                if (existingVote.type === voteType) {
                    // Remove vote
                    await new Promise((resolve, reject) => {
                        const deleteRequest = votesStore.delete(existingVote.id);
                        deleteRequest.onsuccess = () => resolve();
                        deleteRequest.onerror = () => reject(deleteRequest.error);
                    });
                    
                    if (voteType === 'up') {
                        post.upvotes--;
                    } else {
                        post.downvotes--;
                    }
                } else {
                    // Change vote
                    existingVote.type = voteType;
                    await new Promise((resolve, reject) => {
                        const updateRequest = votesStore.put(existingVote);
                        updateRequest.onsuccess = () => resolve();
                        updateRequest.onerror = () => reject(updateRequest.error);
                    });
                    
                    if (voteType === 'up') {
                        post.upvotes++;
                        post.downvotes--;
                    } else {
                        post.downvotes++;
                        post.upvotes--;
                    }
                }
            } else {
                // New vote
                const newVote = {
                    postId,
                    userId: user.id,
                    type: voteType,
                    timestamp: new Date().toISOString()
                };
                
                await new Promise((resolve, reject) => {
                    const addRequest = votesStore.add(newVote);
                    addRequest.onsuccess = () => resolve();
                    addRequest.onerror = () => reject(addRequest.error);
                });
                
                if (voteType === 'up') {
                    post.upvotes++;
                } else {
                    post.downvotes++;
                }
            }
            
            // Update score
            post.score = post.upvotes - post.downvotes;
            
            // Save updated post
            await new Promise((resolve, reject) => {
                const updateRequest = postsStore.put(post);
                updateRequest.onsuccess = () => resolve();
                updateRequest.onerror = () => reject(updateRequest.error);
            });
            
            await loadData(db, user.id);
        } catch (error) {
            console.error('Failed to vote:', error);
        }
    };
    
    // Handle comment
    const handleComment = async (postId, content) => {
        if (!db || !user) return;
        
        const newComment = {
            postId,
            content,
            author: user.screenName,
            authorId: user.id,
            timestamp: new Date().toISOString()
        };
        
        try {
            const transaction = db.transaction(['comments'], 'readwrite');
            const store = transaction.objectStore('comments');
            await new Promise((resolve, reject) => {
                const request = store.add(newComment);
                request.onsuccess = () => resolve();
                request.onerror = () => reject(request.error);
            });
            
            await loadData(db, user.id);
        } catch (error) {
            console.error('Failed to add comment:', error);
        }
    };
    
    // Handle report
    const handleReport = (postId) => {
        console.log(`Post ${postId} reported by user ${user?.id}`);
        // In a real app, this would send to a moderation system
    };
    
    // Regenerate screen name
    const regenerateScreenName = () => {
        const newUser = {
            ...user,
            screenName: generateScreenName()
        };
        setUser(newUser);
        localStorage.setItem('hookr_user', JSON.stringify(newUser));
    };
    
    // Change mock location
    const handleLocationChange = (locationKey) => {
        setSelectedLocation(locationKey);
        setUserLocation(mockLocations[locationKey]);
    };
    
    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [newPostContent]);
    
    const filteredPosts = getFilteredPosts();
    
    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <div className="max-w-lg mx-auto bg-white bg-opacity-10 backdrop-blur-sm min-h-screen">
                {/* Header */}
                <div className="bg-ocean-700 text-white p-4 sticky top-0 z-10 backdrop-blur-sm bg-opacity-90">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🎣</span>
                            <h1 className="text-xl font-bold">Hookr</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            {!isOnline && (
                                <span className="text-yellow-200 text-sm">📡 Offline</span>
                            )}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-full hover:bg-ocean-600 transition-colors"
                            >
                                {darkMode ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2 text-sm">
                        <div className="flex items-center space-x-2">
                            <span>👤 {user?.screenName}</span>
                            <button
                                onClick={regenerateScreenName}
                                className="text-xs bg-ocean-600 px-2 py-1 rounded hover:bg-ocean-500"
                            >
                                🔄
                            </button>
                        </div>
                        <select
                            value={selectedLocation}
                            onChange={(e) => handleLocationChange(e.target.value)}
                            className="text-black text-xs rounded px-2 py-1"
                        >
                            {Object.entries(mockLocations).map(([key, location]) => (
                                <option key={key} value={key}>{location.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
                {/* Create Post */}
                <div className="p-4 bg-white bg-opacity-90 backdrop-blur-sm border-b border-ocean-200">
                    <textarea
                        ref={textareaRef}
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="What's biting today? Share your catch, spot, or tip..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500 resize-none min-h-[60px] max-h-[120px]"
                        maxLength={200}
                        rows={1}
                    />
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-500">
                            {newPostContent.length}/200 characters
                        </span>
                        <button
                            onClick={handleCreatePost}
                            disabled={!newPostContent.trim() || !isOnline}
                            className="px-4 py-2 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
                        >
                            <span>🎣</span>
                            <span>Cast</span>
                        </button>
                    </div>
                </div>
                
                {/* Posts Feed */}
                <div className="p-4">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center text-white bg-ocean-600 bg-opacity-20 backdrop-blur-sm rounded-lg p-8">
                            <span className="text-4xl mb-4 block">🎣</span>
                            <h3 className="text-lg font-semibold mb-2">No casts in your area</h3>
                            <p className="text-sm opacity-90">Be the first to share what's happening on the water!</p>
                        </div>
                    ) : (
                        filteredPosts.map(post => (
                            <Post
                                key={post.id}
                                post={{...post, location: {...post.location, distance: Math.round(calculateDistance(userLocation?.lat || 0, userLocation?.lng || 0, post.location.lat, post.location.lng) * 10) / 10}}}
                                onVote={handleVote}
                                onComment={handleComment}
                                onReport={handleReport}
                                userVotes={userVotes}
                                comments={comments}
                            />
                        ))
                    )}
                </div>
                
                {/* Footer */}
                <div className="p-4 text-center text-white text-sm bg-ocean-700 bg-opacity-20 backdrop-blur-sm">
                    <p>🎣 Tight lines and good catches!</p>
                    <p className="text-xs mt-1 opacity-75">Anonymous • Location-based • Fishing community</p>
                </div>
            </div>
        </div>
    );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
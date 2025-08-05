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
const getUserIdentity = (customUsername = null) => {
    let user = localStorage.getItem('hookr_user');
    if (!user || customUsername) {
        user = {
            id: crypto.randomUUID(),
            screenName: customUsername || generateScreenName(),
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
    seattle: { lat: 47.6062, lng: -122.3321 },
    miami: { lat: 25.7617, lng: -80.1918 },
    chicago: { lat: 41.8781, lng: -87.6298 },
    denver: { lat: 39.7392, lng: -104.9903 }
};

// Username Setup Component
const UsernameSetup = ({ onUsernameSet }) => {
    const [username, setUsername] = useState(generateScreenName());

    const handleContinue = () => {
        if (username.trim().length < 3) {
            alert('Username must be at least 3 characters long');
            return;
        }
        if (username.trim().length > 20) {
            alert('Username must be 20 characters or less');
            return;
        }
        onUsernameSet(username.trim());
    };

    const generateNew = () => {
        setUsername(generateScreenName());
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto border border-slate-200 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg">
                <div className="text-center space-y-4 p-6">
                    <div className="text-6xl mb-4">🎣</div>
                    <h3 className="text-3xl font-bold text-slate-900">
                        Welcome to Hookr
                    </h3>
                    <p className="text-slate-600 text-base">
                        Join the anonymous fishing community. Choose your angler name to get started.
                    </p>
                </div>
                
                <div className="space-y-6 p-6 pt-0">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                            Your Angler Name
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your fishing name"
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                            maxLength={20}
                        />
                        <div className="text-xs text-slate-500">
                            {username.length}/20 characters
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button 
                            onClick={generateNew}
                            className="flex-1 h-10 px-4 py-2 border border-slate-300 bg-white text-slate-700 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                            🎲 Generate New
                        </button>
                        <button 
                            onClick={handleContinue}
                            disabled={!username.trim() || username.trim().length < 3}
                            className="flex-1 h-10 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            🚀 Start Fishing
                        </button>
                    </div>

                    <div className="text-center text-xs text-slate-500 space-y-1">
                        <p>• Your identity stays anonymous</p>
                        <p>• Share catches, spots, and tips locally</p>
                        <p>• Connect with anglers in your area</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Post Component with improved accessibility
const Post = ({ post, onVote, onComment, onReport, userVotes, comments }) => {
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [isReported, setIsReported] = useState(false);
    
    const userVote = userVotes.find(vote => vote.postId === post.id);
    const postComments = comments.filter(comment => comment.postId === post.id);
    
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
    
    // Hide posts with score <= -5
    if (post.score <= -5) {
        return null;
    }
    
    return (
        <div className="mb-4 border border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm rounded-lg">
            <div className="p-6 pb-3">
                <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <div className="font-semibold text-slate-900">{post.author}</div>
                            <div className="text-sm text-slate-500 flex items-center space-x-2">
                                <span>{getTimeAgo(post.timestamp)}</span>
                                <span>•</span>
                                <span className="flex items-center">
                                    📍 {post.location.distance}mi
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleReport}
                        className={`text-xs px-2 py-1 rounded-md ${
                            isReported 
                                ? 'bg-red-50 text-red-700 hover:bg-red-100' 
                                : 'text-slate-500 hover:bg-slate-100'
                        } focus:outline-none focus:ring-2 focus:ring-blue-900`}
                        disabled={isReported}
                    >
                        {isReported ? '✓ Reported' : '🚩'}
                    </button>
                </div>
            </div>
            
            <div className="px-6 py-0">
                <p className="text-slate-800 leading-relaxed">{post.content}</p>
            </div>
            
            <div className="p-6 pt-4">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-1">
                        <button
                            onClick={() => handleVote('up')}
                            className={`h-8 px-3 rounded-md ${
                                userVote?.type === 'up' 
                                    ? 'bg-green-50 text-green-700 hover:bg-green-100' 
                                    : 'text-slate-600 hover:bg-slate-100'
                            } focus:outline-none focus:ring-2 focus:ring-blue-900`}
                        >
                            <span className="mr-1">⬆️</span>
                            <span className="text-sm font-medium">{post.upvotes}</span>
                        </button>
                        
                        <button
                            onClick={() => handleVote('down')}
                            className={`h-8 px-3 rounded-md ${
                                userVote?.type === 'down' 
                                    ? 'bg-red-50 text-red-700 hover:bg-red-100' 
                                    : 'text-slate-600 hover:bg-slate-100'
                            } focus:outline-none focus:ring-2 focus:ring-blue-900`}
                        >
                            <span className="mr-1">⬇️</span>
                            <span className="text-sm font-medium">{post.downvotes}</span>
                        </button>
                        
                        <div className={`px-3 py-1 text-sm font-semibold ${
                            post.score > 0 ? 'text-green-700' : 
                            post.score < 0 ? 'text-red-700' : 'text-slate-600'
                        }`}>
                            {post.score > 0 ? '+' : ''}{post.score}
                        </div>
                    </div>
                    
                    <button
                        onClick={() => setShowComments(!showComments)}
                        className="text-blue-900 hover:bg-blue-50 h-8 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                    >
                        <span className="mr-1">💬</span>
                        <span className="text-sm font-medium">{postComments.length}</span>
                    </button>
                </div>
                
                {showComments && (
                    <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
                        {postComments.map(comment => (
                            <div key={comment.id} className="bg-slate-50 p-3 rounded-lg">
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-6 h-6 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs font-medium">
                                        {comment.author.charAt(0)}
                                    </div>
                                    <span className="font-medium text-slate-900 text-sm">{comment.author}</span>
                                    <span className="text-xs text-slate-500">{getTimeAgo(comment.timestamp)}</span>
                                </div>
                                <p className="text-slate-700 text-sm">{comment.content}</p>
                            </div>
                        ))}
                        
                        <div className="flex space-x-2">
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Add a comment..."
                                className="flex-1 min-h-[60px] rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                                maxLength={200}
                            />
                            <button
                                onClick={handleComment}
                                disabled={!commentText.trim()}
                                className="self-end px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Post
                            </button>
                        </div>
                        <div className="text-xs text-slate-500">
                            {commentText.length}/200 characters
                        </div>
                    </div>
                )}
            </div>
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
    const [db, setDb] = useState(null);
    const [showUsernameSetup, setShowUsernameSetup] = useState(false);
    
    const textareaRef = useRef(null);
    
    // Check if user needs to set up username
    useEffect(() => {
        const userData = localStorage.getItem('hookr_user');
        if (!userData) {
            setShowUsernameSetup(true);
        } else {
            setUser(JSON.parse(userData));
        }
    }, []);
    
    // Initialize app
    useEffect(() => {
        if (!user) return;
        
        const initApp = async () => {
            // Initialize database
            try {
                const database = await initDB();
                setDb(database);
                await loadData(database, user.id);
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
    }, [user, selectedLocation]);
    
    // Handle username setup
    const handleUsernameSet = (username) => {
        const userData = getUserIdentity(username);
        setUser(userData);
        setShowUsernameSetup(false);
    };
    
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
            
            // Check for existing vote
            const existingVoteRequest = votesStore.index('postId').getAll(postId);
            const existingVotes = await new Promise((resolve, reject) => {
                existingVoteRequest.onsuccess = () => resolve(existingVoteRequest.result);
                existingVoteRequest.onerror = () => reject(existingVoteRequest.error);
            });
            
            const userVote = existingVotes.find(vote => vote.userId === user.id);
            
            if (userVote) {
                if (userVote.type === voteType) {
                    // Remove vote if same type
                    await new Promise((resolve, reject) => {
                        const deleteRequest = votesStore.delete(userVote.id);
                        deleteRequest.onsuccess = () => resolve();
                        deleteRequest.onerror = () => reject(deleteRequest.error);
                    });
                    
                    if (voteType === 'up') {
                        post.upvotes = Math.max(0, post.upvotes - 1);
                    } else {
                        post.downvotes = Math.max(0, post.downvotes - 1);
                    }
                } else {
                    // Change vote type
                    userVote.type = voteType;
                    await new Promise((resolve, reject) => {
                        const updateRequest = votesStore.put(userVote);
                        updateRequest.onsuccess = () => resolve();
                        updateRequest.onerror = () => reject(updateRequest.error);
                    });
                    
                    if (voteType === 'up') {
                        post.upvotes += 1;
                        post.downvotes = Math.max(0, post.downvotes - 1);
                    } else {
                        post.downvotes += 1;
                        post.upvotes = Math.max(0, post.upvotes - 1);
                    }
                }
            } else {
                // Add new vote
                const newVote = {
                    postId: postId,
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
                    post.upvotes += 1;
                } else {
                    post.downvotes += 1;
                }
            }
            
            // Update score
            post.score = post.upvotes - post.downvotes;
            
            // Update post in database
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
    
    // Handle commenting
    const handleComment = async (postId, content) => {
        if (!db || !user) return;
        
        const newComment = {
            postId: postId,
            content: content,
            author: user.screenName,
            authorId: user.id,
            timestamp: new Date().toISOString()
        };
        
        try {
            const transaction = db.transaction(['comments'], 'readwrite');
            const store = transaction.objectStore('comments');
            await new Promise((resolve, reject) => {
                const request = store.add(newComment);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
            
            await loadData(db, user.id);
        } catch (error) {
            console.error('Failed to comment:', error);
        }
    };
    
    // Handle reporting
    const handleReport = (postId) => {
        console.log('Post reported:', postId);
        // In a real app, this would send to moderation
    };
    
    const filteredPosts = getFilteredPosts();
    
    // Show username setup screen if needed
    if (showUsernameSetup) {
        return <UsernameSetup onUsernameSet={handleUsernameSet} />;
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <span className="text-3xl">🎣</span>
                                <div>
                                    <h1 className="text-xl font-bold text-slate-900">Hookr</h1>
                                    <p className="text-sm text-slate-600">Fishing Community</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="text-right">
                                    <div className="text-sm font-medium text-slate-900">{user?.screenName}</div>
                                    <div className="text-xs text-slate-500">
                                        {isOnline ? '🟢 Online' : '🔴 Offline'}
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                    {user?.screenName?.charAt(0)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Create Post */}
                <div className="m-4 border border-slate-200 bg-white/95 backdrop-blur-sm rounded-lg">
                    <div className="p-4">
                        <textarea
                            ref={textareaRef}
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            placeholder="What's biting today? Share your catch, spot, or tip..."
                            className="w-full min-h-[80px] rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                            maxLength={200}
                        />
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-sm text-slate-500">
                                {newPostContent.length}/200 characters
                            </span>
                            <button
                                onClick={handleCreatePost}
                                disabled={!newPostContent.trim() || !isOnline}
                                className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>🎣</span>
                                <span>Cast</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Posts Feed */}
                <div className="p-4">
                    {filteredPosts.length === 0 ? (
                        <div className="border border-slate-200 bg-white/95 backdrop-blur-sm rounded-lg">
                            <div className="p-8 text-center">
                                <span className="text-4xl mb-4 block">🎣</span>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">No casts in your area</h3>
                                <p className="text-sm text-slate-600">Be the first to share what's happening on the water!</p>
                            </div>
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
                <div className="p-4 text-center text-white/90 text-sm bg-blue-900/20 backdrop-blur-sm">
                    <p>🎣 Tight lines and good catches!</p>
                    <p className="text-xs mt-1 opacity-75">Anonymous • Location-based • Fishing community</p>
                </div>
            </div>
        </div>
    );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
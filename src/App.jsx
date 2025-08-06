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
    const adjectives = ['REEL', 'BIG', 'DEEP', 'LUCKY', 'MASTER', 'PRO', 'BASS', 'CATCH', 'FISHER', 'ANGLER'];
    const nouns = ['FISHER', 'CASTER', 'HUNTER', 'MASTER', 'CAPTAIN', 'ADMIRAL', 'SAILOR', 'KEEPER', 'LEGEND', 'HERO'];
    const numbers = Math.floor(Math.random() * 999) + 1;
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${adj}${noun}${numbers}`;
};

// Available colors for usernames (accessibility compliant)
const USERNAME_COLORS = [
    { name: 'Navy', value: '#1e3a8a', textClass: 'text-blue-800' },
    { name: 'Purple', value: '#7c3aed', textClass: 'text-purple-600' },
    { name: 'Green', value: '#059669', textClass: 'text-emerald-600' },
    { name: 'Orange', value: '#ea580c', textClass: 'text-orange-600' },
    { name: 'Red', value: '#dc2626', textClass: 'text-red-600' },
    { name: 'Teal', value: '#0d9488', textClass: 'text-teal-600' },
    { name: 'Pink', value: '#db2777', textClass: 'text-pink-600' },
    { name: 'Indigo', value: '#4338ca', textClass: 'text-indigo-600' }
];

// Get or create user identity
const getUserIdentity = (customUsername = null, selectedColor = null) => {
    let user = localStorage.getItem('hookr_user');
    if (!user || customUsername) {
        const defaultColor = USERNAME_COLORS[0]; // Navy as default
        user = {
            id: crypto.randomUUID(),
            screenName: customUsername || generateScreenName(),
            color: selectedColor || defaultColor,
            hasChangedName: !!customUsername,
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('hookr_user', JSON.stringify(user));
    } else {
        user = JSON.parse(user);
        // Ensure color exists for existing users
        if (!user.color) {
            user.color = USERNAME_COLORS[0];
            localStorage.setItem('hookr_user', JSON.stringify(user));
        }
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

// Convert zip code to approximate coordinates (basic US zip codes)
const getCoordinatesFromZip = async (zipCode) => {
    // This is a simple lookup for common US zip codes - in production you'd use a proper API
    const zipToCoords = {
        '10001': { lat: 40.7506, lng: -73.9972, name: 'New York, NY' },
        '90210': { lat: 34.0901, lng: -118.4065, name: 'Beverly Hills, CA' },
        '60601': { lat: 41.8825, lng: -87.6441, name: 'Chicago, IL' },
        '33101': { lat: 25.7743, lng: -80.1937, name: 'Miami, FL' },
        '78701': { lat: 30.2711, lng: -97.7436, name: 'Austin, TX' },
        '02101': { lat: 42.3583, lng: -71.0603, name: 'Boston, MA' },
        '98101': { lat: 47.6062, lng: -122.3321, name: 'Seattle, WA' },
        '30301': { lat: 33.7490, lng: -84.3880, name: 'Atlanta, GA' },
        '80201': { lat: 39.7392, lng: -104.9903, name: 'Denver, CO' },
        '19101': { lat: 39.9526, lng: -75.1652, name: 'Philadelphia, PA' }
    };
    
    return zipToCoords[zipCode] || null;
};

// Major city locations for quick selection
const PRESET_LOCATIONS = {
    seattle: { lat: 47.6062, lng: -122.3321, name: 'Seattle, WA' },
    miami: { lat: 25.7617, lng: -80.1918, name: 'Miami, FL' },
    chicago: { lat: 41.8781, lng: -87.6298, name: 'Chicago, IL' },
    denver: { lat: 39.7392, lng: -104.9903, name: 'Denver, CO' },
    nyc: { lat: 40.7128, lng: -74.0060, name: 'New York, NY' },
    la: { lat: 34.0522, lng: -118.2437, name: 'Los Angeles, CA' },
    austin: { lat: 30.2672, lng: -97.7431, name: 'Austin, TX' },
    boston: { lat: 42.3601, lng: -71.0589, name: 'Boston, MA' }
};

// Get approximate location name from coordinates
const getApproximateLocation = (lat, lng) => {
    // Find the closest major city for general area identification
    let closestLocation = null;
    let closestDistance = Infinity;
    
    Object.entries(PRESET_LOCATIONS).forEach(([key, location]) => {
        const distance = calculateDistance(lat, lng, location.lat, location.lng);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestLocation = location;
        }
    });
    
    if (!closestLocation) return 'Unknown Area';
    
    // If very close to a major city (within 25 miles), use the city name
    if (closestDistance <= 25) {
        return closestLocation.name;
    } else {
        return `${Math.round(closestDistance)} miles from ${closestLocation.name}`;
    }
};

// ASCII Art for fishing
const FISHING_ASCII = `
    o                 o
     \\               /
      \\             /
  ~~~~~~\\~~~~~~~~~~~/~~~~~~
         \\         /
          \\       /
           \\     /
            \\   /
             \\_/
              |
         ____/ \\____
        /           \\
       |    HOOKR    |
        \\___________/
`;

// Username Setup Component
const UsernameSetup = ({ onUsernameSet }) => {
    const [username, setUsername] = useState(generateScreenName());
    const [selectedColor, setSelectedColor] = useState(USERNAME_COLORS[0]);

    const handleContinue = () => {
        if (username.trim().length < 3) {
            alert('Username must be at least 3 characters');
            return;
        }
        if (username.trim().length > 20) {
            alert('Username must be 20 characters or less');
            return;
        }
        onUsernameSet(username.trim().toUpperCase(), selectedColor);
    };

    const generateNew = () => {
        setUsername(generateScreenName());
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 terminal-text">
            <div className="w-full max-w-md mx-auto terminal-card p-6">
                <div className="text-center space-y-4">
                    <div className="ascii-art text-xs terminal-accent">{FISHING_ASCII}</div>
                    <div className="text-xl font-bold terminal-text">
                        Welcome to Hookr
                    </div>
                    <div className="text-sm terminal-text">
                        Choose your angler name to get started
                    </div>
                </div>
                
                <div className="space-y-4 mt-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Your angler name:
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value.toUpperCase())}
                            placeholder="Enter username"
                            className="w-full h-10 px-3 py-2 terminal-input text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy-700"
                            maxLength={20}
                        />
                        <div className="text-xs terminal-accent">
                            {username.length}/20 characters
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Choose your color:
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                            {USERNAME_COLORS.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color)}
                                    className={`h-10 rounded border-2 ${
                                        selectedColor.name === color.name 
                                            ? 'border-navy-700 ring-2 ring-navy-300' 
                                            : 'border-gray-300 hover:border-gray-400'
                                    } focus:outline-none focus:ring-2 focus:ring-navy-700`}
                                    style={{ backgroundColor: color.value }}
                                    title={color.name}
                                />
                            ))}
                        </div>
                        <div className="text-xs terminal-accent">
                            Preview: <span className={selectedColor.textClass} style={{ fontWeight: 'bold' }}>{username}</span>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-3 text-xs terminal-text">
                        ⚠️ <strong>Note:</strong> You cannot change your username or color after creating your account. Choose carefully!
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={generateNew}
                            className="h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700"
                        >
                            Generate New
                        </button>
                        <button 
                            onClick={handleContinue}
                            disabled={!username.trim() || username.trim().length < 3}
                            className="h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled"
                        >
                            Start Fishing
                        </button>
                    </div>

                    <div className="text-center text-xs terminal-text mt-4 space-y-1">
                        <div>• Anonymous fishing community</div>
                        <div>• Location-based posts</div>
                        <div>• Share catches, spots, and tips</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Location Selection Modal Component
const LocationSelectionModal = ({ isOpen, onClose, onLocationSet, currentLocation }) => {
    const [zipCode, setZipCode] = useState('');
    const [selectedPreset, setSelectedPreset] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const presetLocations = [
        { id: 'current', name: 'Use Current Location', coords: null },
        ...Object.entries(PRESET_LOCATIONS).map(([key, location]) => ({
            id: key,
            name: location.name,
            coords: location
        }))
    ];

    const handleZipCodeSubmit = async () => {
        if (!zipCode.trim()) return;
        
        setIsLoading(true);
        const coords = await getCoordinatesFromZip(zipCode.trim());
        setIsLoading(false);
        
        if (coords) {
            onLocationSet(coords);
            onClose();
        } else {
            alert('Zip code not found. Please try a different zip code or select a preset location.');
        }
    };

    const handlePresetSelect = (location) => {
        if (location.id === 'current') {
            onLocationSet(null); // null means use current GPS location
        } else {
            onLocationSet(location.coords);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-md terminal-card p-6">
                <div className="text-center mb-4">
                    <div className="text-lg font-bold terminal-text">
                        Set Location
                    </div>
                    <div className="text-xs terminal-accent mt-1">
                        Choose where to view fishing posts
                    </div>
                </div>
                
                <div className="space-y-4">
                    {/* Zip Code Input */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Enter Zip Code:
                        </label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                                placeholder="12345"
                                className="flex-1 h-10 px-3 py-2 terminal-input text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy-700"
                                maxLength={5}
                            />
                            <button 
                                onClick={handleZipCodeSubmit}
                                disabled={zipCode.length !== 5 || isLoading}
                                className="px-4 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled"
                            >
                                {isLoading ? '...' : 'Go'}
                            </button>
                        </div>
                    </div>

                    <div className="text-center text-xs terminal-accent">or</div>

                    {/* Preset Locations */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Quick Select:
                        </label>
                        <div className="space-y-1">
                            {presetLocations.map((location) => (
                                <button
                                    key={location.id}
                                    onClick={() => handlePresetSelect(location)}
                                    className="w-full text-left px-3 py-2 text-sm hover:bg-navy-50 border border-gray-300 hover:border-navy-300 focus:outline-none focus:ring-2 focus:ring-navy-700"
                                >
                                    {location.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            onClick={onClose}
                            className="w-full h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Post Creation Modal Component
const PostCreationModal = ({ isOpen, onClose, onSubmit, newPostContent, setNewPostContent, isOnline }) => {
    if (!isOpen) return null;

    const handleSubmit = () => {
        if (newPostContent.trim()) {
            onSubmit();
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-md terminal-card p-6">
                
                <div className="space-y-4">
                    <div className="space-y-2">
                        <textarea
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            placeholder="What's biting today? Share your catch, spot, or tip..."
                            className="w-full h-24 px-3 py-2 terminal-input text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-navy-700"
                            maxLength={200}
                            autoFocus
                        />
                        <div className="text-xs terminal-accent">
                            {newPostContent.length}/200 characters
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={onClose}
                            className="h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleSubmit}
                            disabled={!newPostContent.trim() || !isOnline}
                            className="h-10 px-3 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};



// Post Component with terminal styling
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
        
        if (diff < 60) return 'NOW';
        if (diff < 3600) return `${Math.floor(diff / 60)}M`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}H`;
        return `${Math.floor(diff / 86400)}D`;
    };
    
    // Hide posts with score <= -5
    if (post.score <= -5) {
        return null;
    }
    
    return (
        <div className="py-4 border-b border-gray-300 last:border-b-0">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-navy-700 text-white flex items-center justify-center text-xs font-bold">
                    {post.author.charAt(0)}
                </div>
                    <div>
                        <div className="font-bold text-sm" style={{ color: post.authorColor?.value || '#1e3a8a' }}>
                            {post.author}
                        </div>
                        <div className="text-xs terminal-accent">
                            {getTimeAgo(post.timestamp)} • {post.location.distance}mi away
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleReport}
                    className={`text-xs px-2 py-1 ${
                        isReported 
                            ? 'text-gray-500' 
                            : 'text-red-600 hover:text-red-700'
                    } focus:outline-none`}
                    disabled={isReported}
                >
                    {isReported ? '✓' : '🚩'}
                </button>
            </div>
            
            <div className="mb-3 p-3 bg-white border-2 border-navy-700">
                <div className="terminal-text text-sm font-mono">{post.content}</div>
            </div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handleVote('up')}
                        className={`px-2 py-1 text-sm ${
                            userVote?.type === 'up' 
                                ? 'text-green-600 font-bold' 
                                : 'text-gray-600 hover:text-green-600'
                        } focus:outline-none`}
                    >
                        ▲ {post.upvotes}
                    </button>
                    
                    <button
                        onClick={() => handleVote('down')}
                        className={`px-2 py-1 text-sm ${
                            userVote?.type === 'down' 
                                ? 'text-red-600 font-bold' 
                                : 'text-gray-600 hover:text-red-600'
                        } focus:outline-none`}
                    >
                        ▼ {post.downvotes}
                    </button>
                    
                    <div className={`px-2 py-1 text-xs font-bold ${
                        post.score > 0 ? 'text-green-600' : 
                        post.score < 0 ? 'text-red-600' : 'text-gray-600'
                    }`}>
                        {post.score > 0 ? '+' : ''}{post.score}
                    </div>
                </div>
                
                <button
                    onClick={() => setShowComments(!showComments)}
                    className="px-2 py-1 text-sm text-gray-600 hover:text-navy-700 focus:outline-none"
                >
                    💬 {postComments.length}
                </button>
            </div>
            
            {showComments && (
                <div className="mt-4 space-y-3 border-t-2 border-navy-700 pt-4">
                    {postComments.map(comment => (
                        <div key={comment.id} className="bg-gray-100 border-2 border-navy-700 p-2">
                            <div className="flex items-center space-x-2 mb-1">
                                <div className="w-4 h-4 bg-navy-700 text-white flex items-center justify-center text-xs font-bold">
                                    {comment.author.charAt(0)}
                                </div>
                                <span className="font-bold text-xs" style={{ color: comment.authorColor?.value || '#1e3a8a' }}>
                                    {comment.author}
                                </span>
                                <span className="text-xs terminal-accent">{getTimeAgo(comment.timestamp)}</span>
                            </div>
                            <div className="terminal-text text-xs font-mono pl-6">{comment.content}</div>
                        </div>
                    ))}
                    
                    <div className="flex space-x-2">
                        <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Add a comment..."
                            className="flex-1 h-16 px-2 py-1 terminal-input text-xs font-mono focus:outline-none focus:ring-2 focus:ring-navy-700 resize-none"
                            maxLength={200}
                        />
                        <button
                            onClick={handleComment}
                            disabled={!commentText.trim()}
                            className="px-3 py-1 terminal-button text-xs font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:terminal-button:disabled"
                        >
                            Send
                        </button>
                    </div>
                    <div className="text-xs terminal-accent">
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

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [db, setDb] = useState(null);
    const [showUsernameSetup, setShowUsernameSetup] = useState(false);

    const [sortBy, setSortBy] = useState('hot'); // 'hot' or 'new'
    const [currentLocationName, setCurrentLocationName] = useState('');
    const [showPostModal, setShowPostModal] = useState(false);
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [zipCodeInput, setZipCodeInput] = useState('');
    const [customLocation, setCustomLocation] = useState(null);
    
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
            
            // Get user location with enhanced GPS functionality
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        setUserLocation({ lat, lng });
                        setCurrentLocationName(getApproximateLocation(lat, lng));
                        console.log('GPS location acquired:', { lat, lng });
                    },
                    (error) => {
                        console.error('GPS location failed:', error.message);
                        // Fallback to a default location (Seattle) if GPS fails
                        const fallbackLocation = PRESET_LOCATIONS.seattle;
                        setUserLocation(fallbackLocation);
                        setCurrentLocationName(`${fallbackLocation.name} (Default)`);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 300000 // 5 minutes cache
                    }
                );
            } else {
                console.warn('Geolocation not supported');
                // Fallback to a default location
                const fallbackLocation = PRESET_LOCATIONS.seattle;
                setUserLocation(fallbackLocation);
                setCurrentLocationName(`${fallbackLocation.name} (Default)`);
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
    }, [user]);
    
    // Handle username setup
    const handleUsernameSet = (username, color) => {
        const userData = getUserIdentity(username, color);
        setUser(userData);
        setShowUsernameSetup(false);
    };
    
    // Handle location change
    const handleLocationSet = async (newLocation) => {
        if (!newLocation) {
            // Use current GPS location
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const coords = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        setUserLocation(coords);
                        setCustomLocation(null);
                        const locationName = getApproximateLocation(coords.lat, coords.lng);
                        setCurrentLocationName(locationName);
                    },
                    () => {
                        console.error('Failed to get current location');
                        setCustomLocation(null);
                    }
                );
            }
        } else {
            // Use custom location
            setUserLocation(newLocation);
            setCustomLocation(newLocation);
            setCurrentLocationName(newLocation.name);
        }
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
    
    // Filter and sort posts by location and criteria
    const getFilteredPosts = () => {
        if (!userLocation) return posts;
        
        // Use custom location if set, otherwise use GPS location
        const effectiveLocation = customLocation || userLocation;
        
        let filteredPosts = posts.filter(post => {
            if (post.location.lat && post.location.lng) {
                const distance = calculateDistance(
                    effectiveLocation.lat, effectiveLocation.lng,
                    post.location.lat, post.location.lng
                );
                return distance <= 10;
            }
            return true;
        });
        
        // Add distance calculation
        filteredPosts = filteredPosts.map(post => ({
            ...post,
            location: {
                ...post.location,
                distance: Math.round(calculateDistance(effectiveLocation?.lat || 0, effectiveLocation?.lng || 0, post.location.lat, post.location.lng) * 10) / 10
            }
        }));
        
        // Sort by criteria
        if (sortBy === 'hot') {
            // Hot algorithm: score + comment count + recency factor
            filteredPosts.sort((a, b) => {
                const aComments = comments.filter(c => c.postId === a.id).length;
                const bComments = comments.filter(c => c.postId === b.id).length;
                const aAge = (Date.now() - new Date(a.timestamp)) / (1000 * 60 * 60); // hours
                const bAge = (Date.now() - new Date(b.timestamp)) / (1000 * 60 * 60); // hours
                
                const aHotScore = a.score + aComments * 2 - aAge * 0.1;
                const bHotScore = b.score + bComments * 2 - bAge * 0.1;
                
                return bHotScore - aHotScore;
            });
        } else {
            // New: sort by timestamp
            filteredPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        }
        
        return filteredPosts;
    };
    
    // Create new post
    const handleCreatePost = async () => {
        if (!newPostContent.trim() || !db || !user || !userLocation) return;
        
        const newPost = {
            content: newPostContent.trim(),
            author: user.screenName,
            authorId: user.id,
            authorColor: user.color,
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
            authorColor: user.color,
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
        <div className="min-h-screen bg-gray-50 terminal-text">
            {/* Location Selection Modal */}
            <LocationSelectionModal
                isOpen={showLocationModal}
                onClose={() => setShowLocationModal(false)}
                onLocationSet={handleLocationSet}
                currentLocation={userLocation}
            />

            {/* Post Creation Modal */}
            <PostCreationModal
                isOpen={showPostModal}
                onClose={() => setShowPostModal(false)}
                onSubmit={handleCreatePost}
                newPostContent={newPostContent}
                setNewPostContent={setNewPostContent}
                isOnline={isOnline}
            />



            {/* Floating Action Button */}
            <button
                onClick={() => setShowPostModal(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-navy-700 text-white rounded-full shadow-lg hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-300 flex items-center justify-center text-2xl z-40"
                title="Create new post"
            >
                +
            </button>
            
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="terminal-header sticky top-0 z-40 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🎣</span>
                            <div>
                                <div className="text-lg font-bold">Hookr</div>
                                <div className="text-xs">Fishing Community</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div 
                                className="text-sm font-bold px-2 py-1"
                                style={{ color: user?.color?.value || '#1e3a8a' }}
                            >
                                {user?.screenName}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Location Info & Sort Categories */}
                <div className="p-4 space-y-4">
                    {/* Location Display */}
                    <button 
                        onClick={() => setShowLocationModal(true)}
                        className="p-3 w-full text-left hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-300"
                    >
                        <div className="text-sm font-bold terminal-text mb-1">📍 Local Area:</div>
                        <div className="text-xs terminal-accent">
                            {currentLocationName} • 10 mile radius
                        </div>
                        <div className="text-xs text-navy-600 mt-1">
                            Click to change location
                        </div>
                    </button>
                    
                    {/* Sort Categories */}
                    <div className="terminal-card p-3">
                        <div className="text-sm font-bold terminal-text mb-2">Sort by:</div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setSortBy('hot')}
                                className={`px-4 py-2 text-sm font-bold border-2 ${
                                    sortBy === 'hot' 
                                        ? 'terminal-button' 
                                        : 'border-navy-600 bg-white text-navy-600 hover:bg-navy-50'
                                } focus:outline-none focus:ring-2 focus:ring-navy-600`}
                            >
                                🔥 Hot
                            </button>
                            <button
                                onClick={() => setSortBy('new')}
                                className={`px-4 py-2 text-sm font-bold border-2 ${
                                    sortBy === 'new' 
                                        ? 'terminal-button' 
                                        : 'border-navy-600 bg-white text-navy-600 hover:bg-navy-50'
                                } focus:outline-none focus:ring-2 focus:ring-navy-600`}
                            >
                                ⭐ New
                            </button>
                        </div>
                    </div>
                </div>
                

                
                {/* Posts Feed */}
                <div className="p-4">
                    {filteredPosts.length === 0 ? (
                        <div className="p-8 text-center">
                            <div className="text-4xl mb-4">🎣</div>
                            <div className="text-sm font-bold terminal-text mb-2">
                                No posts in your area
                            </div>
                            <div className="text-xs terminal-accent">
                                Be the first to share what's happening on the water!
                            </div>
                        </div>
                    ) : (
                        filteredPosts.map(post => (
                            <Post
                                key={post.id}
                                post={post}
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
                <div className="p-4 text-center text-xs terminal-accent bg-gray-100 border-t-2 border-navy-700">
                    <div>🎣 Tight lines and good catches!</div>
                    <div>Anonymous • Location-based • Fishing community</div>
                </div>
            </div>
        </div>
    );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
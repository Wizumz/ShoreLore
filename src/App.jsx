const { useState, useEffect, useRef } = React;

// Northeast Striped Bass Fishing Locations
const STRIPED_BASS_LOCATIONS = {
    'montauk-point-ny': { lat: 41.0362, lng: -71.8562, name: 'Montauk Point, NY', state: 'NY' },
    'cape-cod-ma': { lat: 41.6688, lng: -70.2962, name: 'Cape Cod, MA', state: 'MA' },
    'block-island-ri': { lat: 41.1775, lng: -71.5773, name: 'Block Island, RI', state: 'RI' },
    'chesapeake-bay-md': { lat: 38.9784, lng: -76.4951, name: 'Chesapeake Bay, MD', state: 'MD' },
    'sandy-hook-nj': { lat: 40.4168, lng: -74.0018, name: 'Sandy Hook, NJ', state: 'NJ' },
    'orient-point-ny': { lat: 41.1615, lng: -72.2351, name: 'Orient Point, NY', state: 'NY' },
    'race-point-ma': { lat: 42.0654, lng: -70.2457, name: 'Race Point, MA', state: 'MA' },
    'watch-hill-ri': { lat: 41.3079, lng: -71.8565, name: 'Watch Hill, RI', state: 'RI' },
    'martha-vineyard-ma': { lat: 41.3888, lng: -70.6420, name: 'Martha\'s Vineyard, MA', state: 'MA' },
    'nantucket-ma': { lat: 41.2835, lng: -70.0995, name: 'Nantucket, MA', state: 'MA' },
    'long-island-sound-ct': { lat: 41.1015, lng: -72.6732, name: 'Long Island Sound, CT', state: 'CT' },
    'rhode-island-sound-ri': { lat: 41.4221, lng: -71.4774, name: 'Rhode Island Sound, RI', state: 'RI' },
    'buzzards-bay-ma': { lat: 41.5389, lng: -70.9481, name: 'Buzzards Bay, MA', state: 'MA' },
    'delaware-bay-de': { lat: 38.9108, lng: -75.1818, name: 'Delaware Bay, DE', state: 'DE' },
    'hudson-river-ny': { lat: 41.7658, lng: -73.9776, name: 'Hudson River, NY', state: 'NY' }
};

// Device persistence solutions
const DEVICE_PERSISTENCE_OPTIONS = [
    {
        name: 'Browser Fingerprinting',
        description: 'Generate unique ID from device characteristics (screen, timezone, language, etc.)',
        reliability: 'Medium - Can survive cache clearing but not incognito mode',
        implementation: 'Use canvas fingerprinting, WebGL, audio context fingerprinting'
    },
    {
        name: 'QR Code Account Recovery',
        description: 'Generate QR code containing encrypted account data for backup',
        reliability: 'High - User controls backup and can restore on any device',
        implementation: 'Export account as QR code, user saves/screenshots, can scan to restore'
    },
    {
        name: 'Email Backup Code',
        description: 'Send backup code to email without requiring login',
        reliability: 'High - Works across devices and survives cache clearing',
        implementation: 'User provides email, receive code, enter code to restore account'
    },
    {
        name: 'Local Network Storage',
        description: 'Store backup on local network device or browser sync',
        reliability: 'Medium - Works if user has consistent network/browser',
        implementation: 'Use IndexedDB with browser sync or local network storage'
    }
];

// Fishy Score Tiers and Icons
const FISHY_TIERS = [
    { min: 0, max: 49, name: 'Minnow', icon: '🐟', color: '#6b7280' },
    { min: 50, max: 99, name: 'Bass', icon: '🐠', color: '#059669' },
    { min: 100, max: 199, name: 'Salmon', icon: '🎣', color: '#dc2626' },
    { min: 200, max: 399, name: 'Shark', icon: '🦈', color: '#7c3aed' },
    { min: 400, max: 799, name: 'Whale', icon: '🐋', color: '#ea580c' },
    { min: 800, max: Infinity, name: 'Kraken', icon: '🐙', color: '#1e3a8a' }
];

// Calculate Fishy Score
const calculateFishyScore = (posts, userVotes, comments) => {
    const userPosts = posts || [];
    const userComments = comments || [];
    
    // Base points for activity
    let score = 0;
    score += userPosts.length * 10; // 10 points per post
    score += userComments.length * 5; // 5 points per comment
    
    // Bonus points for upvotes
    userPosts.forEach(post => {
        score += (post.upvotes || 0) * 3; // 3 points per upvote
        score -= (post.downvotes || 0) * 1; // -1 point per downvote
    });
    
    // Bonus for engagement (posts with comments)
    const postsWithComments = userPosts.filter(post => 
        userComments.some(comment => comment.postId === post.id)
    );
    score += postsWithComments.length * 5; // 5 bonus points for engaging posts
    
    return Math.max(0, score); // Never negative
};

// Get Fishy Tier from Score
const getFishyTier = (score) => {
    return FISHY_TIERS.find(tier => score >= tier.min && score <= tier.max) || FISHY_TIERS[0];
};

// Popular US Cities for autocomplete (focusing on Northeast)
const US_CITIES = [
    { name: 'Boston', state: 'MA', lat: 42.3601, lng: -71.0589 },
    { name: 'New York City', state: 'NY', lat: 40.7128, lng: -74.0060 },
    { name: 'Providence', state: 'RI', lat: 41.8240, lng: -71.4128 },
    { name: 'Hartford', state: 'CT', lat: 41.7658, lng: -72.6734 },
    { name: 'Portland', state: 'ME', lat: 43.6591, lng: -70.2568 },
    { name: 'Burlington', state: 'VT', lat: 44.4759, lng: -73.2121 },
    { name: 'Manchester', state: 'NH', lat: 42.9956, lng: -71.4548 },
    { name: 'Baltimore', state: 'MD', lat: 39.2904, lng: -76.6122 },
    { name: 'Washington', state: 'DC', lat: 38.9072, lng: -77.0369 },
    { name: 'Philadelphia', state: 'PA', lat: 39.9526, lng: -75.1652 },
    { name: 'Atlantic City', state: 'NJ', lat: 39.3643, lng: -74.4229 },
    { name: 'Dover', state: 'DE', lat: 39.1612, lng: -75.5264 },
    { name: 'Albany', state: 'NY', lat: 42.6526, lng: -73.7562 },
    { name: 'Buffalo', state: 'NY', lat: 42.8864, lng: -78.8784 },
    { name: 'Rochester', state: 'NY', lat: 43.1566, lng: -77.6088 },
    { name: 'Bridgeport', state: 'CT', lat: 41.1865, lng: -73.1952 },
    { name: 'New Haven', state: 'CT', lat: 41.3083, lng: -72.9279 },
    { name: 'Worcester', state: 'MA', lat: 42.2626, lng: -71.8023 },
    { name: 'Springfield', state: 'MA', lat: 42.1015, lng: -72.5898 },
    { name: 'Newport', state: 'RI', lat: 41.4901, lng: -71.3128 }
];

// Function to search cities
const searchCities = (query) => {
    if (!query || query.length < 2) return [];
    const lowercaseQuery = query.toLowerCase();
    return US_CITIES.filter(city => 
        city.name.toLowerCase().includes(lowercaseQuery) || 
        city.state.toLowerCase().includes(lowercaseQuery) ||
        `${city.name}, ${city.state}`.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 10);
};

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





// Get approximate location name from coordinates
const getApproximateLocation = (lat, lng) => {
    // Find the closest major city for general area identification
    let closestLocation = null;
    let closestDistance = Infinity;
    
    Object.entries(STRIPED_BASS_LOCATIONS).forEach(([key, location]) => {
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

// Account Modal Component  
const AccountModal = ({ isOpen, onClose, user, userStats }) => {
    if (!isOpen) return null;

    const fishyTier = getFishyTier(userStats.fishyScore);

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-md terminal-card p-6 max-h-[80vh] overflow-y-auto">
                <div className="text-center mb-4">
                    <div className="text-lg font-bold terminal-text">
                        My Account
                    </div>
                    <div className="text-xs terminal-accent mt-1">
                        Device-based account
                    </div>
                </div>
                
                <div className="space-y-4">
                    {/* Fishy Score Display */}
                    <div className="bg-navy-50 p-4 rounded border">
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-bold terminal-text">Fishy Score</div>
                            <div className="flex items-center space-x-2">
                                <span style={{ color: fishyTier.color, fontSize: '20px' }}>{fishyTier.icon}</span>
                                <span className="text-sm font-bold" style={{ color: fishyTier.color }}>
                                    {fishyTier.name}
                                </span>
                            </div>
                        </div>
                        <div className="text-2xl font-bold terminal-text">{userStats.fishyScore}</div>
                        <div className="text-xs terminal-accent mt-1">
                            Based on posts, votes, and engagement
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded text-center">
                            <div className="text-lg font-bold terminal-text">{userStats.posts.length}</div>
                            <div className="text-xs terminal-accent">Posts</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded text-center">
                            <div className="text-lg font-bold terminal-text">{userStats.comments.length}</div>
                            <div className="text-xs terminal-accent">Comments</div>
                        </div>
                    </div>

                    {/* Recent Posts */}
                    <div className="space-y-2">
                        <div className="text-sm font-bold terminal-text">Recent Posts</div>
                        <div className="max-h-40 overflow-y-auto space-y-2">
                            {userStats.posts.slice(0, 5).map((post, index) => (
                                <div key={index} className="bg-gray-50 p-2 rounded text-xs">
                                    <div className="font-mono">{post.content}</div>
                                    <div className="text-gray-500 mt-1">
                                        ▲ {post.upvotes || 0} ▼ {post.downvotes || 0}
                                    </div>
                                </div>
                            ))}
                            {userStats.posts.length === 0 && (
                                <div className="text-xs terminal-accent text-center py-4">
                                    No posts yet. Start sharing your catches!
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Device Persistence Info */}
                    <div className="bg-yellow-50 border border-yellow-200 p-3 text-xs">
                        <div className="font-bold text-yellow-800 mb-2">Account Persistence</div>
                        <div className="text-yellow-700 space-y-1">
                            <div>• Account saved to this device</div>
                            <div>• Clear cache = lose account</div>
                            <div>• Different device = new account</div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            onClick={onClose}
                            className="w-full h-10 px-3 py-2 border-2 border-navy-700 bg-white text-navy-700 text-sm font-bold hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Location Selection Modal Component
const LocationSelectionModal = ({ isOpen, onClose, onLocationSet, currentLocation, currentRadius, onRadiusChange }) => {
    const [cityInput, setCityInput] = useState('');
    const [selectedPreset, setSelectedPreset] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    if (!isOpen) return null;

    // Handle city input change with autocomplete
    const handleCityInputChange = (value) => {
        setCityInput(value);
        if (value.length >= 2) {
            const results = searchCities(value);
            setSearchResults(results);
            setShowSuggestions(results.length > 0);
        } else {
            setSearchResults([]);
            setShowSuggestions(false);
        }
    };

    // Handle city selection from autocomplete
    const handleCitySelect = (city) => {
        setCityInput(`${city.name}, ${city.state}`);
        setSearchResults([]);
        setShowSuggestions(false);
        onLocationSet({
            lat: city.lat,
            lng: city.lng,
            name: `${city.name}, ${city.state}`
        });
        onClose();
    };

    // Handle manual city input submission
    const handleCitySubmit = () => {
        if (!cityInput.trim()) {
            alert('Please enter a city name');
            return;
        }

        // Try to find exact match in search results
        const exactMatch = US_CITIES.find(city => 
            `${city.name}, ${city.state}`.toLowerCase() === cityInput.toLowerCase() ||
            city.name.toLowerCase() === cityInput.toLowerCase()
        );

        if (exactMatch) {
            onLocationSet({
                lat: exactMatch.lat,
                lng: exactMatch.lng,
                name: `${exactMatch.name}, ${exactMatch.state}`
            });
            onClose();
        } else {
            alert('City not found. Please select from autocomplete suggestions or choose a fishing location.');
        }
    };

    const stripedBassLocations = [
        { id: 'current', name: 'Use Current Location', coords: null },
        ...Object.entries(STRIPED_BASS_LOCATIONS).map(([key, location]) => ({
            id: key,
            name: location.name,
            coords: location
        }))
    ];



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
                    {/* Radius Selection */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Search Radius: {currentRadius} miles
                        </label>
                        <input
                            type="range"
                            min="5"
                            max="100"
                            step="5"
                            value={currentRadius}
                            onChange={(e) => onRadiusChange(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs terminal-accent">
                            <span>5 mi</span>
                            <span>100 mi</span>
                        </div>
                    </div>

                    <div className="text-center text-xs terminal-accent">Select a location:</div>

                    {/* City/State Input with Autocomplete */}
                    <div className="space-y-2 relative">
                        <label className="text-sm font-bold terminal-text block">
                            Enter City, State:
                        </label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={cityInput}
                                onChange={(e) => handleCityInputChange(e.target.value)}
                                placeholder="Boston, MA"
                                className="flex-1 h-10 px-3 py-2 terminal-input text-sm focus:outline-none focus:ring-2 focus:ring-navy-700"
                                onFocus={() => cityInput.length >= 2 && setShowSuggestions(searchResults.length > 0)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                onKeyPress={(e) => e.key === 'Enter' && handleCitySubmit()}
                            />
                            <button 
                                onClick={handleCitySubmit}
                                disabled={!cityInput.trim()}
                                className="px-4 py-2 terminal-button text-sm font-bold hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-700 disabled:opacity-50"
                            >
                                Set
                            </button>
                        </div>
                        
                        {/* Autocomplete Suggestions */}
                        {showSuggestions && searchResults.length > 0 && (
                            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
                                {searchResults.map((city, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCitySelect(city)}
                                        className="w-full text-left px-3 py-2 text-sm hover:bg-navy-50 border-b border-gray-100 last:border-b-0"
                                    >
                                        {city.name}, {city.state}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="text-center text-xs terminal-accent">or choose a fishing hotspot:</div>

                    {/* Striped Bass Fishing Locations */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold terminal-text block">
                            Northeast Striped Bass Locations:
                        </label>
                        <div className="space-y-1 max-h-40 overflow-y-auto">
                            {stripedBassLocations.map((location) => (
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
                        <div className="flex items-center space-x-2">
                            <div className="font-bold text-sm" style={{ color: post.authorColor?.value || '#1e3a8a' }}>
                                {post.author}
                            </div>
                            {post.authorFishyScore !== undefined && (
                                <div className="flex items-center space-x-1">
                                    <span style={{ fontSize: '14px', color: getFishyTier(post.authorFishyScore).color }}>
                                        {getFishyTier(post.authorFishyScore).icon}
                                    </span>
                                    <span className="text-xs font-bold" style={{ color: getFishyTier(post.authorFishyScore).color }}>
                                        {post.authorFishyScore}
                                    </span>
                                </div>
                            )}
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

    const [customLocation, setCustomLocation] = useState(null);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [locationRadius, setLocationRadius] = useState(10);
    const [userStats, setUserStats] = useState({ posts: [], comments: [], fishyScore: 0 });
    
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
                        // Fallback to a default location (Cape Cod) if GPS fails
                        const fallbackLocation = STRIPED_BASS_LOCATIONS['cape-cod-ma'];
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
                const fallbackLocation = STRIPED_BASS_LOCATIONS['cape-cod-ma'];
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

    // Recalculate user stats when data changes
    useEffect(() => {
        if (user && posts && comments) {
            calculateUserStats();
        }
    }, [posts, comments, user, userVotes]);
    
    // Handle username setup
    const handleUsernameSet = (username, color) => {
        const userData = getUserIdentity(username, color);
        setUser(userData);
        setShowUsernameSetup(false);
    };



    // Calculate user statistics
    const calculateUserStats = () => {
        if (!user || !posts || !comments) return;
        
        const userPosts = posts.filter(post => post.authorId === user.id);
        const userComments = comments.filter(comment => comment.authorId === user.id);
        const fishyScore = calculateFishyScore(userPosts, userVotes, userComments);
        
        setUserStats({ posts: userPosts, comments: userComments, fishyScore });
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
                return distance <= locationRadius;
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
            authorFishyScore: userStats.fishyScore,
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
        <div className="min-h-screen bg-gray-50 terminal-text overflow-x-hidden">
            {/* Account Modal */}
            <AccountModal
                isOpen={showAccountModal}
                onClose={() => setShowAccountModal(false)}
                user={user}
                userStats={userStats}
            />

            {/* Location Selection Modal */}
            <LocationSelectionModal
                isOpen={showLocationModal}
                onClose={() => setShowLocationModal(false)}
                onLocationSet={handleLocationSet}
                currentLocation={userLocation}
                currentRadius={locationRadius}
                onRadiusChange={setLocationRadius}
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
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-navy-700 text-white rounded-full shadow-lg hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-300 flex items-center justify-center text-xl sm:text-2xl z-40"
                style={{ maxWidth: 'calc(100vw - 2rem)' }}
                title="Create new post"
            >
                +
            </button>
            
            <div className="max-w-2xl mx-auto px-2 sm:px-0">
                {/* Header */}
                <div className="terminal-header sticky top-0 z-40 p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl sm:text-2xl">🎣</span>
                            <div>
                                <div className="text-base sm:text-lg font-bold">Hookr</div>
                                <div className="text-xs hidden sm:block">Fishing Community</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <button
                                onClick={() => setShowAccountModal(true)}
                                className="flex items-center space-x-1 text-xs sm:text-sm font-bold px-2 py-1 hover:bg-navy-50 rounded focus:outline-none focus:ring-2 focus:ring-navy-300"
                                style={{ color: user?.color?.value || '#1e3a8a' }}
                            >
                                <span>{user?.screenName}</span>
                                {userStats.fishyScore > 0 && (
                                    <div className="flex items-center space-x-1">
                                        <span style={{ fontSize: '12px', color: getFishyTier(userStats.fishyScore).color }}>
                                            {getFishyTier(userStats.fishyScore).icon}
                                        </span>
                                        <span className="text-xs font-bold" style={{ color: getFishyTier(userStats.fishyScore).color }}>
                                            {userStats.fishyScore}
                                        </span>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Location Info & Sort Categories */}
                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    {/* Location Display */}
                    <button 
                        onClick={() => setShowLocationModal(true)}
                        className="p-3 w-full text-left hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-navy-300 rounded"
                    >
                        <div className="text-sm font-bold terminal-text mb-1">📍 Local Area:</div>
                        <div className="text-xs terminal-accent">
                            {currentLocationName} • {locationRadius} mile radius
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
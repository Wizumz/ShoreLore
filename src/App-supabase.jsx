import React, { useState, useEffect, useRef } from 'react';
import { postsService, commentsService, votesService, reportsService, subscriptionsService } from './dataService.js';

// Keep all the existing constants and helper functions...
// Northeast Striped Bass Fishing Locations
const STRIPED_BASS_LOCATIONS = {
    'montauk-point-ny': { lat: 41.0362, lng: -71.8562, name: 'Montauk Point, NY', state: 'NY' },
    'cape-cod-ma': { lat: 41.6688, lng: -70.2962, name: 'Cape Cod, MA', state: 'MA' },
    'block-island-ri': { lat: 41.1775, lng: -71.5773, name: 'Block Island, RI', state: 'RI' },
    'chesapeake-bay-md': { lat: 38.9784, lng: -76.4951, name: 'Chesapeake Bay, MD', state: 'MD' },
    'sandy-hook-nj': { lat: 40.4168, lng: -74.0018, name: 'Sandy Hook, NJ', state: 'NJ' },
    'orient-point-ny': { lat: 41.1615, lng: -72.2351, name: 'Orient Point, NY', state: 'NY' },
    'plum-island-ma': { lat: 42.8167, lng: -70.8333, name: 'Plum Island, MA', state: 'MA' },
    'fire-island-ny': { lat: 40.6892, lng: -73.1573, name: 'Fire Island, NY', state: 'NY' },
    'race-point-ma': { lat: 42.0598, lng: -70.2429, name: 'Race Point, MA', state: 'MA' },
    'nauset-beach-ma': { lat: 41.8403, lng: -69.9550, name: 'Nauset Beach, MA', state: 'MA' },
    'watch-hill-ri': { lat: 41.3081, lng: -71.8565, name: 'Watch Hill, RI', state: 'RI' },
    'eastern-point-ma': { lat: 42.5731, lng: -70.6634, name: 'Eastern Point, MA', state: 'MA' },
    'rockaway-beach-ny': { lat: 40.5931, lng: -73.8370, name: 'Rockaway Beach, NY', state: 'NY' },
    'coney-island-ny': { lat: 40.5736, lng: -73.9857, name: 'Coney Island, NY', state: 'NY' },
    'assateague-island-md': { lat: 38.2434, lng: -75.1580, name: 'Assateague Island, MD', state: 'MD' }
};

// All the other constants and helper functions from the original file...
const USERNAME_COLORS = [
    { name: 'Navy', value: '#1e3a8a', bg: '#dbeafe' },
    { name: 'Emerald', value: '#065f46', bg: '#d1fae5' },
    { name: 'Purple', value: '#7c3aed', bg: '#e9d5ff' },
    { name: 'Rose', value: '#e11d48', bg: '#fce7f3' },
    { name: 'Amber', value: '#d97706', bg: '#fef3c7' },
    { name: 'Teal', value: '#0d9488', bg: '#ccfbf1' },
    { name: 'Indigo', value: '#4338ca', bg: '#e0e7ff' },
    { name: 'Orange', value: '#ea580c', bg: '#fed7aa' }
];

// Device ID for anonymous voting (stored locally)
const getDeviceId = () => {
    let deviceId = localStorage.getItem('riprap_device_id');
    if (!deviceId) {
        deviceId = crypto.randomUUID();
        localStorage.setItem('riprap_device_id', deviceId);
    }
    return deviceId;
};

// Generate unique screen name
const generateScreenName = () => {
    const adjectives = ['Angling', 'Casting', 'Deep', 'Swift', 'Silent', 'Steady', 'Sharp', 'Keen', 'Wild', 'Brave'];
    const nouns = ['Fisher', 'Angler', 'Caster', 'Hunter', 'Seeker', 'Striker', 'Reeler', 'Hooker', 'Tracker', 'Master'];
    const numbers = Math.floor(Math.random() * 999) + 1;
    
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${adjective}${noun}${numbers}`;
};

// Get or create user identity
const getUserIdentity = (customUsername = null, selectedColor = null) => {
    let user = localStorage.getItem('riprap_user');
    if (!user || customUsername) {
        const defaultColor = USERNAME_COLORS[0]; // Navy as default
        user = {
            id: crypto.randomUUID(),
            screenName: customUsername || generateScreenName(),
            color: selectedColor || defaultColor,
            hasChangedName: !!customUsername,
            createdAt: new Date().toISOString()
        };
        localStorage.setItem('riprap_user', JSON.stringify(user));
    } else {
        user = JSON.parse(user);
        // Ensure color exists for existing users
        if (!user.color) {
            user.color = USERNAME_COLORS[0];
            localStorage.setItem('riprap_user', JSON.stringify(user));
        }
    }
    return user;
};

// Location settings persistence (keeping local)
const saveLocationSettings = (location, radius) => {
    const settings = {
        customLocation: location,
        locationRadius: radius,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem('riprap_location_settings', JSON.stringify(settings));
};

const loadLocationSettings = () => {
    const settings = localStorage.getItem('riprap_location_settings');
    if (settings) {
        return JSON.parse(settings);
    }
    return { customLocation: null, locationRadius: 5 };
};

// Helper function to get approximate location name
const getApproximateLocation = (lat, lng) => {
    // This is a simple approximation - in production you might use reverse geocoding
    const locations = Object.values(STRIPED_BASS_LOCATIONS);
    let closest = locations[0];
    let minDistance = getDistanceFromLatLonInMiles(lat, lng, closest.lat, closest.lng);
    
    for (let location of locations) {
        const distance = getDistanceFromLatLonInMiles(lat, lng, location.lat, location.lng);
        if (distance < minDistance) {
            minDistance = distance;
            closest = location;
        }
    }
    
    return `Near ${closest.name}`;
};

// Distance calculation
function getDistanceFromLatLonInMiles(lat1, lon1, lat2, lon2) {
    const R = 3959; // Radius of the earth in miles
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI/180);
}

// ASCII art (keeping the same)
const FISHING_ASCII = `
           \\     /
            \\   /
             \\_/
              |
         ____/ \\____
        /           \\
       |   RIPRAP   |
        \\___________/
`;

// Main App Component with Supabase integration
const App = () => {
    // All the same state variables...
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState({});
    const [userVotes, setUserVotes] = useState({});
    const [showUsernameSetup, setShowUsernameSetup] = useState(false);
    const [showLocationModal, setShowLocationModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [showPostModal, setShowPostModal] = useState(false);
    const [showCommentsModal, setShowCommentsModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [newPostContent, setNewPostContent] = useState('');
    const [newCommentContent, setNewCommentContent] = useState('');
    const [userLocation, setUserLocation] = useState(null);
    const [customLocation, setCustomLocation] = useState(null);
    const [currentLocationName, setCurrentLocationName] = useState('Getting location...');
    const [locationRadius, setLocationRadius] = useState(5);
    const [sortBy, setSortBy] = useState('newest');
    const [isLoading, setIsLoading] = useState(false);
    const [loadedPostsCount, setLoadedPostsCount] = useState(50);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const textareaRef = useRef(null);
    const deviceId = getDeviceId();
    
    // Real-time subscriptions
    const [postsSubscription, setPostsSubscription] = useState(null);
    const [commentsSubscription, setCommentsSubscription] = useState(null);

    // Initialize user and location
    useEffect(() => {
        const userData = localStorage.getItem('riprap_user');
        if (!userData) {
            setShowUsernameSetup(true);
        } else {
            setUser(JSON.parse(userData));
        }
        
        // Load saved location settings
        const locationSettings = loadLocationSettings();
        setLocationRadius(locationSettings.locationRadius);
        if (locationSettings.customLocation) {
            setCustomLocation(locationSettings.customLocation);
            setCurrentLocationName(locationSettings.customLocation.name);
            setUserLocation(locationSettings.customLocation);
        }
    }, []);

    // Load posts when user and location are ready
    useEffect(() => {
        if (!user || !userLocation) return;
        
        loadPosts();
        setupRealtimeSubscriptions();
        
        return () => {
            if (postsSubscription) {
                subscriptionsService.unsubscribe(postsSubscription);
            }
        };
    }, [user, userLocation, locationRadius, sortBy]);

    // Load posts from Supabase
    const loadPosts = async () => {
        if (!userLocation) return;
        
        setIsLoading(true);
        try {
            const nearbyPosts = await postsService.getNearbyPosts(
                userLocation.lat, 
                userLocation.lng, 
                locationRadius
            );
            
            // Sort posts
            const sortedPosts = sortPosts(nearbyPosts);
            setPosts(sortedPosts);
            
            // Load user votes for these posts
            const postIds = sortedPosts.map(post => post.id);
            const votes = await votesService.getVotesForPosts(postIds, deviceId);
            setUserVotes(votes);
            
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Setup real-time subscriptions
    const setupRealtimeSubscriptions = () => {
        if (!userLocation) return;
        
        // Unsubscribe from previous subscription
        if (postsSubscription) {
            subscriptionsService.unsubscribe(postsSubscription);
        }
        
        // Subscribe to new posts and updates
        const newSubscription = subscriptionsService.subscribeToNearbyPosts(
            userLocation.lat,
            userLocation.lng,
            locationRadius,
            (newPost) => {
                // Add new post to the top
                setPosts(prevPosts => {
                    const updated = [newPost, ...prevPosts];
                    return sortPosts(updated);
                });
            },
            (updatedPost) => {
                // Update existing post
                setPosts(prevPosts => {
                    const updated = prevPosts.map(post => 
                        post.id === updatedPost.id ? updatedPost : post
                    );
                    return sortPosts(updated);
                });
            }
        );
        
        setPostsSubscription(newSubscription);
    };

    // Sort posts based on selected criteria
    const sortPosts = (postsToSort) => {
        const sorted = [...postsToSort];
        switch (sortBy) {
            case 'newest':
                return sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            case 'oldest':
                return sorted.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
            case 'topVoted':
                return sorted.sort((a, b) => (b.vote_count || 0) - (a.vote_count || 0));
            case 'mostComments':
                return sorted.sort((a, b) => (b.comment_count || 0) - (a.comment_count || 0));
            case 'closest':
                return sorted.sort((a, b) => (a.distance_miles || 0) - (b.distance_miles || 0));
            default:
                return sorted;
        }
    };

    // Create a new post
    const createPost = async () => {
        if (!newPostContent.trim() || !userLocation) return;
        
        try {
            await postsService.createPost(
                newPostContent.trim(),
                user.screenName,
                user.color,
                userLocation.lat,
                userLocation.lng,
                currentLocationName
            );
            
            setNewPostContent('');
            setShowPostModal(false);
            // Posts will be updated via real-time subscription
            
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    // Vote on a post
    const handleVote = async (postId, voteType) => {
        const currentVote = userVotes[postId] || 0;
        const newVote = currentVote === voteType ? 0 : voteType;
        
        try {
            await votesService.castVote(postId, deviceId, newVote);
            
            // Update local state
            setUserVotes(prev => ({
                ...prev,
                [postId]: newVote
            }));
            
            // The post vote count will be updated via triggers in the database
            // and real-time subscriptions will update the UI
            
        } catch (error) {
            console.error('Error voting:', error);
        }
    };

    // Rest of the component remains largely the same...
    // I'll continue with the essential parts for now

    return (
        <div className="min-h-screen bg-gray-50 terminal-text">
            {/* Username Setup Modal */}
            {showUsernameSetup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="w-full max-w-md mx-auto terminal-card p-6">
                        <div className="text-center space-y-4">
                            <div className="ascii-art text-xs terminal-accent">{FISHING_ASCII}</div>
                            <div className="text-xl font-bold terminal-text">
                                Welcome to RipRap
                            </div>
                            <div className="text-sm terminal-text">
                                Choose your angler name to get started
                            </div>
                            {/* Username setup form would go here */}
                        </div>
                    </div>
                </div>
            )}

            {/* Main App UI */}
            <div className="max-w-2xl mx-auto px-2 sm:px-0">
                {/* Header with logo */}
                <div className="terminal-header sticky top-0 z-40 p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <svg width="40" height="40" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="192" height="192" rx="24" fill="#0f766e"/>
                                {/* Logo SVG content */}
                            </svg>
                            <div className="hidden sm:block">
                                <div className="text-xs">Share the Shore, Spill the Lore</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <button
                                onClick={() => setShowAccountModal(true)}
                                className="flex items-center space-x-1 text-xs sm:text-sm font-bold px-3 py-2 bg-white border-2 border-navy-600 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-navy-300 shadow-sm"
                                style={{ color: user?.color?.value || '#1e3a8a' }}
                            >
                                <span>{user?.screenName}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Posts loading indicator */}
                {isLoading && (
                    <div className="text-center p-8">
                        <div className="terminal-text">Loading posts...</div>
                    </div>
                )}

                {/* Posts list */}
                <div className="space-y-4 p-4">
                    {posts.map(post => (
                        <div key={post.id} className="terminal-card p-4">
                            <div className="space-y-3">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span 
                                            className="font-bold text-sm"
                                            style={{ color: post.user_color?.value || '#1e3a8a' }}
                                        >
                                            {post.username}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {post.distance_miles}mi
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        {new Date(post.created_at).toLocaleTimeString()}
                                    </span>
                                </div>
                                
                                <div className="text-sm font-mono whitespace-pre-wrap">
                                    {post.content}
                                </div>
                                
                                <div className="flex items-center justify-between pt-2 border-t">
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => handleVote(post.id, 1)}
                                            className={`flex items-center space-x-1 text-xs terminal-button px-2 py-1 rounded ${
                                                userVotes[post.id] === 1 ? 'bg-green-600' : ''
                                            }`}
                                        >
                                            <span>⬆️</span>
                                        </button>
                                        
                                        <span className="text-xs font-bold">
                                            {post.vote_count || 0}
                                        </span>
                                        
                                        <button
                                            onClick={() => handleVote(post.id, -1)}
                                            className={`flex items-center space-x-1 text-xs terminal-button px-2 py-1 rounded ${
                                                userVotes[post.id] === -1 ? 'bg-red-600' : ''
                                            }`}
                                        >
                                            <span>⬇️</span>
                                        </button>
                                    </div>
                                    
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => openCommentsModal(post)}
                                            className="flex items-center space-x-1 text-xs terminal-button px-2 py-1 rounded"
                                        >
                                            <span>💬</span>
                                            <span>{post.comment_count || 0}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating action button for new post */}
                <button
                    onClick={() => setShowPostModal(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 terminal-button rounded-full text-2xl font-bold shadow-lg hover:shadow-xl transition-shadow z-30"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default App;
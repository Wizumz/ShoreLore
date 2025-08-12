-- Test fixtures for RipRap fishing app
-- This file contains sample data for development and testing

-- Clear existing data (use with caution)
-- TRUNCATE TABLE reports, votes, comments, posts, users RESTART IDENTITY CASCADE;

-- Sample users with different colors
INSERT INTO users (screen_name, device_id, color_name, color_value) VALUES 
('BIGFISHER123', 'test-device-001', 'Navy', '#1e3a8a'),
('REEL_MASTER88', 'test-device-002', 'Green', '#059669'),
('BASS_HUNTER99', 'test-device-003', 'Purple', '#7c3aed'),
('CATCH_CAPTAIN', 'test-device-004', 'Orange', '#ea580c'),
('STRIPED_PRO', 'test-device-005', 'Red', '#dc2626'),
('DEEP_FISHER', 'test-device-006', 'Teal', '#0d9488'),
('SURF_ANGLER', 'test-device-007', 'Pink', '#db2777'),
('BOAT_MASTER', 'test-device-008', 'Indigo', '#4338ca');

-- Sample posts at various Northeast fishing locations
INSERT INTO posts (user_id, content, location, nearest_city) VALUES 
(1, 'Great striped bass fishing off Montauk this morning! Water temp around 65°F, saw schools moving east.', 
 ST_Point(-71.8562, 41.0362)::geography, 'Montauk Point, NY'),

(2, 'Lots of bait fish at Race Point today. Expecting good fishing this weekend if the weather holds.', 
 ST_Point(-70.2457, 42.0654)::geography, 'Race Point, MA'),

(3, 'Windy conditions at Block Island but worth the trip. Caught a 28" keeper on live eels!', 
 ST_Point(-71.5773, 41.1775)::geography, 'Block Island, RI'),

(4, 'Sandy Hook has been consistent this week. Early morning bite has been best, topwater working well.', 
 ST_Point(-74.0018, 40.4168)::geography, 'Sandy Hook, NJ'),

(5, 'Chesapeake Bay fishing was on fire yesterday! Caught my limit on soft plastics near the bridge.', 
 ST_Point(-76.4951, 38.9784)::geography, 'Chesapeake Bay, MD'),

(6, 'Cape Cod surf fishing report: Good action on the beach this AM. Light tackle recommended.', 
 ST_Point(-70.2962, 41.6688)::geography, 'Cape Cod, MA'),

(7, 'Watch Hill area producing well on incoming tide. Bunker chunks working better than lures today.', 
 ST_Point(-71.8565, 41.3079)::geography, 'Watch Hill, RI'),

(8, 'Hudson River surprise! Caught a nice striper while targeting smallmouth. Fish are moving upriver.', 
 ST_Point(-73.9776, 41.7658)::geography, 'Hudson River, NY'),

(1, 'Martha\'s Vineyard ferry ride paid off. Found birds working about 2 miles off south shore.', 
 ST_Point(-70.6420, 41.3888)::geography, 'Martha\'s Vineyard, MA'),

(2, 'Buzzards Bay holding good fish. Drift fishing with live pogies has been the ticket.', 
 ST_Point(-70.9481, 41.5389)::geography, 'Buzzards Bay, MA'),

(3, 'Nantucket sound producing keeper bass on diamond jigs. Work them slow along the bottom.', 
 ST_Point(-70.0995, 41.2835)::geography, 'Nantucket, MA'),

(4, 'Long Island Sound trolling report: Umbrella rigs with tubes getting multiple hookups.', 
 ST_Point(-72.6732, 41.1015)::geography, 'Long Island Sound, CT'),

(5, 'Delaware Bay fishing update: Lots of shorts but found some keepers on the incoming tide.', 
 ST_Point(-75.1818, 38.9108)::geography, 'Delaware Bay, DE'),

(6, 'Orient Point rips were churning this morning. Saw whales and dolphins - fish should follow!', 
 ST_Point(-72.2351, 41.1615)::geography, 'Orient Point, NY'),

(7, 'Rhode Island Sound depths holding fish. Try 40-60 feet with fresh cut bait.', 
 ST_Point(-71.4774, 41.4221)::geography, 'Rhode Island Sound, RI');

-- Sample comments on posts
INSERT INTO comments (post_id, user_id, emoji, content) VALUES 
(1, 2, '🎣', 'Nice report! What depth were you fishing?'),
(1, 3, '💯', 'Montauk has been hot lately. Going out tomorrow!'),
(1, 4, '🌊', 'Water temp is key this time of year'),

(3, 1, '⭐', 'Block Island never disappoints! Great catch'),
(3, 5, '🐟', '28 inches is a good fish. What time did you get it?'),

(5, 2, '🔥', 'Chesapeake has been on fire this month'),
(5, 6, '👍', 'Bridge fishing is underrated. Nice work!'),

(8, 3, '😲', 'Hudson River stripers? That\'s awesome!'),
(8, 7, '🎯', 'Freshwater stripers hit different'),

(10, 4, '🚤', 'Buzzards Bay is a hidden gem'),
(10, 8, '🌟', 'Live bait always wins'),

(12, 1, '⚡', 'LI Sound trolling is productive but boring lol'),
(12, 5, '🎪', 'Umbrella rigs are like cheating'),

(15, 6, '🐋', 'Whales and dolphins are a great sign!'),
(15, 2, '📍', 'Orient Point rips can be dangerous - be careful');

-- Sample votes on posts (mix of upvotes and downvotes)
INSERT INTO votes (post_id, user_id, value) VALUES 
-- Post 1 (Montauk) - very popular
(1, 2, 1), (1, 3, 1), (1, 4, 1), (1, 5, 1), (1, 6, 1), (1, 7, 1),

-- Post 3 (Block Island) - popular
(3, 1, 1), (3, 2, 1), (3, 4, 1), (3, 6, 1), (3, 7, 1),

-- Post 5 (Chesapeake) - popular  
(5, 1, 1), (5, 3, 1), (5, 4, 1), (5, 6, 1),

-- Post 8 (Hudson River) - mixed reactions
(8, 1, 1), (8, 2, 1), (8, 4, -1), (8, 5, 1), (8, 6, -1),

-- Post 10 (Buzzards Bay) - good reception
(10, 1, 1), (10, 2, 1), (10, 5, 1), (10, 7, 1),

-- Post 12 (LI Sound) - controversial trolling
(12, 2, -1), (12, 3, 1), (12, 6, -1), (12, 7, 1), (12, 8, 1),

-- Post 15 (Orient Point) - helpful info
(15, 1, 1), (15, 3, 1), (15, 4, 1), (15, 7, 1), (15, 8, 1),

-- Some random votes on other posts
(2, 3, 1), (2, 5, 1), (2, 7, 1),
(4, 2, 1), (4, 6, 1), (4, 8, 1),
(6, 1, 1), (6, 4, 1), (6, 8, 1),
(7, 2, 1), (7, 5, 1),
(9, 3, 1), (9, 6, 1), (9, 8, 1),
(11, 2, 1), (11, 4, 1), (11, 7, 1),
(13, 1, 1), (13, 3, 1),
(14, 2, 1), (14, 5, 1), (14, 8, 1);

-- Sample reports for testing moderation
INSERT INTO reports (post_id, user_id, reason) VALUES 
(12, 3, 'Spam - posted same content multiple times'),
(8, 4, 'Misinformation - Hudson River doesn\'t have striped bass');

-- Verify the test data
SELECT 
    'Users' as table_name, 
    COUNT(*) as record_count
FROM users
UNION ALL
SELECT 
    'Posts' as table_name, 
    COUNT(*) as record_count  
FROM posts
UNION ALL
SELECT 
    'Comments' as table_name, 
    COUNT(*) as record_count
FROM comments
UNION ALL  
SELECT 
    'Votes' as table_name, 
    COUNT(*) as record_count
FROM votes
UNION ALL
SELECT 
    'Reports' as table_name, 
    COUNT(*) as record_count
FROM reports;

-- Test geospatial query - posts within 50 miles of Boston
SELECT 
    p.id,
    p.content,
    p.nearest_city,
    p.vote_score,
    u.screen_name,
    ROUND(ST_Distance(p.location, ST_Point(-71.0589, 42.3601)::geography) / 1609.34, 1) as distance_miles
FROM posts p
JOIN users u ON p.user_id = u.id  
WHERE ST_DWithin(
    p.location,
    ST_Point(-71.0589, 42.3601)::geography, -- Boston coordinates
    80467 -- 50 miles in meters
)
ORDER BY p.vote_score DESC, p.created_at DESC;
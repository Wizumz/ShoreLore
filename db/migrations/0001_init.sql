-- Initial migration for ShoreLore fishing app
-- Creates users, posts, comments, votes, and reports tables with PostGIS support

-- Enable PostGIS extension for geospatial queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- Users table - anonymous identity with device-based persistence
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    screen_name TEXT NOT NULL,
    device_id TEXT UNIQUE NOT NULL,
    color_name TEXT NOT NULL DEFAULT 'Navy',
    color_value TEXT NOT NULL DEFAULT '#1e3a8a',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Posts table with geospatial location support
CREATE TABLE posts (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL CHECK (char_length(content) <= 200),
    location GEOGRAPHY(POINT, 4326), -- WGS84 coordinate system
    nearest_city TEXT,
    upvotes INTEGER DEFAULT 0 CHECK (upvotes >= 0),
    downvotes INTEGER DEFAULT 0 CHECK (downvotes >= 0),
    vote_score INTEGER DEFAULT 0, -- Calculated field: upvotes - downvotes
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Comments table with emoji identifiers
CREATE TABLE comments (
    id BIGSERIAL PRIMARY KEY,
    post_id BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    emoji TEXT NOT NULL DEFAULT '🐟',
    content TEXT NOT NULL CHECK (char_length(content) <= 200),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Votes table with unique constraint per user per post
CREATE TABLE votes (
    id BIGSERIAL PRIMARY KEY,
    post_id BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    value SMALLINT NOT NULL CHECK (value IN (1, -1)), -- 1 for upvote, -1 for downvote
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(post_id, user_id)
);

-- Reports table for content moderation
CREATE TABLE reports (
    id BIGSERIAL PRIMARY KEY,
    post_id BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reason TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance

-- GiST index for geospatial queries on posts location
CREATE INDEX idx_posts_location_gist ON posts USING GIST(location);

-- Regular indexes for common queries
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX idx_posts_vote_score ON posts(vote_score DESC);
CREATE INDEX idx_posts_user_id ON posts(user_id);

CREATE INDEX idx_comments_post_id ON comments(post_id);
CREATE INDEX idx_comments_created_at ON comments(created_at DESC);

CREATE INDEX idx_votes_post_id ON votes(post_id);
CREATE INDEX idx_votes_user_id ON votes(user_id);

CREATE INDEX idx_reports_post_id ON reports(post_id);
CREATE INDEX idx_reports_status ON reports(status) WHERE status = 'pending';

CREATE INDEX idx_users_device_id ON users(device_id);

-- Composite index for vote aggregation
CREATE INDEX idx_votes_post_value ON votes(post_id, value);

-- Triggers to automatically update vote counts and timestamps

-- Function to update vote_score on posts when votes change
CREATE OR REPLACE FUNCTION update_post_vote_score()
RETURNS TRIGGER AS $$
BEGIN
    -- Calculate new vote score for the affected post
    UPDATE posts 
    SET vote_score = COALESCE(
        (SELECT SUM(value) FROM votes WHERE post_id = COALESCE(NEW.post_id, OLD.post_id)), 
        0
    ),
    updated_at = NOW()
    WHERE id = COALESCE(NEW.post_id, OLD.post_id);
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Trigger for vote insertions, updates, and deletions
CREATE TRIGGER trigger_update_vote_score
    AFTER INSERT OR UPDATE OR DELETE ON votes
    FOR EACH ROW EXECUTE FUNCTION update_post_vote_score();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at on users and posts
CREATE TRIGGER trigger_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_posts_updated_at
    BEFORE UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies for basic protection
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Allow all operations for service role (used by Netlify functions)
-- Note: These policies will be refined based on specific security requirements
CREATE POLICY "Allow service role access" ON users FOR ALL USING (true);
CREATE POLICY "Allow service role access" ON posts FOR ALL USING (true);
CREATE POLICY "Allow service role access" ON comments FOR ALL USING (true);
CREATE POLICY "Allow service role access" ON votes FOR ALL USING (true);
CREATE POLICY "Allow service role access" ON reports FOR ALL USING (true);

-- Sample data for development (optional)
-- Uncomment these lines if you want some test data

-- INSERT INTO users (screen_name, device_id, color_name, color_value) VALUES 
-- ('BIGFISHER123', 'dev-device-1', 'Navy', '#1e3a8a'),
-- ('REEL_MASTER88', 'dev-device-2', 'Green', '#059669'),
-- ('BASS_HUNTER99', 'dev-device-3', 'Purple', '#7c3aed');

-- INSERT INTO posts (user_id, content, location, nearest_city) VALUES 
-- (1, 'Great striped bass fishing off Montauk this morning! Water temp around 65°F.', 
--  ST_Point(-71.8562, 41.0362)::geography, 'Montauk Point, NY'),
-- (2, 'Saw lots of bait fish at Cape Cod. Expecting good fishing this weekend.', 
--  ST_Point(-70.2962, 41.6688)::geography, 'Cape Cod, MA'),
-- (3, 'Windy conditions at Block Island but worth the trip. Caught a keeper!', 
--  ST_Point(-71.5773, 41.1775)::geography, 'Block Island, RI');
-- RipRap Database Schema for Supabase
-- Run these commands in your Supabase SQL editor

-- Enable PostGIS extension for geographic queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- Posts table
CREATE TABLE posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    content TEXT NOT NULL CHECK (char_length(content) <= 200),
    username VARCHAR(50) NOT NULL,
    user_color JSONB NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    location_name VARCHAR(255),
    vote_count INTEGER DEFAULT 0,
    comment_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_hidden BOOLEAN DEFAULT FALSE,
    -- Add a geographic point for efficient location queries
    location_point GEOGRAPHY(POINT, 4326) GENERATED ALWAYS AS (ST_Point(longitude, latitude)::geography) STORED
);

-- Comments table
CREATE TABLE comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    content TEXT NOT NULL CHECK (char_length(content) <= 200),
    username VARCHAR(50) NOT NULL,
    user_color JSONB NOT NULL,
    emoji_identifier VARCHAR(10) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Votes table
CREATE TABLE votes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    user_device_id VARCHAR(255) NOT NULL,
    vote_type INTEGER NOT NULL CHECK (vote_type IN (-1, 1)), -- -1 for downvote, 1 for upvote
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(post_id, user_device_id)
);

-- Reports table for content moderation
CREATE TABLE reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
    reported_by_device_id VARCHAR(255) NOT NULL,
    reason VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending',
    CHECK (post_id IS NOT NULL OR comment_id IS NOT NULL)
);

-- Indexes for performance
CREATE INDEX idx_posts_location ON posts USING GIST (location_point);
CREATE INDEX idx_posts_created_at ON posts (created_at DESC);
CREATE INDEX idx_posts_vote_count ON posts (vote_count DESC);
CREATE INDEX idx_comments_post_id ON comments (post_id);
CREATE INDEX idx_votes_post_id ON votes (post_id);
CREATE INDEX idx_votes_device_id ON votes (user_device_id);

-- Function to update post vote count
CREATE OR REPLACE FUNCTION update_post_vote_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE posts 
    SET vote_count = (
        SELECT COALESCE(SUM(vote_type), 0) 
        FROM votes 
        WHERE post_id = COALESCE(NEW.post_id, OLD.post_id)
    )
    WHERE id = COALESCE(NEW.post_id, OLD.post_id);
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Function to update post comment count
CREATE OR REPLACE FUNCTION update_post_comment_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE posts 
    SET comment_count = (
        SELECT COUNT(*) 
        FROM comments 
        WHERE post_id = COALESCE(NEW.post_id, OLD.post_id)
    )
    WHERE id = COALESCE(NEW.post_id, OLD.post_id);
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Function to hide posts with low vote count
CREATE OR REPLACE FUNCTION update_post_visibility()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE posts 
    SET is_hidden = (vote_count <= -5)
    WHERE id = NEW.post_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER trigger_update_vote_count
    AFTER INSERT OR UPDATE OR DELETE ON votes
    FOR EACH ROW EXECUTE FUNCTION update_post_vote_count();

CREATE TRIGGER trigger_update_comment_count
    AFTER INSERT OR DELETE ON comments
    FOR EACH ROW EXECUTE FUNCTION update_post_comment_count();

CREATE TRIGGER trigger_update_visibility
    AFTER UPDATE OF vote_count ON posts
    FOR EACH ROW EXECUTE FUNCTION update_post_visibility();

-- Row Level Security (RLS) policies
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Allow anonymous access for reading posts
CREATE POLICY "Allow anonymous read access on posts" ON posts
    FOR SELECT USING (true);

-- Allow anonymous access for creating posts
CREATE POLICY "Allow anonymous insert on posts" ON posts
    FOR INSERT WITH CHECK (true);

-- Allow anonymous access for comments
CREATE POLICY "Allow anonymous read access on comments" ON comments
    FOR SELECT USING (true);

CREATE POLICY "Allow anonymous insert on comments" ON comments
    FOR INSERT WITH CHECK (true);

-- Allow anonymous access for votes (with device-based restrictions handled in app)
CREATE POLICY "Allow anonymous read access on votes" ON votes
    FOR SELECT USING (true);

CREATE POLICY "Allow anonymous insert on votes" ON votes
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous update on votes" ON votes
    FOR UPDATE USING (true);

CREATE POLICY "Allow anonymous delete on votes" ON votes
    FOR DELETE USING (true);

-- Allow anonymous access for reports
CREATE POLICY "Allow anonymous insert on reports" ON reports
    FOR INSERT WITH CHECK (true);

-- Function to get nearby posts (within radius in miles)
CREATE OR REPLACE FUNCTION get_nearby_posts(
    user_lat DECIMAL, 
    user_lng DECIMAL, 
    radius_miles DECIMAL DEFAULT 5,
    limit_count INTEGER DEFAULT 50
)
RETURNS TABLE (
    id UUID,
    content TEXT,
    username VARCHAR(50),
    user_color JSONB,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    location_name VARCHAR(255),
    vote_count INTEGER,
    comment_count INTEGER,
    created_at TIMESTAMP WITH TIME ZONE,
    distance_miles DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.id,
        p.content,
        p.username,
        p.user_color,
        p.latitude,
        p.longitude,
        p.location_name,
        p.vote_count,
        p.comment_count,
        p.created_at,
        ROUND(
            ST_DistanceSphere(
                ST_Point(user_lng, user_lat),
                ST_Point(p.longitude, p.latitude)
            )::DECIMAL / 1609.344, -- Convert meters to miles
            2
        ) as distance_miles
    FROM posts p
    WHERE 
        p.is_hidden = FALSE
        AND ST_DWithin(
            p.location_point,
            ST_Point(user_lng, user_lat)::geography,
            radius_miles * 1609.344 -- Convert miles to meters
        )
    ORDER BY p.created_at DESC
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;
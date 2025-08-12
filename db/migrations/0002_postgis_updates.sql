-- Migration to optimize PostGIS usage for posts table
-- Ensures proper PostGIS extension and indexing

-- Ensure PostGIS extension is available
CREATE EXTENSION IF NOT EXISTS postgis;

-- Update the location column to be NOT NULL as required
-- First, we need to check if there are any posts with NULL location
-- and handle them appropriately

-- Update the posts table to make location NOT NULL
-- (This will fail if there are existing NULL values, which is expected behavior)
ALTER TABLE posts ALTER COLUMN location SET NOT NULL;

-- Drop the old index if it exists and create the new one with the required name
DROP INDEX IF EXISTS idx_posts_location_gist;
CREATE INDEX posts_location_idx ON posts USING GIST (location);

-- Create a function to insert posts with proper PostGIS location
CREATE OR REPLACE FUNCTION create_post_with_location(
    p_user_id BIGINT,
    p_content TEXT,
    p_lng FLOAT,
    p_lat FLOAT,
    p_nearest_city TEXT DEFAULT NULL
)
RETURNS TABLE (
    id BIGINT,
    content TEXT,
    location GEOGRAPHY,
    nearest_city TEXT,
    upvotes INTEGER,
    downvotes INTEGER,
    vote_score INTEGER,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    user_id BIGINT
) AS $$
DECLARE
    new_post_id BIGINT;
BEGIN
    INSERT INTO posts (user_id, content, location, nearest_city)
    VALUES (p_user_id, p_content, ST_SetSRID(ST_MakePoint(p_lng, p_lat), 4326)::geography, p_nearest_city)
    RETURNING posts.id INTO new_post_id;
    
    RETURN QUERY
    SELECT 
        p.id,
        p.content,
        p.location,
        p.nearest_city,
        p.upvotes,
        p.downvotes,
        p.vote_score,
        p.created_at,
        p.updated_at,
        p.user_id
    FROM posts p
    WHERE p.id = new_post_id;
END;
$$ LANGUAGE plpgsql;

-- Create a function to calculate distance using PostGIS
CREATE OR REPLACE FUNCTION get_posts_within_radius(
    center_lng FLOAT,
    center_lat FLOAT, 
    radius_meters INTEGER,
    limit_count INTEGER DEFAULT 20,
    offset_count INTEGER DEFAULT 0
)
RETURNS TABLE (
    id BIGINT,
    content TEXT,
    location GEOGRAPHY,
    nearest_city TEXT,
    upvotes INTEGER,
    downvotes INTEGER,
    vote_score INTEGER,
    created_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE,
    user_id BIGINT,
    distance_meters FLOAT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.id,
        p.content,
        p.location,
        p.nearest_city,
        p.upvotes,
        p.downvotes,
        p.vote_score,
        p.created_at,
        p.updated_at,
        p.user_id,
        ST_Distance(p.location, ST_MakePoint(center_lng, center_lat)::geography) as distance_meters
    FROM posts p
    WHERE ST_DWithin(p.location, ST_MakePoint(center_lng, center_lat)::geography, radius_meters)
    ORDER BY distance_meters ASC
    LIMIT limit_count
    OFFSET offset_count;
END;
$$ LANGUAGE plpgsql;
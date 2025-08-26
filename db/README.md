# ShoreLore Database Setup

This directory contains SQL migration files and database documentation for the ShoreLore fishing app.

## Overview

The database uses PostgreSQL with PostGIS extension for geospatial functionality. The schema includes:

- **users**: Anonymous device-based user identity
- **posts**: Fishing reports with geospatial location data
- **comments**: Comments on posts with emoji identifiers  
- **votes**: Upvotes/downvotes on posts
- **reports**: Content moderation reports

## Prerequisites

- PostgreSQL 14+ with PostGIS extension
- Supabase project (or local PostgreSQL instance)
- Supabase CLI (for migration management)

## Supabase Setup

1. **Create a new Supabase project** at https://supabase.com
2. **Enable PostGIS extension** in your Supabase project:
   ```sql
   CREATE EXTENSION IF NOT EXISTS postgis;
   ```
3. **Install Supabase CLI**:
   ```bash
   npm install -g supabase
   ```

## Running Migrations

### Using Supabase CLI (Recommended)

1. **Initialize Supabase in your project**:
   ```bash
   supabase init
   ```

2. **Link to your Supabase project**:
   ```bash
   supabase link --project-ref YOUR_PROJECT_REF
   ```

3. **Run migrations**:
   ```bash
   supabase db push
   ```

### Using psql directly

If you prefer to run migrations manually:

```bash
psql "postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres" \
  -f db/migrations/0001_init.sql
```

### Local Development with Supabase CLI

For local development, you can run a local Supabase instance:

```bash
# Start local Supabase
supabase start

# Apply migrations to local instance
supabase db reset

# Get local database URL
supabase status
```

## Environment Variables

After setting up your database, you'll need these environment variables:

```bash
# Public keys (safe for client-side)
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# Private keys (server-side only, for Netlify functions)
SUPABASE_SERVICE_KEY=your-service-role-key
```

## Database Schema Details

### PostGIS Integration

The `posts` table uses PostGIS for geospatial queries:
- Location stored as `GEOGRAPHY(POINT, 4326)` (WGS84)
- GiST index for fast radius queries
- Support for distance-based filtering

### Performance Optimizations

- **Indexes**: Optimized for common query patterns
- **Triggers**: Automatic vote score calculation
- **RLS**: Row Level Security enabled for all tables
- **Constraints**: Data validation at database level

### Example Queries

**Find posts within 10 miles of a location**:
```sql
SELECT p.*, u.screen_name 
FROM posts p
JOIN users u ON p.user_id = u.id
WHERE ST_DWithin(
  p.location,
  ST_Point(-71.8562, 41.0362)::geography,
  16093.4  -- 10 miles in meters
)
ORDER BY p.created_at DESC;
```

**Get vote counts for posts**:
```sql
SELECT 
  p.id,
  p.content,
  p.vote_score,
  COUNT(v.id) as total_votes,
  COUNT(CASE WHEN v.value = 1 THEN 1 END) as upvotes,
  COUNT(CASE WHEN v.value = -1 THEN 1 END) as downvotes
FROM posts p
LEFT JOIN votes v ON p.id = v.post_id
GROUP BY p.id, p.content, p.vote_score;
```

## Migration History

- `0001_init.sql`: Initial schema with PostGIS support, all core tables, indexes, and triggers

## Security Notes

- RLS (Row Level Security) is enabled on all tables
- Service role policies allow full access for Netlify functions
- Client-side access should use anon key with limited permissions
- All user inputs are validated with database constraints

## Testing

See the `test-fixtures/` directory for sample data and test scenarios.

## Backup and Recovery

Supabase provides automatic backups, but for additional safety:

```bash
# Create backup
pg_dump "postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres" \
  > backup_$(date +%Y%m%d_%H%M%S).sql

# Restore backup (CAUTION: This will overwrite existing data)
psql "postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres" \
  < backup_file.sql
```
# Supabase + Netlify Backend Setup Guide

This guide walks you through setting up the complete Supabase backend with Netlify serverless functions for the ShoreLore fishing app.

## Prerequisites

- Node.js 18+ installed
- Git repository access
- Netlify account
- Supabase account

## 1. Supabase Project Setup

### Create Supabase Project

1. **Sign up/Login** to [Supabase](https://supabase.com)
2. **Create new project**:
   - Choose an organization
   - Name: `shorelore-fishing-app`
   - Database password: Generate and save securely
   - Region: Choose closest to your users

3. **Wait for project to initialize** (2-3 minutes)

### Enable PostGIS Extension

1. Go to **Database > Extensions** in Supabase dashboard
2. **Enable PostGIS extension**:
   ```sql
   CREATE EXTENSION IF NOT EXISTS postgis;
   ```

### Run Database Migrations

**Option A: Using Supabase CLI (Recommended)**

```bash
# Install Supabase CLI
npm install -g supabase

# Initialize in project
supabase init

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Run migrations
supabase db push
```

**Option B: Manual SQL Execution**

1. Go to **Database > SQL Editor** in Supabase dashboard
2. Copy contents of `db/migrations/0001_init.sql`
3. **Execute the migration**

### Add Test Data (Optional)

```bash
# Using Supabase dashboard SQL Editor
# Copy and execute contents of db/test-fixtures/sample_data.sql
```

### Get API Keys

1. Go to **Settings > API** in Supabase dashboard
2. **Copy these values**:
   - Project URL: `https://your-project-ref.supabase.co`
   - Anon/Public key: `eyJ...` (safe for client-side)
   - Service role key: `eyJ...` (server-side only, keep secret!)

## 2. Netlify Setup

### Deploy to Netlify

**Option A: Git Integration (Recommended)**

1. **Push code to GitHub**:
   ```bash
   git push origin feature/supabase-netlify-backend
   ```

2. **Connect to Netlify**:
   - Go to [Netlify dashboard](https://app.netlify.com)
   - **New site from Git**
   - Choose GitHub repository
   - Branch: `feature/supabase-netlify-backend`
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

**Option B: Manual Deploy**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Configure Environment Variables

In **Netlify Dashboard > Site Settings > Environment Variables**, add:

```bash
# Public variables (client-side safe)
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here

# Private variables (server-side only)
SUPABASE_SERVICE_KEY=your-service-role-key-here

# Optional
NODE_ENV=production
```

**⚠️ Critical Security Note**: Never expose `SUPABASE_SERVICE_KEY` to client-side code!

## 3. Local Development Setup

### Install Dependencies

```bash
npm install
```

### Environment Variables

1. **Copy environment template**:
   ```bash
   cp .env.example .env.local
   ```

2. **Update `.env.local`** with your Supabase credentials:
   ```bash
   SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_KEY=your-service-role-key
   ```

### Run Development Server

```bash
# Start Vite dev server
npm run dev

# In another terminal, start Netlify functions
npm run dev:functions
```

Visit `http://localhost:8888` to test with Netlify functions.

## 4. Testing the API

### Test User Creation

```bash
curl -X POST http://localhost:8888/.netlify/functions/api/upsert-user \
  -H "Content-Type: application/json" \
  -d '{"device_id": "test-device-123", "screen_name": "TEST_FISHER"}'
```

### Test Post Creation

```bash
curl -X POST http://localhost:8888/.netlify/functions/api/create-post \
  -H "Content-Type: application/json" \
  -d '{
    "device_id": "test-device-123",
    "content": "Great fishing at Cape Cod today!",
    "lat": 41.6688,
    "lng": -70.2962
  }'
```

### Test Getting Posts

```bash
curl "http://localhost:8888/.netlify/functions/api/get-posts?lat=41.6688&lng=-70.2962&radius_m=16093&limit=5"
```

### Test Voting

```bash
curl -X POST http://localhost:8888/.netlify/functions/api/vote \
  -H "Content-Type: application/json" \
  -d '{"device_id": "test-device-123", "post_id": 1, "value": 1}'
```

## 5. Database Performance

### Monitor Query Performance

1. **Supabase Dashboard > Database > Logs**
2. Watch for slow queries
3. Check index usage:
   ```sql
   EXPLAIN ANALYZE SELECT * FROM posts 
   WHERE ST_DWithin(location, ST_Point(-71.8562, 41.0362)::geography, 16093);
   ```

### Scaling Considerations

- **Connection pooling**: Enabled by default in Supabase
- **Read replicas**: Available in Supabase Pro plan
- **CDN**: Netlify provides global CDN for static assets
- **Function regions**: Deploy to multiple regions if needed

## 6. Security Checklist

### Database Security

- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Service role access only through Netlify functions
- ✅ Anonymous key limited to specific operations
- ✅ Input validation and sanitization
- ✅ Content moderation filters

### API Security

- ✅ Rate limiting implemented
- ✅ CORS headers configured
- ✅ Request validation
- ✅ Error handling without data leaks
- ✅ IP-based abuse protection

### Deployment Security

- ✅ Environment variables properly configured
- ✅ Secrets not in client-side code
- ✅ HTTPS enforced
- ✅ Security headers configured

## 7. Monitoring and Maintenance

### Health Checks

```bash
# Test API connectivity
curl -f "https://your-site.netlify.app/.netlify/functions/api/get-posts?limit=1"

# Check database connection through API
```

### Logs and Debugging

- **Netlify Functions**: Dashboard > Functions > View logs
- **Supabase**: Dashboard > Database > Logs
- **Client-side**: Browser dev tools network tab

### Backup Strategy

```bash
# Automated backups in Supabase
# Manual backup for critical data
pg_dump "postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres" \
  > backup_$(date +%Y%m%d).sql
```

## 8. Migration from IndexedDB

The API client (`src/lib/api.js`) maintains backward compatibility:

```javascript
// Old IndexedDB code works with new API
const posts = await apiService.getPosts({ lat, lng, radiusM: 16093 });
const vote = await apiService.castVote(deviceId, postId, 1);
```

### Migration Strategy

1. **Deploy backend** (this setup)
2. **Test all endpoints** 
3. **Update frontend** to use API client
4. **Gradual rollout** with feature flags
5. **Remove IndexedDB code** once stable

## 9. Common Issues and Solutions

### Function Timeouts

```javascript
// Increase timeout for heavy operations
export const config = {
  maxDuration: 30 // seconds
};
```

### Database Connection Limits

- Use connection pooling (enabled by default)
- Optimize queries to reduce connection time
- Consider upgrading Supabase plan

### Rate Limiting Issues

```javascript
// Adjust rate limits in netlify/functions/lib/supabase.js
checkRateLimit(clientIP, 60, 60000); // requests per minute
```

### PostGIS Performance

```sql
-- Check if indexes are being used
EXPLAIN ANALYZE SELECT * FROM posts 
WHERE ST_DWithin(location, ST_Point(-71, 41)::geography, 16093);

-- Recreate index if needed
DROP INDEX idx_posts_location_gist;
CREATE INDEX idx_posts_location_gist ON posts USING GIST(location);
```

## 10. Production Deployment

### Final Checklist

- [ ] All environment variables set in Netlify
- [ ] Database migrations applied to production
- [ ] API endpoints tested
- [ ] Rate limits configured appropriately
- [ ] Monitoring set up
- [ ] Backup strategy implemented
- [ ] Security review completed

### Go Live

1. **Merge feature branch** to main
2. **Deploy production** build
3. **Monitor logs** for issues
4. **Test all functionality**
5. **Update DNS** if needed

## Support

- **Supabase Docs**: https://supabase.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **PostGIS Docs**: https://postgis.net/docs/

For ShoreLore-specific issues, check the repository issues or create a new one.
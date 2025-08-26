# ShoreLore Deployment Guide

## Netlify Deployment (Recommended)

ShoreLore is optimized for Netlify deployment with automatic builds and PWA support.

### Prerequisites
- Node.js 18+ installed
- Git repository hosted on GitHub, GitLab, or Bitbucket
- Netlify account

### Method 1: Direct Git Integration

1. **Connect Repository**:
   - Log into [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose your Git provider and select the ShoreLore repository

2. **Configure Build Settings**:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your app

### Method 2: Manual Upload

1. **Build the project locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder to the deploy area

### Netlify Configuration

Create a `netlify.toml` file in the root directory for advanced configuration:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/manifest.json"
  [headers.values]
    Cache-Control = "public, max-age=86400"
```

## GitHub Pages Deployment (Alternative)

### Setup Instructions

1. **Enable GitHub Pages**:
   - Navigate to https://github.com/[username]/ShoreLore/settings/pages
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

2. **Add Build Workflow**:
   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Access Your App**:
   Your app will be available at: **https://[username].github.io/ShoreLore/**

## PWA Requirements

Both deployment methods support PWA features:

- ✅ HTTPS (automatic on both platforms)
- ✅ Service Worker registration
- ✅ Web App Manifest
- ✅ Offline functionality

## Domain Configuration

### Custom Domain on Netlify
1. Go to Site Settings → Domain management
2. Add your custom domain
3. Netlify will automatically provision SSL certificates

### Custom Domain on GitHub Pages
1. Add a `CNAME` file to your repository root with your domain
2. Configure DNS records with your domain provider
3. Enable "Enforce HTTPS" in repository settings

## Performance Optimization

Both platforms automatically provide:
- CDN distribution
- Automatic compression
- HTTP/2 support
- SSL certificates

## Troubleshooting

### Build Failures
- Ensure Node.js version compatibility (18+)
- Check that all dependencies are listed in package.json
- Verify build command succeeds locally

### PWA Installation Issues
- Confirm HTTPS is enabled
- Check manifest.json is accessible
- Verify service worker registration
- Use browser dev tools to debug PWA requirements

### Caching Issues
- Clear browser cache
- Check service worker updates
- Verify cache headers configuration

## Monitoring

### Netlify Analytics
- Enable Netlify Analytics for visitor insights
- Monitor Core Web Vitals
- Track deployment frequency

### GitHub Pages
- Use GitHub repository insights
- Monitor via third-party analytics
- Check GitHub Pages status page for outages

---

**Next Steps**: After deployment, test the PWA installation flow on both mobile and desktop devices to ensure optimal user experience.
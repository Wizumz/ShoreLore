### Next 
I'm changing then name of the project to RipRap, make sure all references to Hookr are changed accordingly.
1. Create a text logo with a handwritten, edgy, font, "RipRap"
2. Favicon should be an R with the same font
3. The site tagline/slogan will be, "Share the Shore, Spill the Lore"
4. Prepare the repo/project for deploy to Netlify, which I will do next.

# 🎣 Hookr - Fishing Community PWA

A Progressive Web App inspired by Yik Yak, designed specifically for fishing communities to anonymously share catches, fishing spots, and tips within a 5-mile radius.

![Hookr Logo](./public/icons/icon-192x192.png)

## 🌊 Features

### Core Functionality
- **Anonymous Posting**: Share "Casts" up to 200 characters without registration
- **Geolocation-Based Feed**: Posts visible only within 5-mile radius
- **Voting System**: Upvote/downvote posts; posts with -5 or lower are hidden
- **Comments**: Add comments to posts with random emoji identifiers
- **Reporting System**: Flag inappropriate content for review
- **Unique Screen Names**: Device-specific anonymous identities (e.g., "ReelMaster123")

### PWA Features
- **Offline Capability**: View cached posts and draft new content offline
- **Installable**: Add to home screen on mobile devices
- **Service Worker**: Automatic caching for fast loading
- **Responsive Design**: Optimized for mobile and desktop
- **Dark Mode**: Toggle between light and dark themes

### Fishing-Themed Design
- Ocean blue color palette (#0f766e)
- Fishing hook and maritime icons
- Wave pattern backgrounds
- Nautical terminology ("Cast" instead of "Post")

## 🚀 Quick Start

### Prerequisites
- Modern web browser with PWA support
- HTTPS connection (required for PWA features)
- GitHub account for deployment

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Hookr.git
   cd Hookr
   ```

2. **Serve locally**:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

### GitHub Pages Deployment

1. **Create Repository**:
   - Create a new repository named `Hookr` on GitHub
   - Upload all project files to the repository

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Configure for PWA**:
   - Add `.nojekyll` file to root (already included)
   - Ensure HTTPS is enabled (GitHub Pages default)

4. **Access Your App**:
   Your app will be available at: `https://yourusername.github.io/Hookr`

## 📱 Installation

### Mobile (iOS/Android)
1. Open the app in your mobile browser
2. Look for "Add to Home Screen" prompt
3. Follow browser-specific installation steps:
   - **Chrome**: Tap menu → "Add to Home screen"
   - **Safari**: Tap share → "Add to Home Screen"
   - **Firefox**: Tap menu → "Install"

### Desktop
1. Open the app in Chrome, Edge, or Safari
2. Look for install icon in address bar
3. Click "Install" when prompted

## 🎮 Usage Guide

### Getting Started
1. **First Visit**: App generates unique screen name (e.g., "DeepFisher892")
2. **Location**: Allow location access or select mock location for testing
3. **Create First Cast**: Share what's happening on the water!

### Creating Posts ("Casts")
- Click the text area: "What's biting today?"
- Write up to 200 characters
- Click "Cast" to share with nearby fishermen
- Posts are anonymous but tied to your screen name

### Interacting with Posts
- **Upvote/Downvote**: Use ⬆️ and ⬇️ buttons
- **Comment**: Click 💬 to view/add comments
- **Report**: Use 🚩 to flag inappropriate content
- **View Distance**: See how far away the post was made

### Customization
- **Screen Name**: Click 🔄 next to your name to regenerate
- **Location**: Use dropdown to test different locations
- **Dark Mode**: Toggle with 🌙/☀️ button

## 🔧 Technical Details

### Architecture
- **Frontend**: React (via CDN) + Tailwind CSS
- **Storage**: IndexedDB for local data persistence
- **PWA**: Service Worker + Web App Manifest
- **Deployment**: Static files on GitHub Pages

### File Structure
```
Hookr/
├── index.html              # Main entry point
├── src/
│   └── App.jsx            # React application code
├── public/
│   ├── manifest.json      # PWA manifest
│   ├── sw.js             # Service worker
│   └── icons/            # App icons (various sizes)
├── package.json          # Dependencies and scripts
├── .nojekyll            # GitHub Pages configuration
└── README.md            # This file
```

### Data Storage
- **Posts**: Stored in IndexedDB `posts` table
- **Comments**: Stored in IndexedDB `comments` table
- **Votes**: Stored in IndexedDB `votes` table
- **User Identity**: Stored in localStorage

### Browser Support
- Chrome 67+
- Firefox 60+
- Safari 11.1+
- Edge 79+

## 🌐 Offline Functionality

The app works offline with these capabilities:
- View previously loaded posts
- Create new posts (synced when online)
- Access cached app resources
- Maintain user session and preferences

## 🔐 Privacy & Security

- **Anonymous**: No personal information collected
- **Local Storage**: All data stored on user's device
- **No Tracking**: No analytics or user tracking
- **Secure**: HTTPS required for all PWA features

## 🐛 Troubleshooting

### Common Issues

**App won't install**:
- Ensure you're using HTTPS
- Try different browsers
- Check PWA requirements are met

**Location not working**:
- Allow location permissions
- Use mock location selector for testing
- Check HTTPS connection

**Posts not syncing**:
- Check internet connection
- Verify IndexedDB support
- Clear browser cache if needed

**Service Worker issues**:
- Hard refresh (Ctrl+Shift+R)
- Check browser console for errors
- Unregister and re-register service worker

### Debug Mode
Open browser dev tools and check:
- Console for error messages
- Application tab for PWA status
- Network tab for caching issues
- Storage tab for IndexedDB data

## 🎨 Customization

### Themes
The app includes ocean-themed styling that can be customized:
- Edit Tailwind configuration in `index.html`
- Modify color palette in CSS custom properties
- Update icons in `public/icons/` directory

### Mock Locations
Add new locations in `src/App.jsx`:
```javascript
const mockLocations = {
  'newlocation': { 
    lat: 40.7128, 
    lng: -74.0060, 
    name: 'New Location' 
  }
};
```

## 📈 Performance

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 80+
- **PWA**: 100

### Optimization Features
- Lazy loading of non-critical resources
- Service Worker caching strategy
- Efficient IndexedDB operations
- Optimized image assets

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit Pull Request

### Development Guidelines
- Follow React best practices
- Use semantic HTML for accessibility
- Test PWA features across browsers
- Maintain responsive design principles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For issues, questions, or contributions:
- Create an issue on GitHub
- Check existing issues for solutions
- Review troubleshooting section above

## 🎣 Happy Fishing!

Cast your line into the digital waters and connect with fellow anglers in your area. Tight lines! 

---

*Built with ❤️ for the fishing community*

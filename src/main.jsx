import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled promise rejection:', event.reason);
  
  // Check if it's a Firebase-related error
  if (event.reason?.code?.startsWith('auth/') || 
      event.reason?.code?.startsWith('firestore/') ||
      event.reason?.message?.includes('Firebase')) {
    console.warn('Firebase operation failed, app will continue in offline mode');
    event.preventDefault(); // Prevent default error handling
    return;
  }
  
  // For other critical errors, let them bubble up
  console.error('Critical unhandled rejection:', event.reason);
});

// Global error handler for JavaScript errors
window.addEventListener('error', function(event) {
  console.error('Global JavaScript error:', event.error);
  
  // Log error details for debugging
  if (event.error?.stack) {
    console.error('Stack trace:', event.error.stack);
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// Debug monitoring script to capture application errors
// This script will be injected into the browser to monitor for crashes

(function() {
    const errorLog = [];
    const networkLog = [];
    const performanceLog = [];
    
    // Capture console errors
    const originalConsoleError = console.error;
    console.error = function(...args) {
        errorLog.push({
            type: 'console.error',
            timestamp: new Date().toISOString(),
            message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '),
            stack: new Error().stack
        });
        originalConsoleError.apply(console, args);
    };
    
    // Capture console warnings
    const originalConsoleWarn = console.warn;
    console.warn = function(...args) {
        errorLog.push({
            type: 'console.warn',
            timestamp: new Date().toISOString(),
            message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ')
        });
        originalConsoleWarn.apply(console, args);
    };
    
    // Capture unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
        errorLog.push({
            type: 'unhandledrejection',
            timestamp: new Date().toISOString(),
            reason: event.reason,
            stack: event.reason?.stack || 'No stack trace available'
        });
        console.error('Unhandled promise rejection:', event.reason);
    });
    
    // Capture JavaScript errors
    window.addEventListener('error', function(event) {
        errorLog.push({
            type: 'javascript_error',
            timestamp: new Date().toISOString(),
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            stack: event.error?.stack || 'No stack trace available'
        });
    });
    
    // Monitor network requests
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        const startTime = Date.now();
        return originalFetch.apply(this, args)
            .then(response => {
                networkLog.push({
                    type: 'fetch',
                    timestamp: new Date().toISOString(),
                    url: args[0],
                    method: args[1]?.method || 'GET',
                    status: response.status,
                    statusText: response.statusText,
                    duration: Date.now() - startTime,
                    ok: response.ok
                });
                return response;
            })
            .catch(error => {
                networkLog.push({
                    type: 'fetch_error',
                    timestamp: new Date().toISOString(),
                    url: args[0],
                    method: args[1]?.method || 'GET',
                    error: error.message,
                    duration: Date.now() - startTime
                });
                throw error;
            });
    };
    
    // Monitor XMLHttpRequest
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;
    
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        this._debugMethod = method;
        this._debugUrl = url;
        this._debugStartTime = Date.now();
        return originalXHROpen.apply(this, [method, url, ...args]);
    };
    
    XMLHttpRequest.prototype.send = function(...args) {
        this.addEventListener('load', function() {
            networkLog.push({
                type: 'xhr',
                timestamp: new Date().toISOString(),
                url: this._debugUrl,
                method: this._debugMethod,
                status: this.status,
                statusText: this.statusText,
                duration: Date.now() - this._debugStartTime,
                response: this.responseText?.substring(0, 1000) // First 1000 chars
            });
        });
        
        this.addEventListener('error', function() {
            networkLog.push({
                type: 'xhr_error',
                timestamp: new Date().toISOString(),
                url: this._debugUrl,
                method: this._debugMethod,
                error: 'Network error',
                duration: Date.now() - this._debugStartTime
            });
        });
        
        return originalXHRSend.apply(this, args);
    };
    
    // Export logs for inspection
    window.getDebugLogs = function() {
        return {
            errors: errorLog,
            network: networkLog,
            performance: {
                timing: performance.timing,
                navigation: performance.navigation,
                memory: performance.memory
            },
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
        };
    };
    
    // Auto-save logs periodically
    setInterval(function() {
        if (errorLog.length > 0 || networkLog.length > 0) {
            localStorage.setItem('riprap_debug_logs', JSON.stringify(window.getDebugLogs()));
        }
    }, 5000);
    
    console.log('🔍 Debug monitoring initialized');
})();
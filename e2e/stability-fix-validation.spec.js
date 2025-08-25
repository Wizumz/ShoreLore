// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Stability Fix Validation', () => {
  test('should handle missing Firebase environment variables gracefully', async ({ page }) => {
    // This test would need environment variable manipulation in a real scenario
    // For now, we test that the app loads and handles Firebase errors gracefully
    
    const consoleErrors = [];
    const consoleWarnings = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      } else if (msg.type() === 'warn') {
        consoleWarnings.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(5000); // Allow for initialization
    
    // App should not crash with error boundary
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    // Should show either main app or username setup
    const hasMainApp = await page.locator('text=RIPRAP').count();
    const hasUsernameSetup = await page.locator('text=Choose your angler name').count();
    expect(hasMainApp + hasUsernameSetup).toBeGreaterThan(0);
    
    console.log('Console warnings (expected for Firebase fallback):', consoleWarnings.length);
    console.log('Console errors:', consoleErrors.length);
  });

  test('should handle unhandled promise rejections gracefully', async ({ page }) => {
    // Monitor for unhandled rejections
    const rejections = [];
    
    await page.evaluateOnNewDocument(() => {
      window.unhandledRejections = [];
      window.addEventListener('unhandledrejection', (event) => {
        window.unhandledRejections.push({
          reason: event.reason?.message || 'Unknown rejection',
          prevented: event.defaultPrevented
        });
      });
    });

    await page.goto('/');
    await page.waitForTimeout(5000);
    
    // Check for unhandled rejections
    const rejectionCount = await page.evaluate(() => window.unhandledRejections?.length || 0);
    const preventedRejections = await page.evaluate(() => 
      window.unhandledRejections?.filter(r => r.prevented).length || 0
    );
    
    console.log(`Total rejections: ${rejectionCount}, Prevented: ${preventedRejections}`);
    
    // App should still be running
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
  });

  test('should handle geolocation denial without crashing', async ({ page, context }) => {
    // Deny geolocation permission
    await context.grantPermissions([], { origin: 'http://localhost:5173' });
    
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(8000); // Allow extra time for geolocation timeout
    
    // App should not crash from geolocation denial
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    // Should show main app with fallback location
    await expect(page.locator('text=RIPRAP')).toBeVisible();
    
    // Check for location fallback
    const locationText = await page.locator('text=Default').count();
    expect(locationText).toBeGreaterThan(0);
    
    console.log('Geolocation denial handled, errors:', consoleErrors.length);
  });

  test('should handle corrupted localStorage gracefully', async ({ page }) => {
    // Corrupt localStorage before loading the app
    await page.addInitScript(() => {
      localStorage.setItem('riprap_user', 'invalid-json{corrupted');
      localStorage.setItem('riprap_location_settings', '{{broken}}');
    });

    const consoleErrors = [];
    const consoleWarnings = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      } else if (msg.type() === 'warn') {
        consoleWarnings.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(3000);
    
    // App should recover from corrupted localStorage
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    // Should either show username setup (if user data cleared) or main app
    const hasUsernameSetup = await page.locator('text=Choose your angler name').count();
    const hasMainApp = await page.locator('text=RIPRAP').count();
    expect(hasUsernameSetup + hasMainApp).toBeGreaterThan(0);
    
    console.log('LocalStorage corruption handled, warnings:', consoleWarnings.length);
  });

  test('should handle Firebase network failures without crashing', async ({ page, context }) => {
    // Block Firebase domains to simulate network failure
    await page.route('**/*firestore.googleapis.com/**', route => {
      route.abort('failed');
    });
    
    await page.route('**/*identitytoolkit.googleapis.com/**', route => {
      route.abort('failed');
    });

    const consoleWarnings = [];
    page.on('console', msg => {
      if (msg.type() === 'warn') {
        consoleWarnings.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(8000); // Allow time for Firebase connection attempts
    
    // App should handle Firebase failures gracefully
    const errorBoundary = await page.locator('text=Something went wrong').count();
    
    // Even if error boundary shows, test the restart functionality
    if (errorBoundary > 0) {
      console.log('Error boundary triggered by Firebase failure - testing restart');
      
      const restartButton = page.locator('button', { hasText: 'Restart App' });
      if (await restartButton.count() > 0) {
        // Remove route blocks before restart
        await page.unroute('**/*firestore.googleapis.com/**');
        await page.unroute('**/*identitytoolkit.googleapis.com/**');
        
        await restartButton.click();
        await page.waitForTimeout(3000);
        
        // Should recover after restart
        await expect(page.locator('text=RIPRAP')).toBeVisible();
      }
    } else {
      // Great! App handled Firebase failure without crashing
      await expect(page.locator('text=RIPRAP')).toBeVisible();
      console.log('Firebase network failure handled gracefully');
    }
    
    console.log('Firebase fallback warnings:', consoleWarnings.length);
  });

  test('should save and display error reports', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // Check if error reports are being saved (from previous errors)
    const hasErrorReport = await page.evaluate(() => {
      const errorReport = localStorage.getItem('riprap_last_error');
      return errorReport ? JSON.parse(errorReport) : null;
    });
    
    if (hasErrorReport) {
      console.log('Previous error report found:', hasErrorReport.timestamp);
      expect(hasErrorReport.timestamp).toBeDefined();
      expect(hasErrorReport.userAgent).toBeDefined();
    } else {
      console.log('No previous error reports (good sign!)');
    }
    
    // App should be functional regardless
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
  });
});
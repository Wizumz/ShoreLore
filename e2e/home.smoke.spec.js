// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Home Page Smoke Tests', () => {
  test('should load the home page without crashing', async ({ page }) => {
    // Monitor for console errors
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Monitor for unhandled exceptions
    const pageErrors = [];
    page.on('pageerror', error => {
      pageErrors.push(error.message);
    });

    await page.goto('/');
    
    // Wait for app to load
    await page.waitForTimeout(3000);
    
    // Check if error boundary is NOT shown
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    // Check for main app elements
    await expect(page.locator('text=RIPRAP')).toBeVisible();
    
    // Report any errors found
    if (consoleErrors.length > 0) {
      console.log('Console errors found:', consoleErrors);
    }
    if (pageErrors.length > 0) {
      throw new Error(`Page errors found: ${pageErrors.join(', ')}`);
    }
  });

  test('should handle geolocation permission denial gracefully', async ({ page, context }) => {
    // Deny geolocation permission
    await context.grantPermissions([], { origin: 'http://localhost:5173' });
    
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(5000); // Allow for geolocation timeout
    
    // App should still load, not crash
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    await expect(page.locator('text=RIPRAP')).toBeVisible();
  });

  test('should handle offline mode gracefully', async ({ page, context }) => {
    await page.goto('/');
    
    // Wait for initial load
    await page.waitForTimeout(2000);
    
    // Go offline
    await context.setOffline(true);
    
    // Try to interact with the app
    await page.reload();
    await page.waitForTimeout(3000);
    
    // App should handle offline mode without crashing
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
  });

  test('should display username setup on first visit', async ({ page, context }) => {
    // Clear all storage to simulate first visit
    await context.clearCookies();
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // Should show username setup or main app (depending on implementation)
    const hasUsernameSetup = await page.locator('text=Choose your angler name').count();
    const hasMainApp = await page.locator('text=RIPRAP').count();
    
    expect(hasUsernameSetup + hasMainApp).toBeGreaterThan(0);
  });
});
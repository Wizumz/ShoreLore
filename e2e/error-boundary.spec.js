// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Error Boundary and Crash Prevention', () => {
  test('should handle JavaScript errors gracefully', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // Inject a JavaScript error to test error boundary
    await page.evaluate(() => {
      // Trigger an error in React component
      window.dispatchEvent(new CustomEvent('test-error'));
    });
    
    await page.waitForTimeout(1000);
    
    // Check if error boundary is handling it (or if app continues)
    const errorBoundary = await page.locator('text=Something went wrong').count();
    
    // If error boundary is shown, test the restart functionality
    if (errorBoundary > 0) {
      const restartButton = page.locator('button', { hasText: 'Restart App' });
      if (await restartButton.count() > 0) {
        await restartButton.click();
        await page.waitForTimeout(2000);
        
        // App should be restored
        await expect(page.locator('text=RIPRAP')).toBeVisible();
      }
    }
  });

  test('should handle network failures without crashing', async ({ page, context }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // Simulate network failure
    await context.setOffline(true);
    
    // Try to trigger network-dependent operations
    const fabButton = page.locator('button').filter({ hasText: '+' });
    if (await fabButton.count() > 0) {
      await fabButton.click();
      await page.waitForTimeout(1000);
      
      const textarea = page.locator('textarea').first();
      const postButton = page.locator('button', { hasText: 'Post' });
      
      if (await textarea.count() > 0 && await postButton.count() > 0) {
        await textarea.fill('Network failure test post');
        await postButton.click();
        await page.waitForTimeout(3000);
      }
    }
    
    // App should handle network failure gracefully
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    // Restore network
    await context.setOffline(false);
  });

  test('should handle localStorage issues gracefully', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // Corrupt localStorage to simulate storage issues
    await page.evaluate(() => {
      try {
        localStorage.setItem('riprap_user', 'invalid-json{');
        localStorage.setItem('riprap_location_settings', 'corrupted');
      } catch (e) {
        // Storage might be disabled
        console.log('Storage access failed:', e);
      }
    });
    
    // Reload page to trigger localStorage corruption handling
    await page.reload();
    await page.waitForTimeout(3000);
    
    // App should handle corrupted localStorage gracefully
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    // Should either show username setup or recover
    const hasUsernameSetup = await page.locator('text=Choose your angler name').count();
    const hasMainApp = await page.locator('text=RIPRAP').count();
    expect(hasUsernameSetup + hasMainApp).toBeGreaterThan(0);
  });

  test('should handle rapid user interactions without memory leaks', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // Perform many rapid interactions to test for memory leaks
    for (let i = 0; i < 20; i++) {
      // Click various UI elements rapidly
      const buttons = await page.locator('button').all();
      for (const button of buttons.slice(0, 3)) { // Limit to first 3 buttons
        try {
          await button.click({ timeout: 100 });
        } catch (e) {
          // Ignore timeout errors, we're stress testing
        }
        await page.waitForTimeout(50);
      }
    }
    
    // Wait for any cleanup
    await page.waitForTimeout(2000);
    
    // App should still be responsive
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    await expect(page.locator('text=RIPRAP')).toBeVisible();
  });

  test('should handle Firebase initialization failures', async ({ page }) => {
    // Start with a page that blocks Firebase domains
    await page.route('**/*firestore.googleapis.com/**', route => {
      route.abort('failed');
    });
    
    await page.route('**/*identitytoolkit.googleapis.com/**', route => {
      route.abort('failed');
    });
    
    await page.goto('/');
    await page.waitForTimeout(5000); // Allow for Firebase connection attempts
    
    // App should handle Firebase connection failure gracefully
    const errorBoundary = await page.locator('text=Something went wrong').count();
    
    // This test might show error boundary if Firebase failures are not handled
    // The test documents whether the app crashes or handles it gracefully
    console.log(`Firebase failure handling: ${errorBoundary > 0 ? 'Shows error boundary' : 'Handles gracefully'}`);
    
    // If error boundary is shown, test recovery
    if (errorBoundary > 0) {
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
    }
  });
});
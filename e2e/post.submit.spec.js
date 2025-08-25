// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Post Submission and Interaction', () => {
  test.beforeEach(async ({ page, context }) => {
    // Grant geolocation permission for consistent testing
    await context.grantPermissions(['geolocation'], { origin: 'http://localhost:5173' });
    
    // Set a mock location
    await context.setGeolocation({ latitude: 42.3601, longitude: -71.0589 });
    
    await page.goto('/');
    await page.waitForTimeout(3000); // Allow for initialization
  });

  test('should open post creation modal without errors', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Look for the floating action button (+ button)
    const fabButton = page.locator('button').filter({ hasText: '+' });
    
    if (await fabButton.count() > 0) {
      await fabButton.click();
      await page.waitForTimeout(1000);
      
      // Check if modal opened (look for textarea or post content)
      const hasTextarea = await page.locator('textarea').count();
      const hasPostButton = await page.locator('button', { hasText: 'Post' }).count();
      
      expect(hasTextarea + hasPostButton).toBeGreaterThan(0);
      
      // Close modal if it opened
      const cancelButton = page.locator('button', { hasText: 'Cancel' });
      if (await cancelButton.count() > 0) {
        await cancelButton.click();
      }
    }
    
    // Ensure no crashes
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    if (consoleErrors.length > 0) {
      console.log('Console errors during post modal:', consoleErrors);
    }
  });

  test('should handle post content input validation', async ({ page }) => {
    const fabButton = page.locator('button').filter({ hasText: '+' });
    
    if (await fabButton.count() > 0) {
      await fabButton.click();
      await page.waitForTimeout(1000);
      
      const textarea = page.locator('textarea').first();
      if (await textarea.count() > 0) {
        // Test empty post submission
        const postButton = page.locator('button', { hasText: 'Post' });
        if (await postButton.count() > 0) {
          const isDisabled = await postButton.isDisabled();
          expect(isDisabled).toBe(true); // Should be disabled for empty content
        }
        
        // Test valid content
        await textarea.fill('Test fishing report from automated testing');
        await page.waitForTimeout(500);
        
        if (await postButton.count() > 0) {
          const isEnabled = await postButton.isEnabled();
          expect(isEnabled).toBe(true);
        }
        
        // Close without submitting
        const cancelButton = page.locator('button', { hasText: 'Cancel' });
        if (await cancelButton.count() > 0) {
          await cancelButton.click();
        }
      }
    }
    
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
  });

  test('should handle post submission gracefully (may fail due to Firebase)', async ({ page }) => {
    const consoleErrors = [];
    const networkErrors = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    page.on('response', response => {
      if (!response.ok()) {
        networkErrors.push(`${response.status()} ${response.url()}`);
      }
    });

    const fabButton = page.locator('button').filter({ hasText: '+' });
    
    if (await fabButton.count() > 0) {
      await fabButton.click();
      await page.waitForTimeout(1000);
      
      const textarea = page.locator('textarea').first();
      const postButton = page.locator('button', { hasText: 'Post' });
      
      if (await textarea.count() > 0 && await postButton.count() > 0) {
        await textarea.fill('E2E Test Post - Safe to ignore');
        await page.waitForTimeout(500);
        
        // Submit the post (this may fail due to Firebase issues, but shouldn't crash)
        await postButton.click();
        
        // Wait for submission attempt
        await page.waitForTimeout(5000);
        
        // App should handle success OR failure gracefully
        const errorBoundary = await page.locator('text=Something went wrong').count();
        expect(errorBoundary).toBe(0);
        
        // Log any network issues (expected in test environment)
        if (networkErrors.length > 0) {
          console.log('Network errors (expected in test):', networkErrors);
        }
        
        if (consoleErrors.length > 0) {
          console.log('Console errors during post submission:', consoleErrors);
        }
      }
    }
  });

  test('should handle voting interactions without crashing', async ({ page }) => {
    // Wait for any posts to load
    await page.waitForTimeout(3000);
    
    // Look for vote buttons (▲ and ▼)
    const upvoteButtons = page.locator('button').filter({ hasText: /▲/ });
    const downvoteButtons = page.locator('button').filter({ hasText: /▼/ });
    
    const upvoteCount = await upvoteButtons.count();
    const downvoteCount = await downvoteButtons.count();
    
    if (upvoteCount > 0) {
      // Try clicking first upvote button
      await upvoteButtons.first().click();
      await page.waitForTimeout(1000);
    }
    
    if (downvoteCount > 0) {
      // Try clicking first downvote button  
      await downvoteButtons.first().click();
      await page.waitForTimeout(1000);
    }
    
    // Ensure no crashes regardless of network state
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
  });
});
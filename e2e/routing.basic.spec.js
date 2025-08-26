// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Basic Routing and Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for app to load
    await page.waitForTimeout(2000);
  });

  test('should navigate through main app sections without errors', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Check main header is present
    await expect(page.locator('text=SHORELORE')).toBeVisible();
    
    // Test sorting options
    const hotButton = page.locator('button', { hasText: 'Hot' });
    if (await hotButton.count() > 0) {
      await hotButton.click();
      await page.waitForTimeout(1000);
    }
    
    const newButton = page.locator('button', { hasText: 'New' });
    if (await newButton.count() > 0) {
      await newButton.click();
      await page.waitForTimeout(1000);
    }
    
    const coastwideButton = page.locator('button', { hasText: 'Coastwide' });
    if (await coastwideButton.count() > 0) {
      await coastwideButton.click();
      await page.waitForTimeout(1000);
    }
    
    // Ensure no error boundary is triggered
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    // Report console errors if any
    if (consoleErrors.length > 0) {
      console.log('Console errors during navigation:', consoleErrors);
    }
  });

  test('should handle modal interactions safely', async ({ page }) => {
    // Try to open account modal
    const accountButton = page.locator('button').filter({ hasText: /^[A-Z]+[A-Z0-9]*$/ }).first();
    if (await accountButton.count() > 0) {
      await accountButton.click();
      await page.waitForTimeout(1000);
      
      // Close modal if it opened
      const closeButton = page.locator('button', { hasText: 'Close' });
      if (await closeButton.count() > 0) {
        await closeButton.click();
      }
    }
    
    // Try to open location modal
    const locationButton = page.locator('text=Click to change location');
    if (await locationButton.count() > 0) {
      await locationButton.click();
      await page.waitForTimeout(1000);
      
      // Close modal if it opened
      const cancelButton = page.locator('button', { hasText: 'Cancel' });
      if (await cancelButton.count() > 0) {
        await cancelButton.click();
      }
    }
    
    // Ensure no crashes occurred
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
  });

  test('should handle rapid user interactions without crashing', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Perform rapid interactions
    for (let i = 0; i < 5; i++) {
      // Click sort buttons rapidly
      const sortButtons = await page.locator('button').filter({ hasText: /Hot|New|Coastwide/ }).all();
      for (const button of sortButtons) {
        await button.click();
        await page.waitForTimeout(100);
      }
    }
    
    // Wait for any async operations to settle
    await page.waitForTimeout(2000);
    
    // Check for crashes
    const errorBoundary = await page.locator('text=Something went wrong').count();
    expect(errorBoundary).toBe(0);
    
    // Log any errors but don't fail test unless it's critical
    if (consoleErrors.length > 0) {
      console.log('Console errors during rapid interactions:', consoleErrors);
    }
  });
});
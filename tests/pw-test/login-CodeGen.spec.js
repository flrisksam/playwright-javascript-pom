import { test, expect } from '@playwright/test';

test('test code gen', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});

test('test record while running', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
  await this.page.pause() //Open Playwright inspector
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.close(); // Close the page to end the test 
});
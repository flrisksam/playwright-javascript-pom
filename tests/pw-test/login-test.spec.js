import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';

let loginPage;
let menuPage;
let context;
let page;

test.beforeAll(async ({ browser }) =>{
    context = await browser.newContext();
    page = await context.newPage();
    await context.tracing.start({ screenshots: true, snapshots: true });
    console.log('Page Object Initialized');
})

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    menuPage = new MenuPage(page);
    await menuPage.gotoLogin();
    await expect(page).toHaveTitle('The Internet');
})

test.afterEach(async ({ page }) => {
    await page.reload();
})

test.afterAll( async () => {
    await context.tracing.stop({ path: 'trace/login-test-trace.zip' });
    await page.close();
});

test.only('Valid Login', async ({ page }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

test.describe('Invalid Login Tests', () => {

    test('Invalid Username Login', async ({ page }) => {
        await loginPage.login('1tomsmith', 'SuperSecretPassword!');
        expect(await loginPage.getFlashMessageText()).toContain('Your username is invalid!');
    });

    test('Invalid Password Login', async ({ page }) => {
        await loginPage.login('tomsmith', '1SuperSecretPassword!');
        expect(await loginPage.getFlashMessageText()).toContain('Your password is invalid!');
    });

    test('Invalid username & password Login', async ({ page }) => {
        await loginPage.login('1tomsmith', '1SuperSecretPassword!');
        expect(await loginPage.getFlashMessageText()).toContain('Your username is invalid!');
    });

    test('Empty username & password Login', async ({ page }) => {
        await loginPage.login(null, null);
        expect(await loginPage.getFlashMessageText()).toContain('Your username is invalid!');
    });
});
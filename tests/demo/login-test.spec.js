import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';

test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);

    await menuPage.gotoLogin();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
});
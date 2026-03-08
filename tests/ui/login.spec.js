// login.spec.js
const { test, expect } = require('@playwright/test');

const URL = 'https://www.saucedemo.com/';

async function login(page, username, password) {
  await page.fill('#user-name', username ?? '');
  await page.fill('#password', password ?? '');
  await page.click('#login-button');
}


// Positive Login Tests

test.describe('Positive Login Tests', () => {
  const positiveData = [
    { name: 'standard user', username: 'standard_user', password: 'secret_sauce' }
  ];

  for (const tc of positiveData) {
    test(`Should pass: ${tc.name}`, async ({ page }) => {
      await page.goto(URL);
      await login(page, tc.username, tc.password);

      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      const title = page.locator('.title');
      await expect(title).toHaveText('Products');
    });
  }
});


// Negative Login Tests

test.describe('Negative Login Tests', () => {
  const negativeData = [
    {
      name: 'wrong password',
      username: 'standard_user',
      password: 'wrong_password',
      expectedError: 'Epic sadface: Username and password do not match any user in this service'
    },
    {
      name: 'wrong username',
      username: 'wrong_user',
      password: 'secret_sauce',
      expectedError: 'Epic sadface: Username and password do not match any user in this service'
    },
    {
      name: 'empty username',
      username: '',
      password: 'secret_sauce',
      expectedError: 'Epic sadface: Username is required'
    },
    {
      name: 'empty password',
      username: 'standard_user',
      password: '',
      expectedError: 'Epic sadface: Password is required'
    },
    {
      name: 'locked out user',
      username: 'locked_out_user',
      password: 'secret_sauce',
      expectedError: 'Epic sadface: Sorry, this user has been locked out.'
    }
  ];

  for (const tc of negativeData) {
    test(`Should fail: ${tc.name}`, async ({ page }) => {
      await page.goto(URL);
      await login(page, tc.username, tc.password);

      const errorBox = page.locator('.error-message-container.error');
      await expect(errorBox).toBeVisible();
      await expect(errorBox).toHaveText(tc.expectedError);
      await expect(page).toHaveURL(/^https:\/\/www\.saucedemo\.com\/?$/);
    });
  }
});
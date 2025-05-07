const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage'); // Assuming the LoginPage is in the 'pages' folder

test.describe('Login Page Tests', () => {
  let loginPage;

  // Before each test, initialize the login page and navigate to it
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate(); // Navigate to the login page before each test
  });

  // Test case 1: Should login successfully with valid credentials
  test('should login with valid credentials', async ({ page }) => {
    await loginPage.loginWithValidCredentials(); // Login with valid credentials

    const header = await loginPage.getHeader();
    await expect(header).toContainText('Swag Labs'); // Verify the "Swag Labs" header is visible after successful login
  });

  // Test case 2: Should show an error message with invalid credentials
  test('should show error for invalid credentials', async ({ page }) => {
    await loginPage.loginWithInvalidCredentials(); // Login with invalid credentials

    const errorMessage = await loginPage.getErrorMessage();
    await expect(errorMessage).toBeVisible(); // Ensure error message is visible
    await expect(errorMessage).toContainText('Epic sadface: Username and password do not match any user');
  });

  // Test case 3: Should show an error message for locked out users
  test('should show error for locked-out user', async ({ page }) => {
    await loginPage.page.fill(loginPage.usernameField, 'locked_out_user'); // Use locked-out user credentials
    await loginPage.page.fill(loginPage.passwordField, 'secret_sauce');
    await loginPage.page.click(loginPage.loginButton);

    const errorMessage = await loginPage.getErrorMessage();
    await expect(errorMessage).toBeVisible(); // Ensure error message is visible
    await expect(errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out');
  });
});

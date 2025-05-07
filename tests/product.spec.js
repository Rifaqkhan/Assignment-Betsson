const { test, expect } = require('@playwright/test');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const LoginPage = require('../pages/LoginPage'); // Import the new LoginPage class

test.describe('Product Tests', () => {
  let loginPage;
  let productPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);

    // Log in before each test
    await loginPage.navigate();
    await loginPage.loginWithValidCredentials(); // Use valid login credentials
  });

  test('Add product to the cart', async () => {
    await productPage.navigate();
    await productPage.addProductToCart('Sauce Labs Backpack');
    await productPage.goToCart();
    // Expect the cart item count to be '1' as a string
    const itemCount = await cartPage.getCartItemCount();
    await expect(itemCount).toBe('1');
  });

  test('Cart page displays correct products', async () => {
    await productPage.navigate();
    await productPage.addProductToCart('Sauce Labs Backpack');
    await productPage.goToCart();
    const items = await cartPage.getCartItemNames();
    expect(items).toContain('Sauce Labs Backpack');
  });

  test('Proceed to checkout', async ({ page }) => {
    await productPage.navigate();
    await productPage.addProductToCart('Sauce Labs Backpack');
    await productPage.goToCart();
    await cartPage.proceedToCheckout();
    await expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html');
  });
});

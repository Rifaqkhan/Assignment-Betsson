class CartPage {
    constructor(page) {
      this.page = page;
      this.checkoutButton = 'button#checkout';
      this.cartItemCount = '[data-test="shopping-cart-badge"]';
      this.cartItems = '[data-test="item-4-title-link"]';
    }
  
    // Navigate to the cart page
    async navigate() {
      await this.page.goto('https://www.saucedemo.com/cart.html');
    }
  
    // Get the cart item count
    async getCartItemCount() {
      return await this.page.locator(this.cartItemCount).textContent();
    }
  
    // Get the cart items' names
    async getCartItemNames() {
      const items = await this.page.locator(this.cartItems).allTextContents();
      return items;
    }
  
    // Proceed to checkout
    async proceedToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  }
  
  module.exports = CartPage;
  
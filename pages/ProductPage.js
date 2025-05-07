class ProductPage {
    constructor(page) {
      this.page = page;
      this.productButton = 'button[id="add-to-cart-sauce-labs-backpack"]';
      this.cartButton = 'a.shopping_cart_link';
    }
  
    // Navigate to the product page
    async navigate() {
      await this.page.goto('https://www.saucedemo.com/inventory.html');
    }
  
    // Add a product to the cart
    async addProductToCart(productName) {
      const productSelector = `button[id="add-to-cart-${productName.replace(/\s+/g, '-').toLowerCase()}"]`;
      await this.page.click(productSelector);
    }
  
    // Go to the cart page
    async goToCart() {
      await this.page.click(this.cartButton);
    }
  }
  
  module.exports = ProductPage;
  
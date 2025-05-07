class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = 'input#user-name';
    this.passwordField = 'input#password';
    this.loginButton = 'input#login-button';
    this.errorMessage = '[data-test="error"]';
    this.headerLocator = '[data-test="primary-header"]';  // Header locator for Swag Labs
  }

  // Navigate to the login page
  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Login with valid credentials
  async loginWithValidCredentials() {
    await this.page.fill(this.usernameField, 'standard_user');
    await this.page.fill(this.passwordField, 'secret_sauce');
    await this.page.click(this.loginButton);
  }

  // Login with invalid credentials
  async loginWithInvalidCredentials() {
    await this.page.fill(this.usernameField, 'invalid_user');
    await this.page.fill(this.passwordField, 'wrong_password');
    await this.page.click(this.loginButton);
  }

  // Get the error message if login fails
  async getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }

  // Get the login button to check visibility
  async getLoginButton() {
    return this.page.locator(this.loginButton);
  }

  // Get the header "Swag Labs"
  async getHeader() {
    return this.page.locator(this.headerLocator);  // Returning Locator for header
  }
}

module.exports = LoginPage;

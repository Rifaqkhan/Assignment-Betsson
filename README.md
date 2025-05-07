UI Testing Framework for Sauce Demo Application
This folder contains the Playwright-based UI End-to-End (E2E) tests for the Sauce Demo Application.

Features Tested
Login: Validates successful login with correct credentials and failure scenarios for invalid credentials and locked-out users.

Inventory: Ensures that products are displayed correctly in the inventory page.

Technologies Used
Playwright: For automating browser interactions.

Node.js: JavaScript runtime.

Setup
1. Clone the repository:
git clone https://github.com/Rifaqkhan/Assignment-Betsson.git
2. Install Playwright
npm install playwright@latest
4. Run the UI tests:
npx playwright test 
Test Results
After the tests are executed, results are available in the test-results folder. You can also generate HTML reports for easy viewing.

First of all i want to let you know that it was my first time using Playwright and it was very fast smooth, before that i used Cypress only.

Key Components
Tests Folder (/tests)
The /tests directory contains test files that focus on a particular feature or functionality. For example, login.spec.js contains tests for login behavior.

Test Files: Each file represents a set of test cases grouped by a common theme, such as login or inventory.

Test Methods: Each test file contains several test cases which perform assertions to validate the functionality of the application.

Page Object Model (/pages)
The /pages directory holds the Page Object Model (POM) files, which abstract the interaction logic for different pages of the web application.

Page Object Class (LoginPage.js): This class encapsulates the actions a user can perform on the login page, such as entering credentials, clicking the login button, and checking for error messages. By using POM, test scripts remain clean and readable, while page logic is reusable.

Playwright Configuration (playwright.config.js)
The Playwright configuration file contains settings related to browser execution, timeouts, and other configurations for running tests on multiple browsers.

Browsers: The configuration can specify which browsers (e.g., Chromium, Firefox, WebKit) will be used for test execution.

Timeouts and Retries: Configurations for retrying failed tests and timeouts for certain actions.

Test Workflow
Setup
Before each test case, the beforeEach hook is used to initialize the browser instance and navigate to the target application (https://www.saucedemo.com/).

Test Execution
The test steps interact with the application via the page objects. For example, for login functionality, the LoginPage class is used to fill in the username and password, click the login button, and validate the result.

Assertions
Playwright provides built-in assertions to verify the state of the application. In addition, we use assertions to check visibility of elements and validate page navigation and data integrity.

Page Object Model (POM) Design Pattern
The Page Object Model (POM) pattern is utilized to structure the framework. This pattern promotes separation of concerns, which makes tests more maintainable and readable.

Page Object Class: Each page (e.g., login page) is represented by a class with methods to interact with the UI elements (e.g., input fields, buttons).

Test Class: The test class uses these methods from the Page Object to perform high-level actions, such as logging in or verifying page contents.

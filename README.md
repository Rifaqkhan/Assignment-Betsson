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


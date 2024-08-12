# Cypress Automation Project

## Overview

This project contains end-to-end test automation scripts using Cypress. The tests cover both UI and API functionalities to ensure the quality and reliability of the application. The project follows best practices for test automation and uses `cypress.config.js` for configuration.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Configuration

Configuration is managed through the cypress.config.js file. Customize this file to suit different environments or testing requirements. For further details on configuration options, please refer to the Cypress Configuration Documentation.

## Project Structure

The project is organized as follows:

- cypress/: Contains all test-related files and configurations.

   1. e2e/: Houses test cases, organized by UI and API categories.
   2. support/: Includes utility functions and custom commands.
   3. fixtures/: Stores test data and mock responses.
   4. Pages/: Containg pages withing the locatores and actions
   5. Reports/: Execution Report html
 
## Test Execution Overview

The test suite for the FAO Schwarz shopping flow is organized into four separate test files located inside the e2e folder. These test files are designed to validate different aspects of the application's functionality, ensuring that both individual components and the overall shopping flow work as expected.

Test Suites

**TestUI_E2E_Flow.cy.js**
   This test suite encompasses the complete end-to-end flow of searching for a product and adding it to the cart. It verifies the entire user journey from navigating to the site to validating the cart contents.
   
**TestSearchResult.cy.js**
   This test suite focuses on verifying the search results functionality. It ensures that the search results appear correctly when a query is entered.

**TestSearchProduct.cy.js**
   This suite is dedicated to testing the product selection process from the search results. It checks that a product can be successfully selected and that the product display page loads correctly.

**TestSearch.cy.js**
   This suite tests the search functionality itself, validating that the search layout loads and that users can perform searches successfully.

## Test Flow and Assertions

Below are the steps and expected results for the full test flow implemented in the TestUI_E2E_Flow.cy.js:

   1. Navigate to the Site URL: https://faoschwarz.com/search?q=cars
   2. Expected Result: Home Page should load properly.
   3. Click on Search
   4. Expected Result: Search layout should load.
   5. Search for 'cars'
   6. Expected Result: Search results should appear on the page
   7. Sort by ‘low to high’ in Pric
   8. Expected Result: Results should get sorted accurately.
   9. Click on Any Product
   10. Expected Result: Product display page should load.
   11. Increase the Number of Items to 3
   12. Expected Result: Item count should increase to 3.
   13. Click on Add to Cart
   14. Expected Result: Cart slider pop-up should appear.
   15. Validate the Cart is Showing Correct Product Info
   16. Assertions/Expected Results:
   17. The number of added items should be correct
   18. Subtotal should be updated accordingly.
   19. The real-time chat icon should be displayed on the popup.

 
## Troubleshooting

- Non-clickable elements: For elements that become visible only on hover, simulate hover actions using appropriate Cypress commands.
- Shadow DOM elements: Use suitable Cypress methods to interact with elements within shadow DOM.

## Contact

For inquiries or support, please contact preethilbandara@gmail.com.




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
 
## Troubleshooting

- Non-clickable elements: For elements that become visible only on hover, simulate hover actions using appropriate Cypress commands.
- Shadow DOM elements: Use suitable Cypress methods to interact with elements within shadow DOM.

## Contact

For inquiries or support, please contact preethilbandara@gmail.com.




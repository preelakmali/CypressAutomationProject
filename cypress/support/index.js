Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error to the console (optional)
    console.error('Uncaught exception:', err);
    // Returning false here prevents Cypress from failing the test
    return false;
  });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    reporter: 'cypress-mochawesome-reporter', // for html reporter
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);// for html reporter
      
    },
    supportFile: "cypress/support/index.js",
  },
});

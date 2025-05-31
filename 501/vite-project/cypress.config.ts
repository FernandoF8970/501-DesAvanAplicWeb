const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/",
    setupNodeEvents(on, config) {
    },
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.ts",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: 'cypress/support/component.ts',
  },
});

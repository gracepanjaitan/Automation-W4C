const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    baseUrl: "https://api-dev.waste4change.com",
    loginUrl: "/api/v2/seller/login",
  },
});

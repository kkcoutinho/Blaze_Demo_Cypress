const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false, // desabilita a segurança do Chrome
    viewportHeight: 1080, // altura em pixels
    viewportWidth: 1920, // largura em pixels --> Full HD
    baseUrl: "https://www.blazedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

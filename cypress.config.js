const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      config.reporter = 'mocha-junit-reporter';
      config.reporterOptions = {
        mochaFile: 'cypress/results/junit-[hash].xml',
        toConsole: true,
// implement node event listeners here
    };
    return config;
  },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
  },
      video: true,
      videosFolder: 'cypress/videos',
},
});

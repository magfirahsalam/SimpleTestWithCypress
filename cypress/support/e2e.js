// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
    // return false to prevent the test from failing
    if (err.message.includes('getProfile is not defined')) {
      return false;
    }
  
    // You can handle other unexpected errors too
    return true; // Atau return false untuk skip semua
  });

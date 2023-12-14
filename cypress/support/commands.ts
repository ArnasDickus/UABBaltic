/// <reference types="cypress" />

Cypress.Commands.add("registerUI", (name, username, email, password) => {
  cy.get('[data-testid="nameInput"]').type(name);
  cy.get('[data-testid="usernameInput"]').type(username);
  cy.get('[data-testid="emailInput"]').type(email);
  cy.get('[data-testid="passwordInput"]').type(password);
  cy.get('[data-testid="submitButton"]').click();
});

Cypress.Commands.add("loginUI", () => {
  cy.visit("en/login");
  cy.get('[data-testid="loginEmail"]').type(Cypress.env("EMAIL_USERNAME"));
  cy.get('[data-testid="loginPassword"]').type(Cypress.env("EMAIL_PASSWORD"));
  cy.get('[data-testid="loginSubmitButton"]').click();
});

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

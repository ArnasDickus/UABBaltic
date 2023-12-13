import { signIn } from "next-auth/react";
/// <reference types="cypress" />

Cypress.Commands.add("registerUI", (name, username, email, password) => {
  cy.get('[data-testid="nameInput"]').type(name);
  cy.get('[data-testid="usernameInput"]').type(username);
  cy.get('[data-testid="emailInput"]').type(email);
  cy.get('[data-testid="passwordInput"]').type(password);
  cy.get('[data-testid="submitButton"]').click();
});

Cypress.Commands.add("loginPR", async (email, password) => {
  cy.request({
    method: "POST",
    url: "/api/auth/callback/credentials", // replace with your actual authentication endpoint
    body: {
      email,
      password,
    },
    failOnStatusCode: false,
  }).then((response) => {
    // Check if login was successful
    if (response.status === 200) {
      return response.body;
    } else {
      throw new Error("Login failed");
    }
  });

  // const response = await signIn("credentials", {
  //   email: email,
  //   password: password,
  //   redirect: false,
  // });

  // cy.origin()

  // console.log("response", response);

  cy.visit("/en");
  cy.get('[data-testid="signOutButtonId"]');
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

import { signIn } from "next-auth/react";
/// <reference types="cypress" />

Cypress.Commands.add("registerUI", (name, username, email, password) => {
  cy.get('[data-testid="nameInput"]').type(name);
  cy.get('[data-testid="usernameInput"]').type(username);
  cy.get('[data-testid="emailInput"]').type(email);
  cy.get('[data-testid="passwordInput"]').type(password);
  cy.get('[data-testid="submitButton"]').click();
});

Cypress.Commands.add("loginUI", (email, password) => {
  cy.visit("en/login");
  cy.get('[data-testid="loginEmail"]').type(email);
  cy.get('[data-testid="loginPassword"]').type(password);
  cy.get('[data-testid="loginSubmitButton"]').click();
});

// @ts-ignore
Cypress.Commands.add("loginPR", (email, password) => {
  cy.request("GET", "/api/auth/csrf").then((csrfResponse: any) => {
    const csrfToken = csrfResponse.body.csrfToken;
    console.log("email", email);
    console.log("password", password);
    console.log("csrfToken", csrfToken);
    cy.request("POST", "/api/auth/signin/credentials", {
      email,
      password,
      csrfToken,
    }).then((loginResponse) => {
      console.log("loginResponse", loginResponse);

      // You can add assertions or further actions here if needed

      // Example: Assert that the login was successful
      expect(loginResponse.status).to.equal(200);
      cy.log("Response Body:", loginResponse.body);
      cy.log("Response Headers:", loginResponse.headers);
    });
  });

  // cy.request("GET", "/api/auth/csrf").then((response) => {
  //   console.log("response", response);
  //   cy.request("POST", "/api/auth/signin/credentials", {
  //     email,
  //     password,
  //     redirect: false,
  //     csrfToken: response.body.csrfToken,
  //   }).then((loginResponse) => {
  //     console.log("loginResponse", loginResponse);
  //   });
  // });

  // await signIn("credentials", {
  //   email: email,
  //   password: password,
  //   redirect: false,
  // });

  return cy.wrap(null);
  // cy.get('[data-testid="loginSubmitButton"]').click();
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

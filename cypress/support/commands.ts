/// <reference types="cypress" />
require("dotenv").config();

Cypress.Commands.add("registerUI", (name, username, email, password) => {
  cy.get('[data-testid="nameInput"]').type(name);
  cy.get('[data-testid="usernameInput"]').type(username);
  cy.get('[data-testid="emailInput"]').type(email);
  cy.get('[data-testid="passwordInput"]').type(password);
  cy.get('[data-testid="submitButton"]').click();
});

Cypress.Commands.add("deleteDatabaseUser", (email) => {
  const graphqlEndpoint = Cypress.env(
    "NEXT_PUBLIC_NEXT_HASURA_PROJECT_ENDPOINT"
  );
  const adminSecret = Cypress.env("NEXT_PUBLIC_HASURA_ADMIN_SECRET");

  const mutation = `
    mutation DeleteUser {
    delete_user(where: {email: {_eq: "${email}"}})
    affected_rows
      returning {
        id
      }
}
  `;

  const headers = {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": adminSecret,
  };

  cy.request({
    url: graphqlEndpoint,
    method: "POST",
    headers,
    body: { query: mutation },
  }).then((response) => {
    cy.log("Response", response);
  });
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

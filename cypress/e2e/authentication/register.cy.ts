describe("Register user", () => {
  const emailsToDelete = [
    "successLogin@test.lt",
    "checkusername@test.lt",
    "checkusername2@test.lt",
    "checkEmail@example.com",
  ];

  const emailsString = JSON.stringify(emailsToDelete);
  beforeEach(() => {
    const mutation = `
    mutation DeleteUsers {
      delete_user(where: {email: {_in: ${emailsString}}}) {
        affected_rows
        returning {
          id
        }
      }
    }
  `;

    const headers = {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": Cypress.env("NEXT_PUBLIC_HASURA_ADMIN_SECRET"),
    };

    cy.request({
      url: Cypress.env("NEXT_PUBLIC_NEXT_HASURA_PROJECT_ENDPOINT"),
      method: "POST",
      headers,
      body: { query: mutation },
    }).then((response) => {
      cy.log("Response", response);
    });
  });

  it("displays success message", () => {
    cy.visit("en/register");

    cy.registerUI(
      "MrUniqueUser",
      "MrUniqueUser",
      emailsToDelete[0],
      "vbC1UbVWs7Y7VXoBdTrA"
    );

    cy.get('[data-testid="emailExistsModal"]').should("not.exist");
    cy.get('[data-testid="usernameExistsModal"]').should("not.exist");

    cy.get('[data-testid="emailWasSentModal"]')
      .should("be.visible")
      .should("be.visible", {
        timeout: 10000,
        interval: 1000,
      });
  });
  it("displays message for existing username", () => {
    cy.visit("en/register");
    cy.registerUI(
      "ExistingUser",
      "ExistingUsername",
      emailsToDelete[1],
      "vbC1UbVWs7Y7VXoBdTrA"
    );
    cy.visit("en/register");

    cy.registerUI(
      "ExistingUser",
      "ExistingUsername",
      emailsToDelete[2],
      "vbC1UbVWs7Y7VXoBdTrA"
    );

    cy.get('[data-testid="usernameExistsModal"]').should("be.visible");
  });
  it("displays message for existing email", () => {
    cy.visit("en/register");
    cy.registerUI(
      "AnotherUser",
      "AnotherUsername",
      emailsToDelete[3],
      "vbC1UbVWs7Y7VXoBdTrA"
    );
    cy.visit("en/register");
    cy.registerUI(
      "NewName",
      "NewUsername",
      emailsToDelete[3],
      "vbC1UbVWs7Y7VXoBdTrA"
    );

    cy.get('[data-testid="emailExistsModal"]').should("be.visible");
  });
});

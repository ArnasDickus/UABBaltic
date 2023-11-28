describe("Login User and redirect to home page", () => {
  before(() => {
    cy.visit("en/login");
  });

  it("Login user", () => {
    cy.get('[data-testid="loginEmail"]').type(Cypress.env("EMAIL_USERNAME"));
    cy.get('[data-testid="loginPassword"]').type(Cypress.env("EMAIL_PASSWORD"));
    cy.get('[data-testid="loginSubmitButton"]').click();
  });
});

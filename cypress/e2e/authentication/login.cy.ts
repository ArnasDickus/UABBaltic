describe("Login User and redirect to home page", () => {
  before(() => {
    cy.visit("en/login");
  });

  it("Login user", () => {
    cy.loginUI(Cypress.env("TEST_USERNAME"), Cypress.env("TEST_PASSWORD"));
    cy.get('[data-testid="logoutButtonId"]');
  });

  it("Visit Sign In Page", () => {
    cy.visit("en/login");
    cy.get('[data-testid="loginForgotPasswordLink"]').click();
    cy.get('[data-testid="forgotPasswordFormId"]');
  });
});

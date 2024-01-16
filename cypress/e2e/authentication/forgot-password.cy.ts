describe("Forgot password", () => {
  before(() => {
    cy.visit("en/forgot-password");
  });

  it("Display error if email does not exist", () => {
    cy.get('[data-testid="forgotPasswordEmail"]').type("emailNoExist@test.lt");
    cy.get('[data-testid="forgotPasswordButton"]').click();
    cy.get('[data-testid="forgotPasswordEmailExistModal"]').should(
      "be.visible"
    );
  });
  it("Display Reset Email Modal", () => {
    cy.visit("en/forgot-password");
    cy.get('[data-testid="forgotPasswordEmail"]').type(
      Cypress.env("TEST_USERNAME")
    );
    cy.get('[data-testid="forgotPasswordButton"]').click();
    cy.get('[data-testid="ForgotPasswordSuccessModal"]').should("be.visible", {
      timeout: 10000,
      interval: 1000,
    });
  });
});

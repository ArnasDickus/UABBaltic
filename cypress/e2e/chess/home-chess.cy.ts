describe("check Chess redirection", () => {
  before(() => {
    cy.visit("en/chess");
  });

  it("Visit Sign In Page", () => {
    cy.visit("en/login");
    cy.get('[data-testid="loginForgotPasswordLink"]').click();
    cy.get('[data-testid="forgotPasswordFormId"]');
  });
});

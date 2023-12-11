describe("check Chess redirection", () => {
  before(() => {
    cy.visit("en/chess");
  });

  it("Visit Sign In Page", () => {
    cy.loginPR(Cypress.env("EMAIL_USERNAME"), Cypress.env("EMAIL_PASSWORD"));

    cy.visit("en/chess");
    cy.get('[data-testid="playChessLinkButton"]').click();
    cy.get('[data-testid="pagePlayChessId"]');
  });
});

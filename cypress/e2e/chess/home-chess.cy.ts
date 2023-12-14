describe("check Chess redirection", () => {
  it("Visit play chess page", () => {
    cy.loginUI(Cypress.env("EMAIL_USERNAME"), Cypress.env("EMAIL_PASSWORD"));
    cy.wait(2000);
    cy.visit("en/chess");
    cy.get('[data-testid="playChessLinkButton"]').click();
    cy.get('[data-testid="pagePlayChessId"]');
  });
});

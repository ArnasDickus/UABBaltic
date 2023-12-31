describe("check Chess redirection", () => {
  it("Visit play chess page", () => {
    cy.loginUI(Cypress.env("TEST_USERNAME"), Cypress.env("TEST_PASSWORD"));
    cy.wait(5000);
    cy.visit("en/chess");
    cy.get('[data-testid="playChessLinkButton"]').click();
    cy.get('[data-testid="pagePlayChessId"]');
  });
});

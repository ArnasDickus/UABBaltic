describe("check Chess redirection", () => {
  before(() => {
    cy.visit("en/chess");
  });

  it("Visit Sign In Page", () => {
    //   const signIn = await signIn("credentials", {
    //     email: data.email,
    //     password: data.password,
    //     redirect: false,
    // });

    // cy.loginPR(Cypress.env("EMAIL_USERNAME"), Cypress.env("EMAIL_PASSWORD"));
    cy.visit("en/login");
    cy.get('[data-testid="loginEmail"]').type("1arnasdickus1@gmail.com");
    cy.get('[data-testid="loginPassword"]').type("aufy4sieUkzbGtwUjo899");
    cy.get('[data-testid="loginSubmitButton"]').click();

    cy.reload();
    cy.visit("en/chess");
    cy.get('[data-testid="playChessLinkButton"]').click();
    cy.get('[data-testid="pagePlayChessId"]');
  });
});

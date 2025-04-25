describe("Login with invalid credential", () => {
    it("tests login_invalid_credentials", () => {
      cy.visit("https://partner.hpe.com/web/prp");
      cy.get("#oktaEmailInput").type("demo_apj_distributor@ppproap.com");
      cy.get("#oktaSignInBtn").click();
      cy.wait(3000);
      cy.get("#password-sign-in").click();
      cy.get("#password-sign-in").type("Login2PRP!");
      cy.get("#onepass-submit-btn").click();
      cy.xpath("//div[@id='widget-login-error']")
      .should('be.visible');
    });
  });
  
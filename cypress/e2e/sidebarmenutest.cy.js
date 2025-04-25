describe("dropdown menu", () => {
    it("tests dropdown menu", () => {
        cy.viewport(1280, 800);
        cy.visit("https://partner.hpe.com/");
        cy.get("#p_p_id_loginPortlet_", 
          { timeout: 10000 })
          .should('be.visible');
        cy.get("header > span", 
            { timeout: 10000 })
            .should('be.visible');
        cy.get("#oktaEmailInput")
            .should('be.visible')
            .click();
        cy.get("#oktaEmailInput")
            .type("demo_apj_distributor@pproap.com");
        cy.get("#oktaSignInBtn")
            .should('not.have.class', 'disabled')
            .click();
        cy.get("#password-sign-in", 
              { timeout: 10000 })
              .should('be.visible').click();
        cy.get("#password-sign-in")
              .type("Login2PRP!");
        cy.get("#onepass-submit-btn").click();
        cy.origin('https://login-iam.ext.hpe.com', () => {
        cy.get("input[value='Log on']",
           { timeout: 10000 })
           .should('be.visible');
            });
        cy.visit("https://partner.hpe.com");
        cy.xpath("//a[@id='userIconImg']//img", )
            .should("be.visible"); 
        cy.wait(6000);
        cy.get('#headerNavBar')
            .trigger('mouseover', {
                force: true
            });
        cy.get('#userMenu')
        .trigger('mouseover', {
            force: true
    });
    });
  });
  
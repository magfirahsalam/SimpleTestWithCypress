describe("search and filter functionality", () => {
    it("tests search and filter functionality", () => {
        cy.visit("https://partner.hpe.com/");
        cy.get("#p_p_id_loginPortlet_", 
            { 
                timeout: 10000 
            })
            .should('be.visible');
        cy.get("header > span", 
            { 
                timeout: 10000 
            })
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
            { 
                timeout: 10000 
            })
                .should('be.visible').click();
        cy.get("#password-sign-in")
                .type("Login2PRP!");
        cy.get("#onepass-submit-btn").click();
        cy.origin('https://login-iam.ext.hpe.com', () => {
        cy.get("input[value='Log on']",
            { 
                timeout: 10000 
            })
            .should('be.visible');
            });

        cy.visit("https://partner.hpe.com/");
        cy.xpath("//a[@id='userIconImg']//img", 
            { 
                timeout: 10000 })
            .should("be.visible"); 
        cy.get("li.search-img img")
            .click();
        cy.get("#customCommonSearch")
            .click();
        cy.get("#customCommonSearch")
            .type("new order request{enter}");
        cy.xpath("//span[@class='searchTextClass']", 
            { 
                timeout: 10000
            })
            .should('be.visible');
        cy.get("div.search-filter > div > div:nth-of-type(2) li:nth-of-type(1) span:nth-of-type(2)", ) 
            .click();
        cy.wait(5000);
        cy.get("div:nth-of-type(3) li:nth-of-type(2) span.checkmark", )
            .click();
        cy.wait(5000);   
        cy.get("div:nth-of-type(5) li:nth-of-type(2) span.checkmark", )
            .click();
        cy.wait(5000);  
        cy.get("div:nth-of-type(4) span.checkmark",)
            .click();
        cy.wait(5000);  
        cy.get("#clearFilterDisplay")
            .click();
        cy.wait(5000); 
        });
  });
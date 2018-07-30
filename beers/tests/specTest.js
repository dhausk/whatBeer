describe("Form submission", () => {
  it("tests user functionality", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.app-header .logo-title h1').should('have.text', 'What Beer should I get?');
    cy.get('.nav-bar-header').within($header => {
      cy.get('#1').should('have.text', 'Home');
      cy.get('#2').should('have.text', 'What Beer');
      cy.get('#3').should('have.text', 'Contact Us');
    });
    cy.get('.nav-footer').within($footer => {
      cy.get('#1').should('have.text', 'Home');
      cy.get('#2').should('have.text', 'What Beer');
      cy.get('#3').should('have.text', 'Contact Us');
    });
    cy.get('.center-div .home h1').should('have.text', '“What Beer should I get?“');
    cy.get('.home').find('button').click();
    cy.get('.center-div').find('.beer-form > label').should('have.text', 'How hoppy? 1 is a little hoppy to 5 being very hoppy.');
    cy.get('.beer-form select option').its('length').should('eq', 6);
    cy.get('.beer-form select').select('3');
    cy.get('.beer-form select').eq(1).find('option').its('length').should('eq', 6);
    cy.get('.beer-form select').eq(1).select('3');
    cy.get('.beer-form button').click();
    //check results length and right 
    cy.get('.result h2').should('have.text', 'Your Beer Choices');
    cy.get('ul .brew').should('have.length.above', 1);
    cy.get('.beer-button').click();
    cy.get('.center-div').find('.beer-form > label').should('have.text', 'How hoppy? 1 is a little hoppy to 5 being very hoppy.');
    cy.get('.nav-bar-header').contains('Home').click();
    cy.get('.center-div .home h1').should('have.text', '“What Beer should I get?“');
    cy.get('.nav-bar-header').contains('What Beer').click();
    cy.get('.center-div').find('.beer-form > label').should('have.text', 'How hoppy? 1 is a little hoppy to 5 being very hoppy.');
    cy.get('.nav-bar-header').contains('Contact Us').click();
    cy.get('.center-div .contact h2').should('have.text', 'If you have any questions or comments');
  });
});

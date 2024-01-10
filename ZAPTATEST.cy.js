describe('template spec', () => {

  
  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;      
    });

    cy.visit('https://www.staysucasa.com/');
    cy.contains('The Sucasa Standard').click();
    //Write script that will verify that The Sucasa Standard sections should contains following text.
    cy.contains('Work From Anywhere');
    cy.contains('Transparent Pricing');
    cy.contains('Premium Properties');
    //Click Find Stays Button
    cy.contains('Find Stays').click();

    //Verify Page URL should be equal to https://www.staysucasa.com/index?#featured
    cy.url().should('eq', 'https://www.staysucasa.com/index?#featured');

   
    })
})
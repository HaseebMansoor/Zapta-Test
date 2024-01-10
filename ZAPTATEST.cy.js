describe('template spec', () => {
  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
    cy.visit('https://www.staysucasa.com/');

    })

  it('passes',()=>{
    cy.scrollTo('bottom');
    cy.wait(5000);

  });
  

  it('passes',()=>{

  });


  it('passes',()=>{

  });


  it('passes',()=>{

  });


  it('passes',()=>{

  });

})
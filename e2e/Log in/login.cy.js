describe('Login Page', () => {
  beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('https://agileeye.netlify.app/');
  });

  it('Log in Sucessfully', () => {
    cy.get('.float-right')
      .click()

    cy.get('.mb-4')
      .type('200')
      .should('have.value', '200')

    cy.get('.p-password > .p-inputtext')
      .type('123')
      .should('have.value', '123')
      

    cy.get('.mb-2 > .p-button-label')
      .click()


  });


  it('Empty Field During Log in', () => {
    cy.get('.float-right')
      .click()

    cy.get('.mb-4')
      .should('not.have.value')
      .should('be.empty')

      
    cy.get('.p-password > .p-inputtext')
      .should('not.have.value')
      .should('be.empty')
    
    cy.get('.mb-2 > .p-button-label')
      .click()



  });


  it('Incorrect Password Entry', () => {
    cy.get('.float-right')
      .click()

    cy.get('.mb-4')
      .type('200')
      .should('have.value', '200')

    cy.get('.p-password > .p-inputtext')
      .type('567')
      .should('not.have.value', '')

    cy.get('.mb-2 > .p-button-label')
      .click()


  });
  it('Incorrect ID Entry', () => {
    cy.get('.float-right')
      .click()

    cy.get('.mb-4')
      .type('567')
      .should('not.have.value', '')

    cy.get('.p-password > .p-inputtext')
      .type('123')
      .should('have.value', '123')

    cy.get('.mb-2 > .p-button-label')
      .click()


  });
  it('Non-Existent Account Entry', () => {
    cy.get('.float-right')
      .click()

    cy.get('.mb-4')
      .type('567')
      .should('not.have.value', '')

    cy.get('.p-password > .p-inputtext')
      .type('567')
      .should('not.have.value', '')

    cy.get('.mb-2 > .p-button-label')
      .click()


  });
  
  
});

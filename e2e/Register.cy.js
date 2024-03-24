describe('Register', () => {
  beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('https://agileeye.netlify.app/');
  });

  it('Sucessfull Registration', () => {
    cy.get('.float-right')
      .click()
  
    cy.contains('Sign up now')
      .should('be.visible')
      .click()

    cy.get('[value="Student"]')
      .click()

    cy.get('.p-button-label')
      .click()
    
    cy.get('[placeholder="First Name"]')
     .type('Sample')
    
    cy.get('[placeholder="Last Name"]')
     .type('Test')

    cy.get('[aria-label="Next"] > .p-button-label')
     .click()

     cy.get('[placeholder="ID"]')
     .type('123456789')
    
    cy.get('[placeholder="Email Address"]')
     .type('STest@uic.edu.ph')
    
    cy.get(':nth-child(3) > .p-inputtext')
     .type('SamplePass')

    cy.get(':nth-child(4) > .p-inputtext')
     .type('SamplePass')

    cy.get('[aria-label="Register"]')
    .dblclick()
    
  });

  it('Attempt to register with an existing ID', () => {
    cy.get('.float-right')
      .click()
  
    cy.contains('Sign up now')
    .should('be.visible')
      .click()

    cy.get('[value="Student"]')
      .click()

    cy.get('.p-button-label')
      .click()
  //Before Firstname Lastname
  cy.get('[placeholder="First Name"]')
  .type('Jack')
 
 cy.get('[placeholder="Last Name"]')
  .type('Miller')

  cy.get('[aria-label="Next"] > .p-button-label')
     .click()
  //ID EMAIL PASSWORD

  cy.get('[placeholder="ID"]')
     .type('123456789')
    
    cy.get('[placeholder="Email Address"]')
     .type('JMiller@uic.edu.ph')
    
    cy.get(':nth-child(3) > .p-inputtext')
     .type('Jack123123')

    cy.get(':nth-child(4) > .p-inputtext')
     .type('Jack123123')

    cy.get('[aria-label="Register"]')
    .dblclick()

  });

  it('Attempt to register with an existing email address', () => {
    cy.get('.float-right')
      .click()
  
    cy.contains('Sign up now')
    .should('be.visible')
      .click()

    cy.get('[value="Student"]')
      .click()

    cy.get('.p-button-label')
      .click()
  //Before Firstname Lastname
  cy.get('[placeholder="First Name"]')
  .type('Johnny')

 
 cy.get('[placeholder="Last Name"]')
  .type('Bravo')
  

  cy.get('[aria-label="Next"] > .p-button-label')
     .click()
  //ID EMAIL PASSWORD

  cy.get('[placeholder="ID"]')
     .type('122133')
    
    cy.get('[placeholder="Email Address"]')
     .type('STest@uic.edu.ph')
    
    cy.get(':nth-child(3) > .p-inputtext')
     .type('Johnny123123')

    cy.get(':nth-child(4) > .p-inputtext')
     .type('Johnny123123')

    cy.get('[aria-label="Register"]')
    .dblclick()
    .should('be.visible')

  });
  
  
});

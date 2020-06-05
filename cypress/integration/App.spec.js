describe('Test App', () => {

  it('launches', () => {
    cy.visit('/');
  });

  it('make sure that login button appears', () => {
    cy.visit('/');
    cy.contains('Sign in with Google');
  });

  it('get new dialog when clicking "Sign in with Google" button', () => {
    cy.visit('/');
    cy.contains('Sign in with Google').click();
  });
});
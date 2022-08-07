import { injectAuthTokenToLocalstorage } from '../custom-actions';
import { buttonLogout, inputEmail } from '../data-tags';

describe('logout', () => {
  beforeEach(() => {
    injectAuthTokenToLocalstorage();
  });
  it('should be logged out', () => {
    cy.visit('/');

    cy.get(buttonLogout).should('exist').click()
    cy.get(inputEmail).should('exist')
  });
});

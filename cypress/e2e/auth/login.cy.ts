import { buttonLogin, inputEmail, inputPassword, linkJoin } from '../data-tags';
import { routes } from '../../../src/screen/routes';

const emailRandom = `${Math.random()}@test.com`;
const password = 'password';

const correctEmail = 'test@test.com';
const correctPassword = '12345678';

describe('login page', () => {
  it('should visit login page', () => {
    cy.visit('/');
  });

  it('should render inputs and buttons', () => {
    cy.visit('/');

    cy.get(inputEmail).should('exist');
    cy.get(inputPassword).should('exist');
    cy.get(buttonLogin).should('exist');
    cy.get(linkJoin).should('exist');
  });

  it('should link to join', () => {
    cy.visit('/');

    cy.get(linkJoin).should('exist').should('have.attr', 'href', routes.join).click();
    cy.url().should('eq', Cypress.config().baseUrl + routes.join);
  });
});

describe('form validation test', () => {
  it('should visit join page', () => {
    cy.visit('/');
  });

  it('should render inputs and buttons', () => {
    cy.visit('/');

    cy.get(inputEmail).should('exist');
    cy.get(inputPassword).should('exist');
    cy.get(buttonLogin).should('exist');
  });

  it('should render disabled button', () => {
    cy.visit('/');

    cy.get(buttonLogin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should not be enabled when password is empty', () => {
    cy.visit('/');

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(buttonLogin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should not be enabled when email is empty', () => {
    cy.visit('/');

    cy.get(inputPassword).should('exist').type(password);
    cy.get(buttonLogin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should not be enabled when email is not valid', () => {
    cy.visit('/');

    cy.get(inputEmail).should('exist').type('wrong email');
    cy.get(inputPassword).should('exist').type(password);
    cy.get(buttonLogin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should not be enabled when email is not valid', () => {
    cy.visit('/');

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(inputPassword).should('exist').type('wrong');
    cy.get(buttonLogin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should be enabled when email and password is valid', () => {
    cy.visit('/');

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(inputPassword).should('exist').type(password);
    cy.get(buttonLogin).should('exist').should('not.have.attr', 'disabled');
  });
});

describe('login process', () => {
  it('should fail login with alert', () => {
    cy.visit('/');

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(inputPassword).should('exist').type(password);

    cy.get(buttonLogin).should('exist').click();
    cy.on('window:alert', (t) => {
      expect(t).to.contains('로그인에 실패했습니다');
    });
  });

  it('should success login with alret', () => {
    cy.visit('/');

    cy.get(inputEmail).should('exist').type(correctEmail);
    cy.get(inputPassword).should('exist').type(correctPassword);

    cy.get(buttonLogin)
      .should('exist')
      .click()
      .should(() => expect(localStorage.getItem('TOKEN')).to.be.a('string'));
    cy.on('window:alert', (t) => {
      expect(t).to.contains('로그인이 완료되었습니다');
    });
  });
});

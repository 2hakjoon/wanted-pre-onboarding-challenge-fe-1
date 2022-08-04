import { buttonJoin, inputEmail, inputPassword, linkLogin } from '../data-tags';
import { routes } from '../../../src/screen/routes';
import { authToken } from '../../../src/common/constants/local-storage';

const emailRandom = `${Math.random()}@test.com`;
const password = '12345678';

describe('link to login', () => {
  it('should visit join page', () => {
    cy.visit(routes.join);
  });

  it('should render inputs and buttons', () => {
    cy.visit(routes.join);

    cy.get(linkLogin).should('exist');
  });

  it('should link to login', () => {
    cy.visit(routes.join);

    cy.get(linkLogin).should('exist').should('have.attr', 'href', routes.home).click();
    cy.url().should('eq', Cypress.config().baseUrl + routes.home);
  });
});

describe('form validation test', () => {
  it('should visit join page', () => {
    cy.visit(routes.join);
  });

  it('should render inputs and buttons', () => {
    cy.visit(routes.join);

    cy.get(inputEmail).should('exist');
    cy.get(inputPassword).should('exist');
    cy.get(buttonJoin).should('exist');
  });

  it('should render disabled button', () => {
    cy.visit(routes.join);

    cy.get(buttonJoin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should not be enabled when password is empty', () => {
    cy.visit(routes.join);

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(buttonJoin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should not be enabled when email is empty', () => {
    cy.visit(routes.join);

    cy.get(inputPassword).should('exist').type(password);
    cy.get(buttonJoin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should not be enabled when email is not valid', () => {
    cy.visit(routes.join);

    cy.get(inputEmail).should('exist').type('wrong email');
    cy.get(inputPassword).should('exist').type(password);
    cy.get(buttonJoin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should not be enabled when email is not valid', () => {
    cy.visit(routes.join);

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(inputPassword).should('exist').type('wrong');
    cy.get(buttonJoin).should('exist').should('have.attr', 'disabled', 'disabled');
  });

  it('should be enabled when email and password is valid', () => {
    cy.visit(routes.join);

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(inputPassword).should('exist').type(password);
    cy.get(buttonJoin).should('exist').should('not.have.attr', 'disabled');
  });
});

describe('join process', () => {
  it('should success join', () => {
    cy.visit(routes.join);

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(inputPassword).should('exist').type(password);
    cy.get(buttonJoin)
      .should('exist')
      .click()
      .should(() => expect(localStorage.getItem(authToken)).to.be.a('string'));
    cy.on('window:alert', (t) => {
      expect(t).to.contains('회원가입이 완료되었습니다.');
    });
    cy.url().should('eq', Cypress.config().baseUrl + routes.home);
  });

  it('should fail join', () => {
    cy.visit(routes.join);

    cy.get(inputEmail).should('exist').type(emailRandom);
    cy.get(inputPassword).should('exist').type(password);
    cy.get(buttonJoin).should('exist').click();
    cy.on('window:alert', (t) => {
      expect(t).to.contains('이미 존재하는 유저입니다');
    });
    cy.url().should('eq', Cypress.config().baseUrl + routes.join);
  });
});

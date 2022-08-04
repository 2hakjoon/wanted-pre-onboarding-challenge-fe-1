import { routes } from '../../../src/screen/routes';
import { injectAuthTokenToLocalstorage } from '../custom-actions';
import { buttonSaveTodo, inputTodo } from '../data-tags';

describe('create todo', () => {
  beforeEach(()=>{
    injectAuthTokenToLocalstorage();
  })

  it('should visit home', () => {
    cy.visit('/');
  });

  it('should render input and button', () => {
    cy.visit('/');

    cy.get(inputTodo).should('exist')
    cy.get(buttonSaveTodo).should('exist')
  });
});

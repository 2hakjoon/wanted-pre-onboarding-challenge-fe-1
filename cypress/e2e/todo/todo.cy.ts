import { injectAuthTokenToLocalstorage } from '../custom-actions';
import { buttonSaveTodo, inputTodoContent, inputTodoTitle } from '../data-tags';

describe('create todo', () => {
  beforeEach(()=>{
    injectAuthTokenToLocalstorage();
  })

  it('should visit home', () => {
    cy.visit('/');
  });

  it('should render input and button', () => {
    cy.visit('/');

    cy.get(inputTodoTitle).should('exist')
    cy.get(inputTodoContent).should('exist')
    cy.get(buttonSaveTodo).should('exist')
  });

  it('should alert when content or title is empty', () => {
    cy.visit('/');

    cy.get(inputTodoTitle).should('exist')
    cy.get(inputTodoContent).should('exist')
    cy.get(buttonSaveTodo).should('exist').click();
    cy.on('window:alert', (t) => {
      expect(t).to.contains('내용을 모두 입력해주세요.');
    });
  })
});

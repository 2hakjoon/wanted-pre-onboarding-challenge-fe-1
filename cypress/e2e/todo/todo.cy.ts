import { injectAuthTokenToLocalstorage } from '../custom-actions';
import { buttonSaveTodo, inputTodoContent, inputTodoTitle, textTodoListTitle } from '../data-tags';

const testTitle = `테스트 타이틀${Math.random()}`;
const testContent = `테스트 콘텐츠${Math.random()}`;

describe('create todo', () => {
  beforeEach(() => {
    injectAuthTokenToLocalstorage();
  });

  it('should visit home', () => {
    cy.visit('/');
  });

  it('should render input and button', () => {
    cy.visit('/');

    cy.get(inputTodoTitle).should('exist');
    cy.get(inputTodoContent).should('exist');
    cy.get(buttonSaveTodo).should('exist');
  });

  it('should alert when content or title is empty', () => {
    cy.visit('/');

    cy.get(inputTodoTitle).should('exist');
    cy.get(inputTodoContent).should('exist');
    cy.get(buttonSaveTodo).should('exist').click();
    cy.on('window:alert', (t) => {
      expect(t).to.contains('내용을 모두 입력해주세요.');
    });
  });

  it('should create todo and refetch todo list', () => {
    cy.visit('/');

    cy.get(inputTodoTitle).should('exist').type(testTitle);
    cy.get(inputTodoContent).should('exist').type(testContent);
    cy.get(buttonSaveTodo).should('exist').click();

    cy.contains(textTodoListTitle, testTitle);
  });
});

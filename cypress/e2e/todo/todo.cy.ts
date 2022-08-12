import { routes } from '../../../src/screen/routes';
import { injectAuthTokenToLocalstorage } from '../custom-actions';
import {
  buttonDeleteTodo,
  buttonEditCancel,
  buttonEditMode,
  buttonEditSave,
  buttonSaveTodo,
  inputEditTodoContent,
  inputEditTodoTitle,
  inputTodoContent,
  inputTodoTitle,
  linkTodoDetail,
  textTodoDetailContent,
  textTodoDetailCreatedAt,
  textTodoDetailTitle,
  textTodoDetailUpdatedAt,
  textTodoListTitle,
  wrapperTodoCard,
} from '../data-tags';

const testTitle = `테스트 타이틀${Math.random()}`;
const testContent = `테스트 콘텐츠${Math.random()}`;
const editTitle = '수정된 타이틀';
const editContent = '수정된 내용';

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

  it('should create todo and refetch todo list and empty input', () => {
    cy.visit('/');

    cy.get(inputTodoTitle).should('exist').type(testTitle);
    cy.get(inputTodoContent).should('exist').type(testContent);
    cy.get(buttonSaveTodo).should('exist').click();

    cy.get(inputTodoTitle).should('exist').should('have.value', '');
    cy.get(inputTodoContent).should('exist').should('have.value', '');
    cy.contains(textTodoListTitle, testTitle);
  });
});

describe('get todo detail', () => {
  beforeEach(() => {
    injectAuthTokenToLocalstorage();
  });

  it('should visit home', () => {
    cy.visit('/');
  });

  it('should not render any todo detail', () => {
    cy.visit('/');

    cy.get(textTodoDetailTitle).should('not.exist');
    cy.get(textTodoDetailContent).should('not.exist');
    cy.get(textTodoDetailCreatedAt).should('not.exist');
    cy.get(textTodoDetailUpdatedAt).should('not.exist');
  });

  it('should change backgournd color of card', () => {
    cy.visit('/');

    cy.get(linkTodoDetail).should('exist').click();
    cy.get(wrapperTodoCard).should('exist').should('have.class', 'selected');
  });

  it('should render todo detail', () => {
    cy.visit('/');

    cy.get(linkTodoDetail).should('exist').click();

    cy.url().should('not.eq', Cypress.config().baseUrl + routes.home);
    cy.get(textTodoDetailTitle).should('exist');
    cy.get(textTodoDetailContent).should('exist');
    cy.get(textTodoDetailCreatedAt).should('exist');
    cy.get(textTodoDetailUpdatedAt).should('exist');
  });
});

describe('update todo', () => {
  beforeEach(() => {
    injectAuthTokenToLocalstorage();
  });

  it('should visit home', () => {
    cy.visit('/');
  });

  it('should render edit button', () => {
    cy.visit('/');

    cy.get(linkTodoDetail).should('exist').click();

    cy.get(buttonEditMode).should('exist');
  });

  it('should render inputs when click edit button', () => {
    cy.visit('/');

    cy.get(linkTodoDetail).should('exist').click();

    cy.get(buttonEditMode).should('exist').click();
    cy.get(inputEditTodoTitle).should('exist');
    cy.get(inputEditTodoContent).should('exist');
  });

  it('should not render edit mode when click cancel edit button', () => {
    cy.visit('/');

    cy.get(linkTodoDetail).should('exist').click();

    cy.get(buttonEditMode).should('exist').click();
    cy.get(inputEditTodoTitle).should('exist');
    cy.get(inputEditTodoContent).should('exist');
    cy.get(buttonEditCancel).should('exist').click();
    cy.get(inputEditTodoTitle).should('not.exist');
    cy.get(inputEditTodoContent).should('not.exist');
  });

  it('should update detail and off edit mode', () => {
    cy.visit('/');

    cy.get(linkTodoDetail).should('exist').click();

    cy.get(buttonEditMode).should('exist').click();
    cy.get(inputEditTodoTitle).should('exist').type(editTitle);
    cy.get(inputEditTodoContent).should('exist').type(editContent);
    cy.get(buttonEditSave).should('exist').click();
    cy.get(textTodoDetailTitle).should('exist').should('contain.text', editTitle);
    cy.get(textTodoDetailContent).should('exist').should('contain.text', editContent);
    cy.get(inputEditTodoTitle).should('not.exist');
    cy.get(inputEditTodoContent).should('not.exist');
  });
});

describe('delete todo', () => {
  beforeEach(() => {
    injectAuthTokenToLocalstorage();
  });

  it('should visit home', () => {
    cy.visit('/');
  });

  it('should delete successfully', () => {
    cy.visit('/');

    cy.contains(textTodoListTitle, editTitle);
    cy.get(buttonDeleteTodo).should('exist').click();
    cy.get(textTodoListTitle).should('not.exist');
  });
});

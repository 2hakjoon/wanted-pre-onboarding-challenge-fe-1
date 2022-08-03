import { buttonLogin, inputEmail, inputPassword, linkJoin } from "../data-tags"

describe('login page', () => {
  it('should visit login page', () => {
    cy.visit("/")
  })

  it('should render inputs and buttons', () => {
    cy.get(inputEmail).should('exist')
    cy.get(inputPassword).should('exist')
    cy.get(buttonLogin).should('exist')
    cy.get(linkJoin).should('exist')
  })
})
import { buttonJoin, inputEmail, inputPassword, linkLogin } from "../data-tags"

describe('join page', () => {
  it('should visit join page', () => {
    cy.visit("/join")
  })

  it('should render inputs and buttons', () => {
    cy.get(inputEmail).should('exist')
    cy.get(inputPassword).should('exist')
    cy.get(buttonJoin).should('exsis')
    cy.get(linkLogin).should('exist')
  })
})
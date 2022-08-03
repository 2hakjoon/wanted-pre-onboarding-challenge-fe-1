import { buttonJoin, inputEmail, inputPassword, linkLogin } from "../data-tags"
import {routes} from '../../../src/screen/routes'

describe('join page', () => {
  it('should visit join page', () => {
    cy.visit(routes.join)
  })

  it('should render inputs and buttons', () => {
    cy.visit(routes.join)

    cy.get(inputEmail).should('exist')
    cy.get(inputPassword).should('exist')
    cy.get(buttonJoin).should('exist')
    cy.get(linkLogin).should('exist')
  })

  it('should link to login', () => {
    cy.visit(routes.join)

    
    cy.get(linkLogin).should('exist').should('have.attr','href', routes.home).click()
    cy.url().should('eq', Cypress.config().baseUrl + routes.home)
  })
})
import { buttonLogin, inputEmail, inputPassword, linkJoin } from "../data-tags"
import {routes} from '../../../src/screen/routes'

describe('login page', () => {
  it('should visit login page', () => {
    cy.visit("/")
  })

  it('should render inputs and buttons', () => {
    cy.visit("/")

    cy.get(inputEmail).should('exist')
    cy.get(inputPassword).should('exist')
    cy.get(buttonLogin).should('exist')
    cy.get(linkJoin).should('exist')
  })

  it('should link to join', () => {
    cy.visit("/")

    cy.get(linkJoin).should('exist').should('have.attr','href',routes.join).click()
    cy.url().should('eq', Cypress.config().baseUrl + routes.join)
  })
})
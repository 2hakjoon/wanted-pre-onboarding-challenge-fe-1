import { authToken } from "../../src/persistStore/persistStore"


export const injectAuthTokenToLocalstorage = () => {
  localStorage.setItem(authToken, Cypress.env("authToken"))
}
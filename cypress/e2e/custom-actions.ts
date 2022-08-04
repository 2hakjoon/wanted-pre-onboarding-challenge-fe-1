import { authToken } from "../../src/common/constants/local-storage"


export const injectAuthTokenToLocalstorage = () => {
  localStorage.setItem(authToken, Cypress.env("authToken"))
}
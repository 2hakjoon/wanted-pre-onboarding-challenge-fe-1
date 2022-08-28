import { authTokenKey } from '../../src/persistStore/persistStore';

export const injectAuthTokenToLocalstorage = () => {
  localStorage.setItem(authTokenKey, Cypress.env('authToken'));
};

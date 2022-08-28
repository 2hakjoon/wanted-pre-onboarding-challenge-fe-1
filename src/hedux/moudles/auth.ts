import { authTokenKey, persistStore } from '../../persistStore/persistStore';

export const heduxAuthInitState = {
  auth: { isLoggedIn: !!persistStore.get(authTokenKey) },
};

export type HeduxAuthType = typeof heduxAuthInitState.auth;

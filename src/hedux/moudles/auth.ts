import { authTokenKey, persistStore } from '../../persistStore/persistStore';
import { HeduxActionObj } from '../reducer/types';

export const ACTION_LOGIN = 'auth/LOGGIN';

export const heduxAuthInitState = {
  auth: { isLoggedIn: !!persistStore.get(authTokenKey) },
};

export type HeduxAuthType = typeof heduxAuthInitState.auth;

export const authReducer = <T>(state: T, action: HeduxActionObj): T => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case ACTION_LOGIN:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};

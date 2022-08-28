import { HeduxActionObj } from './types';

function reducer<T>(state: T, action?: HeduxActionObj): T {
  if (!action) {
    return {
      ...state,
    };
  }

  if (action.type === 'auth') {
    return {
      ...state,
      auth: {
        ...action.payload,
      },
    };
  }
  return {
    ...state,
  };
}

export default reducer;

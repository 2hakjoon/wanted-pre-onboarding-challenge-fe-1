import { HeduxActionObj } from './types';

function reducer<T>(state: T, action?: HeduxActionObj): T {
  if (!action) {
    return {
      ...state,
    };
  }

  if (action.type === 'test') {
    return {
      ...state,
      ...action.payload,
    };
  }
  return {
    ...state,
  };
}

export default reducer;

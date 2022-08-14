import { HeduxStateType } from '../core/types';
import { HeduxActionObj } from './types';

function reducer(state: HeduxStateType, action?: HeduxActionObj): HeduxStateType {
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

import { HeduxActionObj } from './types';

interface CombineRedcuerArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: (state: any, action: HeduxActionObj) => any;
}

function combineReducers(reducers: CombineRedcuerArgs) {
  return function rootReducer<T>(state: T, action: HeduxActionObj): T {
    // eslint-disable-next-line no-restricted-syntax
    for (const reducer of Object.values(reducers)) {
      // eslint-disable-next-line no-param-reassign
      state = reducer(state, action);
    }
    return {
      ...state,
    };
  };
}

export default combineReducers;

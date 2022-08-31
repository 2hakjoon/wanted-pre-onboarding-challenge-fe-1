import { HeduxActionObj } from './types';

interface CombineRedcuerArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: (state: any, action?: HeduxActionObj) => any;
}

function combineRedcuer(reducers: CombineRedcuerArgs) {
  return <T>(state: T, action?: HeduxActionObj): T => {
    if (!action) {
      return {
        ...state,
      };
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const [, reducer] of Object.entries(reducers)) {
      // eslint-disable-next-line no-param-reassign
      state = reducer(state, action);
    }
    return {
      ...state,
    };
  };
}

export default combineRedcuer;

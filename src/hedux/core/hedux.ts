/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hedux, HeduxReducer, HeduxStateType } from './types';

function createHeduxStore({ reducer }: HeduxReducer): Hedux {
  let state: HeduxStateType = {
    test: 'yes',
  };

  const getState = () => ({ ...state });

  const dispatch = (type: string, payload?: { [k: string]: any }) => {
    state = reducer(state, { type, payload });
  };

  return { getState, dispatch };
}

export default createHeduxStore;

/* eslint-disable @typescript-eslint/no-explicit-any */
import {  HeduxReducer } from './types';

function createHeduxStore<T>(initState: T, { reducer }: HeduxReducer<T>) {
  let state: T = initState;

  const getState = (): T => {
    return state;
  };

  const dispatch = (type: string, payload?: { [k: string]: any }) => {
    state = reducer(state, { type, payload });
  };

  return { getState, dispatch };
}

export default createHeduxStore;

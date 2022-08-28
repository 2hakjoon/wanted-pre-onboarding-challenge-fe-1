/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hedux, HeduxReducer } from './types';

function createHeduxStore<T>(initState: T, { reducer }: HeduxReducer<T>): Hedux<T> {
  let state: T = initState;
  const observer: any[] = [];

  const getState = (key: keyof T): Partial<T> => {
    const data = state[key];
    return data;
  };

  const dispatch = (type: string, payload?: { [k: string]: any }) => {
    state = reducer(state, { type, payload });
    reflect();
  };

  const reflect = () => {
    observer.forEach((rerender) => rerender());
  };

  const subscribe = (trigger: () => void) => {
    observer.push(trigger);
  };

  return { getState, dispatch, reflect, subscribe };
}

export default createHeduxStore;

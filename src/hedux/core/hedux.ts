/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hedux, HeduxReducer } from './types';

function createHeduxStore<T>(initState: T, { reducer }: HeduxReducer<T>): Hedux {
  let state: T = initState;

  const getState = (): T => {
    return state;
  };

  const dispatch = (type: string, payload?: { [k: string]: any }) => {
    state = reducer(state, { type, payload });
    reflect();
  };

  // Todo : utils/subscirbe로 분리하기.
  interface Listener {
    callback: () => void;
    prev: Listener | null;
    next: Listener | null;
  }

  let first: Listener | null = null;
  let last: Listener | null = null;

  const reflect = () => {
    let listener = first;
    while (listener) {
      listener.callback();
      listener = listener.next;
    }
  };

  const subscribe = (trigger: () => void) => {
    const newListener: Listener = {
      callback: trigger,
      prev: last,
      next: null,
    };
    if (newListener.prev !== null) {
      newListener.prev.next = newListener;
      last = newListener;
    } else {
      first = newListener;
      last = newListener;
    }
    return function unsubscribe() {
      if (newListener.prev) {
        newListener.prev.next = newListener.next;
      } else {
        first = newListener.next;
      }
      if (newListener.next) {
        newListener.next.prev = newListener.prev;
      } else {
        last = newListener.prev;
      }
    };
  };
  // 여기까지 포함.

  return { getState, dispatch, reflect, subscribe };
}

export default createHeduxStore;

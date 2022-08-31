/* eslint-disable @typescript-eslint/no-explicit-any */

import { HeduxActionObj } from '../reducer/types';

export interface Hedux {
  getState: () => any;
  dispatch: (type: string, payload?: { [k: string]: any }) => void;
  reflect: () => void;
  subscribe: (arg: () => void) => () => void;
}

export interface HeduxReducer<T> {
  reducer: (state: T, action: HeduxActionObj) => T;
}

/* eslint-disable @typescript-eslint/no-explicit-any */

import { HeduxActionObj } from '../reducer/types';

export interface Hedux<T>{
  getState: (key: keyof T) => any;
  dispatch: (type: string, payload?: { [k: string]: any }) => void;
}

export interface HeduxReducer<T> {
  reducer: (state: T, action: HeduxActionObj) => T;
}

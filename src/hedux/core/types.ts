/* eslint-disable @typescript-eslint/no-explicit-any */

import { HeduxActionObj } from '../reducer/types';

export type HeduxStateType = { [k: string]: any };

export interface Hedux {
  getState: () => void;
  dispatch: (type: string, payload?: { [k: string]: any }) => void;
}

export interface HeduxReducer {
  reducer: (state: HeduxStateType, action: HeduxActionObj) => HeduxStateType;
}

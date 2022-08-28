import {heduxAuthInitState} from './auth'


export const heduxInitState = {
  ...heduxAuthInitState
}

export type HeduxInitState = typeof heduxInitState
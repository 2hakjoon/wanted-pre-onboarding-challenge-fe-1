import { createContext } from 'react';
import { HeduxStore } from '../core/types';
import { Subscription } from '../utils/subscription';

export type HeduxContextValue = HeduxStore & Subscription;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeduxContext = createContext<HeduxContextValue>(null as any);

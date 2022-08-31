import { createContext } from 'react';
import { Hedux } from '../core/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HeduxContext = createContext<Hedux>(null as any);

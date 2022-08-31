import React, { ReactNode } from 'react';
import { Hedux } from '../core/types';
import { HeduxContext } from './HeduxContext';

interface HeduxProviderProps {
  store: Hedux;
  children: ReactNode;
}

function HeduxProvider({ store, children }: HeduxProviderProps) {
  return <HeduxContext.Provider value={store}>{children}</HeduxContext.Provider>;
}

export default HeduxProvider;

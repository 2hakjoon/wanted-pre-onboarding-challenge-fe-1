import React, { ReactNode, useMemo } from 'react';
import { HeduxStore } from '../core/types';
import subscription from '../utils/subscription';
import { HeduxContext, HeduxContextValue } from './HeduxContext';

interface HeduxProviderProps {
  store: HeduxStore;
  children: ReactNode;
}

function HeduxProvider({ store, children }: HeduxProviderProps) {
  const { reflect, subscribe } = subscription();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = (type: string, payload?: { [k: string]: any }): void => {
    store.dispatch(type, payload);
    reflect();
  };

  const context = useMemo<HeduxContextValue>(() => {
    return {
      reflect,
      subscribe,
      dispatch,
      getState: store.getState,
    };
  }, [store]);

  return <HeduxContext.Provider value={context}>{children}</HeduxContext.Provider>;
}

export default HeduxProvider;

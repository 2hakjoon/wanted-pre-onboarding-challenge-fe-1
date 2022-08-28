import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { queryClient } from './reactQuery/reactQuery';
import createHeduxStore from './hedux/core/hedux';
import { heduxInitState, HeduxInitState } from './hedux/moudles';
import reducer from './hedux/reducer/reducer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const heduxStore = createHeduxStore<HeduxInitState>(heduxInitState, { reducer });
export const HeduxStore = createContext(heduxStore);

root.render(
  <React.StrictMode>
    <HeduxStore.Provider value={heduxStore}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </HeduxStore.Provider>
  </React.StrictMode>,
);

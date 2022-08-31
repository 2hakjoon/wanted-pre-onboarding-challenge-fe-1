import { useContext, useEffect, useState } from 'react';
import { HeduxStore } from '../..';
import { HeduxInitState } from '../moudles';

function useSelector<T>(key: keyof HeduxInitState): T {
  const storeState = useContext(HeduxStore).getState(key);
  const { subscribe } = useContext(HeduxStore);
  const [state, setState] = useState(Math.random());

  useEffect(() => {
    const unSubscribe = subscribe(() => setState(Math.random()));
    return () => unSubscribe();
  }, []);
  return storeState;
}

export default useSelector;

import { useContext, useEffect, useState } from 'react';
import { HeduxContext } from '../component/HeduxContext';
import { HeduxInitState } from '../moudles';

function useSelector<T>(key: keyof HeduxInitState): T {
  const storeState = useContext(HeduxContext).getState()?.[key];
  const { subscribe } = useContext(HeduxContext);
  const [, setState] = useState(Math.random());

  useEffect(() => {
    const unSubscribe = subscribe(() => setState(Math.random()));
    return () => unSubscribe();
  }, []);
  return storeState;
}

export default useSelector;

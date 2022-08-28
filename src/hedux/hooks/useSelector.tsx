import { useContext } from 'react';
import { HeduxStore } from '../..';
import { HeduxInitState } from '../moudles';

function useSelector<T>(key: keyof HeduxInitState): T {
  const state = useContext(HeduxStore).getState(key);
  return state;
}

export default useSelector;

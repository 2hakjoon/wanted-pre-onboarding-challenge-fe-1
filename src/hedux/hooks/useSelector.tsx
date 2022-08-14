import { useContext } from 'react';
import { HeduxStore } from '../..';
import { HeduxInitState } from '../moudles';

function useSelector(key: keyof HeduxInitState) {
  const state = useContext(HeduxStore).getState(key);
  return  state;
}

export default useSelector;

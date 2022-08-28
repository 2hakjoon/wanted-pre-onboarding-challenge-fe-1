import { useContext } from 'react';
import { HeduxStore } from '../..';

function useDispatch() {
  const dispatch = (type: string, payload: object) => useContext(HeduxStore).dispatch(type, payload);

  return { dispatch };
}

export default useDispatch;

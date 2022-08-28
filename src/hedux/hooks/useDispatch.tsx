import { useContext } from 'react';
import { HeduxStore } from '../..';

function useDispatch() {
  const { dispatch } = useContext(HeduxStore);

  return (type: string, payload: object) => {
    dispatch(type, payload);
  };
}

export default useDispatch;

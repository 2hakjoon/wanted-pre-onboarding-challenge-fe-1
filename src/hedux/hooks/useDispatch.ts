import { useContext } from 'react';
import { HeduxContext } from '../component/HeduxContext';

function useDispatch() {
  const { dispatch } = useContext(HeduxContext);

  return (type: string, payload: object) => {
    dispatch(type, payload);
  };
}

export default useDispatch;

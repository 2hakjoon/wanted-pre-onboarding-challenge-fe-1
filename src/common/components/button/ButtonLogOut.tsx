import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authTokenKey, persistStore } from '../../../persistStore/persistStore';
import ButtonBasic from './ButtonBasic';

function ButtonLogOut() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    persistStore.remove(authTokenKey);
    navigate('/');
    window.location.reload();
  };

  return <ButtonBasic data-cy="button-logout" title="로그아웃" onClick={logoutHandler} />;
}

export default ButtonLogOut;

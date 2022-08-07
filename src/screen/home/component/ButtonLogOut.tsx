import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import { authToken } from '../../../common/constants/local-storage';

function ButtonLogOut() {
  const navigate = useNavigate()
  const logoutHandler = () => {
    localStorage.removeItem(authToken);
    navigate("/")
    window.location.reload();
  };

  return <ButtonBasic data-cy="button-logout" title="로그아웃" onClick={logoutHandler} />;
}

export default ButtonLogOut;

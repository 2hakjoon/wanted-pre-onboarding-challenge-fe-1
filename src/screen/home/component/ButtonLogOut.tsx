import React from 'react';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import { authToken } from '../../../common/constants/local-storage';

function ButtonLogOut() {
  const logoutHandler = () => {
    localStorage.removeItem(authToken);
    window.location.reload();
  };

  return <ButtonBasic title="로그아웃" onClick={logoutHandler} />;
}

export default ButtonLogOut;

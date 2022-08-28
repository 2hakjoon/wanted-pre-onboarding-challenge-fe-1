import React from 'react';
import styled from 'styled-components';
import { LoginFormContainer } from './LoginFormTemplate';

const LoginFormErrorContainer = styled(LoginFormContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoginFormError() {
  return (
    <LoginFormErrorContainer>
      <span>오류가 발생했어요.</span>
    </LoginFormErrorContainer>
  );
}

export default LoginFormError;

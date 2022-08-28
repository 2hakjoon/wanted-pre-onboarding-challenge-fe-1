import React from 'react';
import styled from 'styled-components';
import { LoginFormContainer } from './LoginFormTemplate';

const LoginFormLoadingContainer = styled(LoginFormContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoginFormLoading() {
  return (
    <LoginFormLoadingContainer>
      <span>로딩중....</span>
    </LoginFormLoadingContainer>
  );
}

export default LoginFormLoading;

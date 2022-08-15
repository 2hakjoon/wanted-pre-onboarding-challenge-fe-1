import React from 'react';
import styled from 'styled-components';
import LoadingAndError from '../../common/components/error-loading/LoadingAndError';
import TitleHelmet from '../../common/components/helmet/TitleHelmet';
import LoginFormError from './template/LoginFormError';
import LoginFormLoading from './template/LoginFormLoading';
import LoginFormTemplate from './template/LoginFormTemplate';

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function LoginScreen() {
  return (
    <Container>
      <TitleHelmet title="로그인" />
      <LoadingAndError errorFallback={<LoginFormError />} loadingFallback={<LoginFormLoading />}>
        <LoginFormTemplate />
      </LoadingAndError>
    </Container>
  );
}

export default LoginScreen;

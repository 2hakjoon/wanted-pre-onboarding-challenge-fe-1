import React from 'react';
import styled from 'styled-components';
import TitleHelmet from '../../common/components/helmet/TitleHelmet';
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
      <LoginFormTemplate />
    </Container>
  );
}

export default LoginScreen;

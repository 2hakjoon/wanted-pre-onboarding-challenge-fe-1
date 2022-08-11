import React from 'react';
import styled from 'styled-components';
import TitleHelmet from '../../common/components/helmet/TitleHelmet';
import SignUpFormTemplate from './template/SignUpFormTemplate';

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function SignUpScreen() {
  return (
    <Container>
      <TitleHelmet title="회원가입" />
      <SignUpFormTemplate />
    </Container>
  );
}

export default SignUpScreen;

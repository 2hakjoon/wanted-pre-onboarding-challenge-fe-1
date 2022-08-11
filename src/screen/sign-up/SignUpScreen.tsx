import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import TitleHelmet from '../../common/components/helmet/TitleHelmet';
import SignUpFormTemplate from './template/SignUpFormTemplate';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function SignUpScreen() {
  return (
    <Wrapper>
      <TitleHelmet title="회원가입" />
      <SignUpFormTemplate />
    </Wrapper>
  );
}

export default SignUpScreen;

import React from 'react';
import styled from 'styled-components';
import LoadingAndError from '../../common/components/error-loading/LoadingAndError';
import TitleHelmet from '../../common/components/helmet/TitleHelmet';
import SignUpFormError from './template/SignUpFormError';
import SignUpFormLoading from './template/SignUpFormLoading';
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
      <LoadingAndError errorFallback={<SignUpFormError />} loadingFallback={<SignUpFormLoading />}>
        <SignUpFormTemplate />
      </LoadingAndError>
    </Container>
  );
}

export default SignUpScreen;

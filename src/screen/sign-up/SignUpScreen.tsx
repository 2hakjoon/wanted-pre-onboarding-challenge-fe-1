import React from 'react';
import styled from 'styled-components';
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
      <SignUpFormTemplate />
    </Wrapper>
  );
}

export default SignUpScreen;
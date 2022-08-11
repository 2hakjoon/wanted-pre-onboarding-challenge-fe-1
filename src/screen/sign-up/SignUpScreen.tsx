import React from 'react';
import styled from 'styled-components';
import SignUpTemplate from './template/SignUpTemplate';

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
      <SignUpTemplate />
    </Wrapper>
  );
}

export default SignUpScreen;

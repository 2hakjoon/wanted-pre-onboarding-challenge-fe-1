import React from 'react';
import styled from 'styled-components';
import { SignUpFormContainer } from './SignUpFormTemplate';

const SignUpFormLoadingContainerr = styled(SignUpFormContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SignUpFormLoading() {
  return (
    <SignUpFormLoadingContainerr>
      <span>로딩중.</span>
    </SignUpFormLoadingContainerr>
  );
}

export default SignUpFormLoading;

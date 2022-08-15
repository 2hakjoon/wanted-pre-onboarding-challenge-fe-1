import React from 'react';
import styled from 'styled-components';
import { SignUpFormContainer } from './SignUpFormTemplate';

const SignUpFormErrorContainer = styled(SignUpFormContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SignUpFormError() {
  return (
    <SignUpFormErrorContainer>
      <span>오류가 발생했어요.</span>
    </SignUpFormErrorContainer>
  );
}

export default SignUpFormError;

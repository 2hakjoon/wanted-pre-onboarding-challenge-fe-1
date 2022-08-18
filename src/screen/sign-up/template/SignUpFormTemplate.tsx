import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { SignUpError, SignUpParams, SignUpResponse } from '../../../api/Auth/types';
import InputLabel from '../../../common/components/input/InputLabel';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import { emailPattern, passwordPattern } from '../../../common/constants/regex';
import { persistStore } from '../../../persistStore/persistStore';
import useSignUpMutation from '../hooks/useSignUpMutation';
import useSignUpForm from '../hooks/useSignUpForm';

export const SignUpFormContainer = styled.form`
  border: 2px solid gray;
  border-radius: 20px;
  width: 400px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

function SignUpFormTemplate() {
  const navigate = useNavigate();

  const { mutate } = useSignUpMutation();
  const { register, handleSubmit, isFormValid } = useSignUpForm();

  const signUpRequest = ({ email, password }: SignUpParams) => {
    const onSuccess = ({ token }: SignUpResponse) => {
      window.alert('회원가입이 완료되었습니다.');
      persistStore.set('TOKEN', token);
      navigate('/', { replace: true });
      window.location.reload();
    };

    const onError = ({ response }: SignUpError) => {
      return response?.data && window.alert(response?.data.details);
    };
    mutate({ email, password }, { onSuccess, onError });
  };

  return (
    <SignUpFormContainer onSubmit={handleSubmit(signUpRequest)}>
      <span className="text-head">회원가입</span>
      <InputLabel
        title="이메일"
        register={register('email', { pattern: emailPattern })}
        data-cy="input-email"
        placeholder="이메일을 입력해주세요."
      />
      <InputLabel
        title="비밀번호"
        data-cy="input-password"
        type="password"
        register={register('password', { pattern: passwordPattern })}
        placeholder="비밀번호를 입력해주세요."
      />
      <ButtonBasic title="회원가입" disabled={isFormValid()} type="submit" data-cy="button-join" />
      <a className="link-join" href="/" data-cy="link-login">
        로그인하기
      </a>
    </SignUpFormContainer>
  );
}

export default SignUpFormTemplate;

import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { LoginError, LoginParams, LoginResponse } from '../../../api/Auth/types';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputLabel from '../../../common/components/input/InputLabel';
import { emailPattern, passwordPattern } from '../../../common/constants/regex';
import useLogin from '../hooks/useLogin';

export const LoginFormContainer = styled.form`
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

function LoginFormTemplate() {
  const { register, getValues, formState, handleSubmit } = useForm<LoginParams>({ mode: 'onChange' });

  const { mutate } = useLogin();

  const loginAndRefresh = ({ email, password }: LoginParams) => {
    const onSuccess = ({ token }: LoginResponse) => {
      if (token) {
        window.alert('로그인이 완료되었습니다.');
        localStorage.setItem('TOKEN', token);
        window.location.reload();
      }
    };

    const onError = ({response}: LoginError) => {
      window.alert(response?.data.details);
    };

    mutate({ email, password }, { onSuccess, onError });
  };

  const isNotValild = () => {
    return (
      Boolean(formState.errors.email?.type) === true ||
      Boolean(formState.errors.password?.type) === true ||
      !getValues('email') ||
      !getValues('password')
    );
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(loginAndRefresh)}>
      <span className="text-head">로그인</span>
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
      <ButtonBasic title="로그인" type="submit" data-cy="button-login" disabled={isNotValild()} />
      <a className="link-join" href="/join" data-cy="link-join">
        회원가입하기
      </a>
    </LoginFormContainer>
  );
}

export default LoginFormTemplate;

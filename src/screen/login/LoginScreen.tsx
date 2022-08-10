import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { apiLogin } from '../../api/Auth/login';
import { LoginParams, LoginResponse } from '../../api/Auth/types';
import ButtonBasic from '../../common/components/button/ButtonBasic';
import InputLabel from '../../common/components/input/InputLabel';
import { emailPattern, passwordPattern } from '../../common/constants/regex';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  form {
    border: 2px solid gray;
    border-radius: 20px;
    width: 400px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }
`;

function LoginScreen() {
  const { register, getValues, formState, handleSubmit } = useForm<LoginParams>({ mode: 'onChange' });

  const { mutate } = useMutation(apiLogin);

  const loginHandler = ({ email, password }: LoginParams) => {
    const onSuccess = ({ details, token }: LoginResponse) => {
      if (details) {
        window.alert(details);
        return;
      }
      if (token) {
        window.alert('로그인이 완료되었습니다.');
        localStorage.setItem('TOKEN', token);
        window.location.reload();
      }
    };

    mutate({ email, password }, { onSuccess });
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
    <Wrapper>
      <form onSubmit={handleSubmit(loginHandler)}>
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
      </form>
    </Wrapper>
  );
}

export default LoginScreen;

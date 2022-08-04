import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apiLogin, LoginResponse } from '../api/Auth/login';
import { apiSignUp } from '../api/Auth/signUp';
import { emailPattern, passwordPattern } from '../common/constants/regex';

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
  const { register, getValues, formState } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();

  const { data, mutate } = useMutation(apiLogin);

  const loginHandler = (e: any) => {
    e.preventDefault();

    const onSuccess = ({ message, details, token }: LoginResponse) => {
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

    mutate({ email: getValues('email'), password: getValues('password') }, { onSuccess });
  };

  const isFullFilled = () => {
    return (
      Boolean(formState.errors.email?.type) === true ||
      Boolean(formState.errors.password?.type) === true ||
      !Object.keys(getValues()).length
    );
  };

  return (
    <Wrapper>
      <form>
        <span className="text-head">로그인</span>
        <input
          {...register('email', { pattern: emailPattern })}
          className="input"
          data-cy="input-email"
          placeholder="이메일을 입력해주세요."
        />
        <span>비밀번호</span>
        <input
          {...register('password', { pattern: passwordPattern })}
          className="input"
          data-cy="input-password"
          placeholder="비밀번호를 입력해주세요."
        />
        <button
          className="btn-login"
          type="submit"
          data-cy="button-login"
          onClick={(e) => loginHandler(e)}
          disabled={isFullFilled()}
        >
          로그인
        </button>
        <a className="link-join" href="/join" data-cy="link-join">
          회원가입하기
        </a>
      </form>
    </Wrapper>
  );
}

export default LoginScreen;

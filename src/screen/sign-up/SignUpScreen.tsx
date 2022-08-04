import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apiSignUp, SignUpResponse } from '../../api/Auth/signUp';
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

interface FormProps {
  email: string;
  password: string;
}

function SignUpScreen() {
  const { register, getValues, formState, handleSubmit } = useForm<FormProps>({ mode: 'onChange' });
  const navigate = useNavigate();

  const { mutate } = useMutation(apiSignUp);

  const joinHandler = ({ email, password }: FormProps) => {
    const onSuccess = ({ details, token }: SignUpResponse) => {
      if (details) {
        window.alert(details);
        return;
      }
      if (token) {
        window.alert('회원가입이 완료되었습니다.');
        localStorage.setItem('TOKEN', token);
        navigate('/');
        window.location.reload();
      }
    };

    mutate({ email, password }, { onSuccess });
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
      <form onSubmit={handleSubmit(joinHandler)}>
        <span className="text-head">회원가입</span>
        <span>이메일</span>
        <input {...register('email', { pattern: emailPattern, required: true })} />
        <span>비밀번호</span>
        <input
          type="password"
          {...register('password', { pattern: passwordPattern, required: true })}
          className="input"
          data-cy="input-password"
          placeholder="비밀번호를 입력해주세요."
        />
        <button
          disabled={isFullFilled()}
          className="btn-login"
          type="submit"
          data-cy="button-join"
        >
          회원가입
        </button>
        <a className="link-join" href="/" data-cy="link-login">
          로그인하기
        </a>
      </form>
    </Wrapper>
  );
}

export default SignUpScreen;

import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { apiSignUp, SignUpResponse } from '../api/Auth/signUp';

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

function SignUpScreen() {
  const { register, getValues } = useForm();
  const navigate = useNavigate()

  const { data, mutate } = useMutation(apiSignUp);

  const joinHandler = (e: any) => {
    e.preventDefault();

    const onSuccess = ({ message, details, token }: SignUpResponse) => {
      if (details) {
        window.alert(details);
        return;
      }
      if (token) {
        window.alert('회원가입이 완료되었습니다.');
        localStorage.setItem('TOKEN', token);
        navigate("/")
        window.location.reload();
      }
    };

    mutate({ email: getValues('email'), password: getValues('password') }, { onSuccess });
  };

  return (
    <Wrapper>
      <form>
        <span className="text-head">회원가입</span>
        <input {...register('email')} className="input" data-cy="input-email" placeholder="이메일을 입력해주세요." />
        <span>비밀번호</span>
        <input
          {...register('password')}
          className="input"
          data-cy="input-password"
          placeholder="비밀번호를 입력해주세요."
        />
        <button className="btn-login" type="submit" data-cy="button-join" onClick={(e) => joinHandler(e)}>
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

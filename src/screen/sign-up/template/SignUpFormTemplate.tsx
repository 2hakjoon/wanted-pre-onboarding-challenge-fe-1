import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { SignUpError, SignUpParams, SignUpResponse } from '../../../api/Auth/types';
import InputLabel from '../../../common/components/input/InputLabel';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import { persistStore } from '../../../persistStore/persistStore';
import useSignUpMutation from '../hooks/useSignUpMutation';
import useSignUpForm from '../hooks/useSignUpForm';

export const SignUpFormContainer = styled.form`
  border-radius: 10px;
  width: 400px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  .text-head {
    font-size: 30px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .input-container {
    span {
      font-size: 20px;
    }
    width: 100%;
    height: 50px;
    .text-error {
      display: block;
      margin-top: 10px;
      color: red;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

function SignUpFormTemplate() {
  const navigate = useNavigate();

  const { mutate } = useSignUpMutation();
  const { register, handleSubmit, isFormNotValid, emailError, passwordError } = useSignUpForm();

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
      <div className="input-container">
        <InputLabel
          title="이메일"
          register={register('email')}
          data-cy="input-email"
          placeholder="이메일을 입력해주세요."
        />
        {emailError && <span className="text-error">{emailError}</span>}
      </div>
      <div className="input-container">
        <InputLabel
          title="비밀번호"
          data-cy="input-password"
          type="password"
          register={register('password')}
          placeholder="비밀번호를 입력해주세요."
        />
        {passwordError && <span className="text-error">{passwordError}</span>}
      </div>
      <ButtonBasic title="회원가입" disabled={isFormNotValid()} type="submit" data-cy="button-join" />
      <a className="link-join" href="/" data-cy="link-login">
        로그인하기
      </a>
    </SignUpFormContainer>
  );
}

export default SignUpFormTemplate;

import React from 'react';
import styled from 'styled-components';
import { LoginError, LoginParams, LoginResponse } from '../../../api/Auth/types';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputLabel from '../../../common/components/input/InputLabel';
import { authTokenKey, persistStore } from '../../../persistStore/persistStore';
import useLoginMutation from '../hooks/useLoginMutation';
import useLoginForm from '../hooks/useLoginForm';
import useDispatch from '../../../hedux/hooks/useDispatch';
import { ACTION_LOGIN } from '../../../hedux/moudles/auth';

export const LoginFormContainer = styled.form`
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

function LoginFormTemplate() {
  const dispatch = useDispatch();
  const { mutate } = useLoginMutation();
  const { register, handleSubmit, isFormNotValid, emailError, passwordError } = useLoginForm();

  const loginRequest = ({ email, password }: LoginParams) => {
    const onSuccess = ({ token }: LoginResponse) => {
      window.alert('로그인이 완료되었습니다.');
      persistStore.set(authTokenKey, token);
      dispatch(ACTION_LOGIN, { isLoggedIn: true });
    };

    const onError = ({ response }: LoginError) => {
      return response?.data && window.alert(response?.data.details);
    };

    mutate({ email, password }, { onSuccess, onError });
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(loginRequest)}>
      <span className="text-head">로그인</span>
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

      <ButtonBasic title="로그인" type="submit" data-cy="button-login" disabled={isFormNotValid()} />
      <a className="link-join" href="/join" data-cy="link-join">
        회원가입하기
      </a>
    </LoginFormContainer>
  );
}

export default LoginFormTemplate;

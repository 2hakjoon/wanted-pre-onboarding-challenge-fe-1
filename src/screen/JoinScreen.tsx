import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
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
    justify-content:space-around;
    align-items: center;
    padding: 20px;
  }
`;


function JoinScreen() {
  return (
    <Wrapper>
      <form>
        <span className="text-head">회원가입</span>
        <input className="input" data-cy="input-email" placeholder="이메일을 입력해주세요." />
        <span>비밀번호</span>
        <input className="input" data-cy="input-password" placeholder="비밀번호를 입력해주세요." />
        <button className="btn-login" type="submit" data-cy="button-login">
          회원가입
        </button>
        <a className="link-join" href="/" data-cy="link-join">
          로그인하기
        </a>
      </form>
    </Wrapper>
  );
}

export default JoinScreen;

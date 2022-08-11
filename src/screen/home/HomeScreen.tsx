import React from 'react';
import styled from 'styled-components';
import TodoDetailTemplate from './template/TodoDetailTemplate';
import TodoListTemplate from './template/TodoListTemplate';
import ButtonLogOut from './component/ButtonLogOut';
import TodoWriteTemplate from './template/TodoWriteTemplate';

const Wrapper = styled.div`
  width: 1000px;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  > :first-child {
    align-self: flex-end;
    margin-bottom: 20px;
  }
  .wrapper-todo {
    display: flex;
    height: 80%;
    padding: 20px;
    > :first-child {
      width: 30%;
    }
    > :nth-child(2) {
      width: 70%;
    }
  }
`;

function HomeScreen() {
  return (
    <Wrapper>
      <ButtonLogOut />
      <TodoWriteTemplate />
      <div className="wrapper-todo">
        <TodoListTemplate />
        <TodoDetailTemplate />
      </div>
    </Wrapper>
  );
}

export default HomeScreen;

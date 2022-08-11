import React from 'react';
import styled from 'styled-components';
import TodoDetailTemplate from './template/TodoDetailTemplate';
import TodoListTemplate from './template/TodoListTemplate';
import ButtonLogOut from '../../common/components/button/ButtonLogOut';
import TodoWriteTemplate from './template/TodoWriteTemplate';
import TitleHelmet from '../../common/components/helmet/TitleHelmet';
import LoadingAndError from '../../common/components/error-loading/LoadingAndError';
import TodoListLoading from './template/TodoListLoading';
import TodoListError from './template/TodoListError';
import TodoDetailLoading from './template/TodoDetailLoading';
import TodoDetailError from './template/TodoDetailError';

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
      <TitleHelmet title="To Do List" />
      <ButtonLogOut />
      <TodoWriteTemplate />
      <div className="wrapper-todo">
        <LoadingAndError onLoading={<TodoListLoading />} onError={<TodoListError />}>
          <TodoListTemplate />
        </LoadingAndError>

        <LoadingAndError onLoading={<TodoDetailLoading/>} onError={<TodoDetailError/>}>
          <TodoDetailTemplate />
        </LoadingAndError>
      </div>
    </Wrapper>
  );
}

export default HomeScreen;

import React from 'react';
import styled from 'styled-components';
import TodoDetailTemplate from './template/TodoDetailTemplate';
import TodoListTemplate from './template/TodoListTemplate';
import TodoWriteTemplate from './template/TodoWriteTemplate';
import TitleHelmet from '../../common/components/helmet/TitleHelmet';
import LoadingAndError from '../../common/components/error-loading/LoadingAndError';
import TodoListLoading from './template/TodoListLoading';
import TodoListError from './template/TodoListError';
import TodoDetailLoading from './template/TodoDetailLoading';
import TodoDetailError from './template/TodoDetailError';
import Header from '../../common/components/header/Header';

const Container = styled.div`
  width: 1000px;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  .container-todo {
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
    <Container>
      <TitleHelmet title="To Do List" />
      <Header />
      <TodoWriteTemplate />
      <div className="container-todo">
        <LoadingAndError loadingFallback={<TodoListLoading />} errorFallback={<TodoListError />}>
          <TodoListTemplate />
        </LoadingAndError>

        <LoadingAndError loadingFallback={<TodoDetailLoading />} errorFallback={<TodoDetailError />}>
          <TodoDetailTemplate />
        </LoadingAndError>
      </div>
    </Container>
  );
}

export default HomeScreen;

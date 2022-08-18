import React from 'react';
import styled from 'styled-components';
import TodoListCardLoading from '../component/TodoListCardLoading';
import { TodoListContainer } from './TodoListTemplate';

const TodoListLoadingContainer = styled(TodoListContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function TodoListLoading() {
  return (
    <TodoListLoadingContainer>
      <TodoListCardLoading />
      <TodoListCardLoading />
      <TodoListCardLoading />
      <TodoListCardLoading />
      <TodoListCardLoading />
      <TodoListCardLoading />
    </TodoListLoadingContainer>
  );
}

export default TodoListLoading;

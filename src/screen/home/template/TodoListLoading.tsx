import React from 'react';
import styled from 'styled-components';
import { TodoListContainer } from './TodoListTemplate';

const TodoListLoadingContainer = styled(TodoListContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodoListLoading() {
  return (
    <TodoListLoadingContainer>
      <span>목록 불러오는중...</span>
    </TodoListLoadingContainer>
  );
}

export default TodoListLoading;

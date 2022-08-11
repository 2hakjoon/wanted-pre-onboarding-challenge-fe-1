import React from 'react';
import styled from 'styled-components';
import { TodoDetailContainer } from './TodoDetailTemplate';

const TodoDetailLoadingContainer = styled(TodoDetailContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodoDetailLoading() {
  return (
    <TodoDetailLoadingContainer>
      <span>Todo 불러오는 중...</span>
    </TodoDetailLoadingContainer>
  );
}

export default TodoDetailLoading;

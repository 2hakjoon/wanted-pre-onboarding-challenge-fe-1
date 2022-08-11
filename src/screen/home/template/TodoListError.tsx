import React from 'react';
import styled from 'styled-components';
import { TodoListContainer } from './TodoListTemplate';

const TodoListErrorContainer = styled(TodoListContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodoListError() {
  return (
    <TodoListErrorContainer>
      <span>오류가 발생했어요.</span>
    </TodoListErrorContainer>
  );
}

export default TodoListError;

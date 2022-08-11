import React from 'react';
import styled from 'styled-components';
import { TodoDetailContainer } from './TodoDetailTemplate';

const TodoDetailErrorContainer = styled(TodoDetailContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodoDetailError() {
  return (
    <TodoDetailErrorContainer>
      <span>오류가 발생했어요.</span>
    </TodoDetailErrorContainer>
  );
}

export default TodoDetailError;

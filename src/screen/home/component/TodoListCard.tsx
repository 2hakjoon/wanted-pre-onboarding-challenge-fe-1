import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;


function TodoListCard({ title, createdAt, }: Todo) {

  return (
    <Wrapper>
      <span>{title}</span>
      <span>{createdAt}</span>
    </Wrapper>
  );
}

export default TodoListCard;

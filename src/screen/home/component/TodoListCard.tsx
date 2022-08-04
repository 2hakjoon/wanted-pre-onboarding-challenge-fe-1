import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;


function TodoListCard({ title, content, createdAt, updatedAt }: Todo) {

  return (
    <Wrapper>
      <span>{title}</span>
      <span>{content}</span>
      <span>{createdAt}</span>
      <span>{updatedAt}</span>
    </Wrapper>
  );
}

export default TodoListCard;

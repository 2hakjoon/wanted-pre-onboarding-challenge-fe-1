import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`;


function TodoDetail({ title, content, createdAt, updatedAt}: Todo) {

  return (
    <Wrapper>
      <span>{title}</span>
      <span>{content}</span>
      <span>{createdAt}</span>
      <span>{updatedAt}</span>
    </Wrapper>
  );
}

export default TodoDetail;

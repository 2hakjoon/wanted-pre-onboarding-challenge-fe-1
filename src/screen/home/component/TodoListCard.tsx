import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

interface TodoListCardProps {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

function TodoListCard({ title, content, createdAt, updatedAt }: TodoListCardProps) {
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

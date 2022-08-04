import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

interface TodoListCardProps extends Todo {
  onClick: () => void;
}

function TodoListCard({ title, createdAt, ...rest }: TodoListCardProps) {
  return (
    <Wrapper {...rest}>
      <span data-cy="text-todo-list-title">{title}</span>
      <span data-cy="text-todo-list-createdAt">{createdAt}</span>
    </Wrapper>
  );
}

export default TodoListCard;

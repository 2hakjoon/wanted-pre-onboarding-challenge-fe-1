import { useMutation } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import { apiDeleteTodo } from '../../../api/Todos/todos';
import { Todo } from '../../../api/Todos/types';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
`;

interface TodoListCardProps extends Todo {
  onClick: () => void;
}

function TodoListCard({ id, title, createdAt, ...rest }: TodoListCardProps) {
  const { mutate } = useMutation(apiDeleteTodo);

  // Todo 지우고 나서 refetch해야함
  const deleteTodoHandler = (e: any, id: string) => {
    e.stopPropagation();
    mutate(id);
  };

  return (
    <Wrapper {...rest}>
      <span data-cy="text-todo-list-title">{title}</span>
      <span data-cy="text-todo-list-createdAt">{createdAt}</span>
      <button type="button" data-cy="button-delete-todo" onClick={(e) => deleteTodoHandler(e, id)}>
        X
      </button>
    </Wrapper>
  );
}

export default TodoListCard;

import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiDeleteTodo } from '../../../api/Todos/todos';
import { Todo } from '../../../api/Todos/types';
import { routes } from '../../routes';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  &.select-card {
    background-color: red;
  }
`;

interface TodoListCardProps extends Todo {
  refetchTodos: () => void;
  selected: boolean;
}

function TodoListCard({ selected, id, title, createdAt, refetchTodos }: TodoListCardProps) {
  const { mutate } = useMutation(apiDeleteTodo);
  const { id: todoId } = useParams();
  const navigate = useNavigate();

  const deleteTodoHandler = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation();

    const onSuccess = () => {
      if (id === todoId) {
        navigate('/', { replace: true });
      }
      refetchTodos();
    };

    mutate(id, { onSuccess });
  };

  return (
    <Wrapper data-cy="wrapper-todo-card" className={`${selected ? 'select-card' : ''}`}>
      <Link to={routes.home + id} data-cy="link-todo-detail">
        <span data-cy="text-todo-list-title">{title}</span>
        <span data-cy="text-todo-list-createdAt">{createdAt}</span>
      </Link>
      <button type="button" data-cy="button-delete-todo" onClick={(e) => deleteTodoHandler(e, id)}>
        X
      </button>
    </Wrapper>
  );
}

export default TodoListCard;

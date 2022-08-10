import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';
import { routes } from '../../routes';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import { apiTodos } from '../../../api/Todos/todos';

const Wrapper = styled.li`
  display: flex;
  border: 2px solid darkgray;
  padding: 20px;
  border-radius: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
  &.select-card {
    background-color: skyblue;
    span {
      color: white;
    }
  }
  > a {
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

interface TodoListCardProps extends Todo {
  refetchTodos: () => void;
  selected: boolean;
}

function TodoListCard({ selected, id, title, createdAt, refetchTodos }: TodoListCardProps) {
  const { mutate } = useMutation(apiTodos.deleteTodo);
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
        <span data-cy="text-todo-list-createdAt">{`${dayjs(createdAt).format('YYYY/MM/DD')}`}</span>
      </Link>
      <ButtonBasic title="X" type="button" data-cy="button-delete-todo" onClick={(e) => deleteTodoHandler(e, id)} />
    </Wrapper>
  );
}

export default TodoListCard;

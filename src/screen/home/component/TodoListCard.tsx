import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';
import { routes } from '../../routes';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import useDeleteTodo from '../hooks/useDeleteTodo';

const Container = styled.li`
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
  const { mutate } = useDeleteTodo();
  const { id: currentTodoId } = useParams();
  const navigate = useNavigate();

  const deleteTodo = (e: React.MouseEvent<HTMLElement>, willDeleteTodoId: string) => {
    e.stopPropagation();

    mutate(willDeleteTodoId, {
      onSuccess: () => {
        if (willDeleteTodoId === currentTodoId) {
          navigate('/', { replace: true });
        }
        refetchTodos();
      },
    });
  };

  return (
    <Container data-cy="container-todo-card" className={`${selected ? 'select-card' : ''}`}>
      <Link to={routes.home + id} data-cy="link-todo-detail">
        <span data-cy="text-todo-list-title">{title}</span>
        <span data-cy="text-todo-list-createdAt">{`${dayjs(createdAt).format('YYYY/MM/DD')}`}</span>
      </Link>
      <ButtonBasic title="X" type="button" data-cy="button-delete-todo" onClick={(e) => deleteTodo(e, id)} />
    </Container>
  );
}

export default TodoListCard;

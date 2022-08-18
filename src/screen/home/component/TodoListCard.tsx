import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Todo } from '../../../api/Todos/types';
import { routes } from '../../routes';
import useDeleteTodo from '../hooks/useDeleteTodo';
import IconTrashBox from '../../../common/components/icons/IconTrashBox';

const Container = styled.li`
  display: flex;
  border: 1px solid darkgray;
  padding: 15px;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 10px;
  &.selected {
    background-color: #0d47a1;
    span,
    button > svg {
      color: white;
      fill: white;
    }
  }
  > a {
    width: 100%;
    margin-right: 10px;
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text-title {
    width: 150px;
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text-date {
    font-size: 12px;
  }
  .button-delete {
    font-size: 18px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
  }
`;


function TodoListCard({ id, title, createdAt }: Todo) {
  const { mutate } = useDeleteTodo();
  const { id: currentTodoId } = useParams();
  const navigate = useNavigate();

  const isCardSelected = () => {
    return id === currentTodoId;
  };

  const deleteTodo = (e: React.MouseEvent<HTMLElement>, willDeleteTodoId: string) => {
    e.stopPropagation();
    if (!window.confirm('삭제 하시겠습니까?')) return;

    mutate(willDeleteTodoId, {
      onSuccess: () => {
        if (isCardSelected()) {
          navigate('/', { replace: true });
        }
      },
    });
  };

  return (
    <Container data-cy="container-todo-card" className={`${isCardSelected() ? 'selected' : ''}`}>
      <Link to={routes.home + id} data-cy="link-todo-detail">
        <span data-cy="text-todo-list-title" className="text-title">
          {title}
        </span>
        <span data-cy="text-todo-list-createdAt" className="text-date">
          {`${dayjs(createdAt).format('YYYY/MM/DD')}`}
        </span>
      </Link>
      <button
        className="button-delete"
        title="X"
        type="button"
        data-cy="button-delete-todo"
        onClick={(e) => deleteTodo(e, id)}
      >
        <IconTrashBox />
      </button>
    </Container>
  );
}

export default TodoListCard;

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiGetTodos, ApiGetTodosResponse } from '../../../api/Todos/todos';
import TodoListCard from '../component/TodoListCard';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  border: 2px solid darkgray;
  border-radius: 30px;
  margin-right: 50px;
  padding: 20px 10px 20px 20px;
  ul {
    padding-right: 10px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 10px; /*스크롤바의 너비*/
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: gray; /*스크롤바의 색상*/
    }

    &::-webkit-scrollbar-track {
      background-color: none; /*스크롤바 트랙 색상*/
    }
  }
`;

function TodoListTemplate() {
  const { data: todosData, refetch: refetchTodos } = useQuery<ApiGetTodosResponse>(['getTodos'], apiGetTodos);
  const { id: todoId } = useParams();

  return (
    <Wrapper data-cy="wrapper-todo-list">
      <ul>
        {todosData?.length ? (
          todosData?.map((todo) => (
            <TodoListCard key={todo.id} {...todo} refetchTodos={refetchTodos} selected={todoId === todo.id} />
          ))
        ) : (
          <span>할 일이 아직 없어요..</span>
        )}
      </ul>
    </Wrapper>
  );
}

export default TodoListTemplate;

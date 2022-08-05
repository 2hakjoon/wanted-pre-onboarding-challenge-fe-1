import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiGetTodos, ApiGetTodosResponse } from '../../../api/Todos/todos';
import TodoListCard from '../component/TodoListCard';

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  border: 2px solid darkgray;
  border-radius: 30px;
  margin-right: 50px;
  padding: 20px 20px;
`;

function TodoListTemplate() {
  const { data: todosData, refetch: refetchTodos } = useQuery<ApiGetTodosResponse>(['getTodos'], apiGetTodos);
  const { id: todoId } = useParams();

  return (
    <Wrapper data-cy="wrapper-todo-list">
      {todosData?.length ? (
        todosData?.map((todo) => (
          <TodoListCard key={todo.id} {...todo} refetchTodos={refetchTodos} selected={todoId === todo.id} />
        ))
      ) : (
        <span>할 일이 아직 없어요..</span>
      )}
    </Wrapper>
  );
}

export default TodoListTemplate;

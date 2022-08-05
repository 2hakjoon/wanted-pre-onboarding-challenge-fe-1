import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiGetTodos, ApiGetTodosResponse } from '../../../api/Todos/todos';
import TodoListCard from '../component/TodoListCard';

const Wrapper = styled.ul``;


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
        <span>할 일 을 저장해 보세요.</span>
      )}
    </Wrapper>
  );
}

export default TodoListTemplate;

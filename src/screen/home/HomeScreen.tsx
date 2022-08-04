import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { apiGetTodos, ApiGetTodosResponse } from '../../api/Todos/todos';
import TodoListCard from './component/TodoListCard';

const Wrapper = styled.section``;

function HomeScreen() {
  const { data } = useQuery<ApiGetTodosResponse>(['getTodos'], apiGetTodos);

  return (
    <Wrapper>
      <div>
        <input placeholder="할 일을 입력 해 주세요." data-cy='input-todo'/>
        <button type="submit" data-cy='button-save-todo'>저장</button>
      </div>
      <ul>
        {!!data?.length  && data?.map((todo) => (
          <TodoListCard {...todo} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default HomeScreen;

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiGetTodoById, ApiGetTodoById } from '../../../api/Todos/todos';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

interface TodoDetail {
  refetchTodos: () => void;
}

function TodoDetail({ refetchTodos }: TodoDetail) {
  const { id: todoId } = useParams();
  const { data: todoData, refetch: refetchTodo } = useQuery<ApiGetTodoById>(
    ['getTodoById', todoId],
    () => apiGetTodoById(todoId),
    { enabled: !!todoId },
  );
  return (
    <Wrapper>
      {todoData && (
        <>
          <button type="button">수정</button>
          <span>{todoData.title}</span>
          <span>{todoData.content}</span>
          <span>{todoData.createdAt}</span>
          <span>{todoData.updatedAt}</span>
        </>
      )}
    </Wrapper>
  );
}

export default TodoDetail;

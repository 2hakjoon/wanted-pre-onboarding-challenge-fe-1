import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiGetTodoById, ApiGetTodoById, apiUpdateTodo } from '../../../api/Todos/todos';
import { Todo, TodoParams } from '../../../api/Todos/types';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

interface TodoDetail {
  refetchTodos: () => void;
}

function TodoDetail({ refetchTodos }: TodoDetail) {
  const { id: todoId } = useParams();
  if (!todoId) {
    return <>Todo를 선택해주세요.</>;
  }

  const { register, handleSubmit } = useForm<TodoParams>();
  const { data: todoData, refetch: refetchTodo } = useQuery<ApiGetTodoById>(
    ['getTodoById', todoId],
    () => apiGetTodoById(todoId),
    { enabled: !!todoId },
  );
  const { mutate } = useMutation(apiUpdateTodo);

  const [editMode, setEditmode] = useState(false);

  const handleUpdateTodo = ({ title, content }: TodoParams) => {
    if (title.length === 0 || content.length === 0) {
      window.alert('내용을 입력해주세요.');
      return;
    }
    const onSuccess = () => {
      refetchTodos();
      refetchTodo();
    };
    mutate({ id: todoId, params: { title, content } }, { onSuccess });
  };

  return (
    <Wrapper>
      {todoData && (
        <>
          <button type="button" data-cy="button-edit-mode">수정</button>
          {editMode && (
            <form>
              <input placeholder={todoData.title} data-cy="input-edit-todo-title" />
              <input placeholder={todoData.content} data-cy="input-edit-todo-content"/>
              <button type="button" data-cy="button-edit-cancel">취소</button>
              <button type="submit" data-cy="button-edit-save">저장</button>
            </form>
          )}
          <span data-cy="text-todo-detail-title">{todoData.title}</span>
          <span data-cy="text-todo-detail-content">{todoData.content}</span>
          <span data-cy="text-todo-detail-createdAt">{todoData.createdAt}</span>
          <span data-cy="text-todo-detail-updatedAt">{todoData.updatedAt}</span>
        </>
      )}
    </Wrapper>
  );
}

export default TodoDetail;

import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { apiGetTodoById, ApiGetTodoById, apiGetTodos, ApiGetTodosResponse, apiUpdateTodo } from '../../../api/Todos/todos';
import { TodoParams } from '../../../api/Todos/types';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function TodoDetailTemplate() {
  const { id: todoId } = useParams();
  if (!todoId) {
    return <>Todo를 선택해주세요.</>;
  }

  const { refetch: refetchTodos } = useQuery<ApiGetTodosResponse>(['getTodos'], apiGetTodos);
  const { register, handleSubmit } = useForm<TodoParams>();
  const { data: todoData, refetch: refetchTodo } = useQuery<ApiGetTodoById>(
    ['getTodoById', todoId],
    () => apiGetTodoById(todoId),
    { enabled: !!todoId },
  );
  const { mutate } = useMutation(apiUpdateTodo);

  const [editMode, setEditMode] = useState(false);

  const onEditMode = () => {
    setEditMode(true);
  };
  const closeEditMode = () => {
    setEditMode(false);
  };

  const handleUpdateTodo = ({ title, content }: TodoParams) => {
    if (title.length === 0 || content.length === 0) {
      window.alert('내용을 입력해주세요.');
      return;
    }
    const onSuccess = () => {
      setEditMode(false);
      refetchTodos();
      refetchTodo();
    };
    mutate({ id: todoId, params: { title, content } }, { onSuccess });
  };

  return (
    <Wrapper>
      {todoData && (
        <>
          {!editMode ? (
            <button type="button" data-cy="button-edit-mode" onClick={onEditMode}>
              수정
            </button>
          ) : (
            <form onSubmit={handleSubmit(handleUpdateTodo)}>
              <input {...register('title')} placeholder={todoData.title} data-cy="input-edit-todo-title" />
              <input {...register('content')} placeholder={todoData.content} data-cy="input-edit-todo-content" />
              <button type="button" data-cy="button-edit-cancel" onClick={closeEditMode}>
                취소
              </button>
              <button type="submit" data-cy="button-edit-save">
                저장
              </button>
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

export default TodoDetailTemplate;

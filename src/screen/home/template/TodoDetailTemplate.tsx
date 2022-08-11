import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { TodoParams } from '../../../api/Todos/types';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import { apiTodos } from '../../../api/Todos/todos';
import useGetTodos from '../hooks/useGetTodos';
import useGetTodoById from '../hooks/useGetTodoById';

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid darkgray;
  border-radius: 30px;
  padding: 20px 20px;
  .button-edit-mode {
    align-self: flex-end;
  }
  form {
    display: flex;
    flex-direction: column;
    > * {
      margin-bottom: 10px;
    }
    div {
      > :first-child {
        margin-right: 40px;
      }
    }
  }
`;

function TodoDetailTemplate() {
  const { id: todoId } = useParams();

  const { refetch: refetchTodos } = useGetTodos();
  const { register, handleSubmit } = useForm<TodoParams>();
  const { data: todoData, refetch: refetchTodo } = useGetTodoById(todoId);
  const { mutate } = useMutation(apiTodos.updateTodo);

  const [editMode, setEditMode] = useState(false);

  const onEditMode = () => {
    setEditMode(true);
  };
  const closeEditMode = () => {
    setEditMode(false);
  };

  const handleUpdateTodo = ({ title, content }: TodoParams) => {
    if (!todoId) {
      return;
    }
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
      {todoData ? (
        <>
          {!editMode ? (
            <ButtonBasic
              className="button-edit-mode"
              title="수정"
              type="button"
              data-cy="button-edit-mode"
              onClick={onEditMode}
            />
          ) : (
            <form onSubmit={handleSubmit(handleUpdateTodo)}>
              <InputBasic register={register('title')} placeholder={todoData.title} data-cy="input-edit-todo-title" />
              <InputBasic
                register={register('content')}
                placeholder={todoData.content}
                data-cy="input-edit-todo-content"
              />
              <div>
                <ButtonBasic title="취소" type="button" data-cy="button-edit-cancel" onClick={closeEditMode} />
                <ButtonBasic title="저장" type="submit" data-cy="button-edit-save" />
              </div>
            </form>
          )}
          <span data-cy="text-todo-detail-title">제목 : {todoData.title}</span>
          <span data-cy="text-todo-detail-content">내용 : {todoData.content}</span>
          <span data-cy="text-todo-detail-createdAt">{`작성한 시간 : ${dayjs(todoData.createdAt).format(
            'YYYY/YY/MM - HH시mm분',
          )}`}</span>
          <span data-cy="text-todo-detail-updatedAt">{`마지막으로 수정한 시간 : ${dayjs(todoData.updatedAt).format(
            'YYYY/YY/MM - HH시mm분',
          )}`}</span>
        </>
      ) : (
        <span>할 일을 선택해주세요.</span>
      )}
    </Wrapper>
  );
}

export default TodoDetailTemplate;

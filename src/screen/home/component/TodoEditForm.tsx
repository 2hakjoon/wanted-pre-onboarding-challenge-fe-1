import styled from 'styled-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import { TodoParams } from '../../../api/Todos/types';
import useGetTodoById from '../hooks/useGetTodoById';
import useUpdateTodos from '../hooks/useUpdateTodo';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 10px;
  }
  div {
    margin-right: 40px;
  }
`;

interface TodoEditForm {
  closeEditMode: () => void;
}

function TodoEditForm({ closeEditMode }: TodoEditForm) {
  const { id: todoId } = useParams();
  const { register, handleSubmit } = useForm<TodoParams>();
  const { data: todoData, refetch: refetchTodo } = useGetTodoById(todoId);
  const { mutate } = useUpdateTodos();

  const handleUpdateTodo = ({ title, content }: TodoParams) => {
    if (!todoId) {
      return;
    }
    if (title.length === 0 || content.length === 0) {
      window.alert('내용을 입력해주세요.');
      return;
    }
    const onSuccess = () => {
      refetchTodo();
      closeEditMode();
    };
    mutate({ id: todoId, params: { title, content } }, { onSuccess });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(handleUpdateTodo)}>
      <InputBasic register={register('title')} placeholder={todoData?.title || ''} data-cy="input-edit-todo-title" />
      <InputBasic
        register={register('content')}
        placeholder={todoData?.content || ''}
        data-cy="input-edit-todo-content"
      />
      <div>
        <ButtonBasic title="취소" type="button" data-cy="button-edit-cancel" onClick={closeEditMode} />
        <ButtonBasic title="저장" type="submit" data-cy="button-edit-save" />
      </div>
    </FormWrapper>
  );
}

export default TodoEditForm;

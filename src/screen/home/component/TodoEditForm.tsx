import styled from 'styled-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import { TodoParams } from '../../../api/Todos/types';
import useGetTodos from '../hooks/useGetTodos';
import useGetTodoById from '../hooks/useGetTodoById';
import useUpdateTodos from '../hooks/useUpdateTodo';
import InputTextAreaBasic from '../../../common/components/input/InputTextAreaBasic';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 10px;
  }
  div {
    display: flex;
    justify-content: center;
    .button-cancel {
      margin-right: 20px;
      background-color: gray;
    }
  }
`;

interface TodoEditForm {
  closeEditMode: () => void;
}

function TodoEditForm({ closeEditMode }: TodoEditForm) {
  const { id: todoId } = useParams();
  const { register, handleSubmit } = useForm<TodoParams>();
  const { refetch: refetchTodos } = useGetTodos({ suspense: true });
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
    if (!window.confirm('수정 하시겠습니까?')) return;

    const onSuccess = () => {
      closeEditMode();
      refetchTodos();
      refetchTodo();
    };
    mutate({ id: todoId, params: { title, content } }, { onSuccess });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(handleUpdateTodo)}>
      <InputBasic register={register('title')} placeholder={todoData?.title || ''} data-cy="input-edit-todo-title" />
      <InputTextAreaBasic
        register={register('content')}
        placeholder={todoData?.content || ''}
        data-cy="input-edit-todo-content"
      />
      <div>
        <ButtonBasic
          className="button-cancel"
          title="취소"
          type="button"
          data-cy="button-edit-cancel"
          onClick={closeEditMode}
        />
        <ButtonBasic title="저장" type="submit" data-cy="button-edit-save" />
      </div>
    </FormWrapper>
  );
}

export default TodoEditForm;

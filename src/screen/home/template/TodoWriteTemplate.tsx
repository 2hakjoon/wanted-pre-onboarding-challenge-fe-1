import styled from 'styled-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import { TodoParams } from '../../../api/Todos/types';
import useGetTodos from '../hooks/useGetTodos';
import useCreateTodo from '../hooks/useCreateTodo';

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  > * {
    margin: 0 20px;
  }
  button {
    flex-shrink: 0;
  }
`;

function TodoWriteTemplate() {
  const { refetch: refetchTodos } = useGetTodos();
  const { mutate } = useCreateTodo();

  const { register, handleSubmit, setValue } = useForm<TodoParams>();

  const saveTodoHandler = ({ title, content }: TodoParams) => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      window.alert('내용을 모두 입력해주세요.');
      return;
    }

    const onSuccess = () => {
      setValue('content', '');
      setValue('title', '');
      refetchTodos();
    };

    mutate({ title, content }, { onSuccess });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(saveTodoHandler)}>
      <InputBasic register={register('title')} placeholder="주제." data-cy="input-todo-title" />
      <InputBasic register={register('content')} placeholder="할 일을 입력 해 주세요." data-cy="input-todo-content" />
      <ButtonBasic title="저장" type="submit" data-cy="button-save-todo" />
    </FormWrapper>
  );
}

export default TodoWriteTemplate;

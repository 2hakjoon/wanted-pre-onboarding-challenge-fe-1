import styled from 'styled-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import InputBasic from '../../../common/components/input/InputBasic';
import { TodoParams } from '../../../api/Todos/types';
import InputTextAreaBasic from '../../../common/components/input/InputTextAreaBasic';

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

interface TodoWriteFormProps {
  onSubmit: (args: TodoParams, onSuccess: () => void) => void;
}

function TodoWriteForm({ onSubmit }: TodoWriteFormProps) {
  const { register, handleSubmit, setValue } = useForm<TodoParams>();

  const saveTodoHandler = ({ title, content }: TodoParams) => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      window.alert('내용을 모두 입력해주세요.');
      return;
    }

    onSubmit({ title, content }, () => {
      setValue('title', '');
      setValue('content', '');
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit(saveTodoHandler)}>
      <div>
        <InputBasic register={register('title')} placeholder="주제." data-cy="input-todo-title" />
        <InputTextAreaBasic
          register={register('content')}
          placeholder="할 일을 입력 해 주세요."
          data-cy="input-todo-content"
        />
      </div>
      <ButtonBasic title="저장" type="submit" data-cy="button-save-todo" />
    </FormWrapper>
  );
}

export default TodoWriteForm;

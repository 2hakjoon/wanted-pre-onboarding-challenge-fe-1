import styled from 'styled-components';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputBasic from '../../../common/components/input/InputBasic';
import { TodoParams } from '../../../api/Todos/types';
import InputTextAreaBasic from '../../../common/components/input/InputTextAreaBasic';

const FormWrapper = styled.form`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 14px;
  > * {
    margin: 0 20px;
  }
  .button-save {
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    flex-shrink: 0;
  }
  .text-title {
    font-size: 20px;
    font-weight: bold;
  }
  .input-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text-big {
    width: 400px;
    text-align: center;
    line-height: 2;
    font-size: 18px;
    font-weight: bold;
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
      <span className="text-big">
        할 일이 이렇게도 많은데 <br />왜 아무것도 안하는 거지?
      </span>
      <div className="input-container">
        <InputBasic register={register('title')} placeholder="주제." data-cy="input-todo-title" />
        <InputTextAreaBasic
          register={register('content')}
          placeholder="할 일을 입력 해 주세요."
          data-cy="input-todo-content"
        />
      </div>
      <button className="button-save" type="submit" data-cy="button-save-todo">
        저장
      </button>
    </FormWrapper>
  );
}

export default TodoWriteForm;

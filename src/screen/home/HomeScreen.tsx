import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { TodoParams } from '../../api/Todos/types';
import TodoDetailTemplate from './template/TodoDetailTemplate';
import InputBasic from '../../common/components/input/InputBasic';
import ButtonBasic from '../../common/components/button/ButtonBasic';
import TodoListTemplate from './template/TodoListTemplate';
import ButtonLogOut from './component/ButtonLogOut';
import useCreateTodo from './hooks/useCreateTodo';
import useGetTodos from './hooks/useGetTodos';

const Wrapper = styled.div`
  width: 1000px;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  > :first-child {
    align-self: flex-end;
    margin-bottom: 20px;
  }
  .wrapper-outer {
    display: flex;
    height: 80%;
    padding: 20px;
    > :first-child {
      width: 30%;
    }
    > :nth-child(2) {
      width: 70%;
    }
  }
  form {
    display: flex;
    align-items: center;
    width: 100%;
    > * {
      margin: 0 20px;
    }
    button {
      flex-shrink: 0;
    }
  }
`;

function HomeScreen() {
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
    <Wrapper>
      <ButtonLogOut />
      <form onSubmit={handleSubmit(saveTodoHandler)}>
        <InputBasic register={register('title')} placeholder="주제." data-cy="input-todo-title" />
        <InputBasic register={register('content')} placeholder="할 일을 입력 해 주세요." data-cy="input-todo-content" />
        <ButtonBasic title="저장" type="submit" data-cy="button-save-todo" />
      </form>
      <div className="wrapper-outer">
        <TodoListTemplate />
        <TodoDetailTemplate />
      </div>
    </Wrapper>
  );
}

export default HomeScreen;

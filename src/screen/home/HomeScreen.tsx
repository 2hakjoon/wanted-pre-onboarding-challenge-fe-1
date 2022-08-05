import React from 'react';
import styled from 'styled-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { apiCreateTodo, apiGetTodos, ApiGetTodosResponse } from '../../api/Todos/todos';
import TodoListCard from './component/TodoListCard';
import { TodoParams } from '../../api/Todos/types';
import TodoDetail from './component/TodoDetail';
import InputBasic from '../../common/components/input/InputBasic';
import ButtonBasic from '../../common/components/button/ButtonBasic';

const Wrapper = styled.div`
  width: 1000px;
  padding-top: 50px;
  .wrapper-section {
    display: flex;
    height: 100%;
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
  const { data: todosData, refetch: refetchTodos } = useQuery<ApiGetTodosResponse>(['getTodos'], apiGetTodos);
  const { mutate } = useMutation(apiCreateTodo);
  const { id: todoId } = useParams();

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
      <form onSubmit={handleSubmit(saveTodoHandler)}>
        <InputBasic register={register('title')} placeholder="주제." data-cy="input-todo-title" />
        <InputBasic register={register('content')} placeholder="할 일을 입력 해 주세요." data-cy="input-todo-content" />
        <ButtonBasic title="저장" type="submit" data-cy="button-save-todo" />
      </form>
      <div className="wrapper-section">
        <section>
          <ul data-cy="wrapper-todo-list">
            {!!todosData?.length &&
              todosData?.map((todo) => (
                <TodoListCard key={todo.id} {...todo} refetchTodos={refetchTodos} selected={todoId === todo.id} />
              ))}
          </ul>
        </section>
        <TodoDetail refetchTodos={refetchTodos} />
      </div>
    </Wrapper>
  );
}

export default HomeScreen;

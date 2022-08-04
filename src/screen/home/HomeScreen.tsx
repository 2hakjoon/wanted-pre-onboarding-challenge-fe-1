import React from 'react';
import styled from 'styled-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { apiCreateTodo, apiGetTodos, ApiGetTodosResponse } from '../../api/Todos/todos';
import TodoListCard from './component/TodoListCard';
import { TodoParams } from '../../api/Todos/types';

const Wrapper = styled.section``;

function HomeScreen() {
  const { data, refetch } = useQuery<ApiGetTodosResponse>(['getTodos'], apiGetTodos);
  const { mutate } = useMutation(apiCreateTodo);

  const { register, handleSubmit } = useForm<TodoParams>();

  const saveTodoHandler = ({ title, content }: TodoParams) => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      window.alert('내용을 모두 입력해주세요.');
      return;
    }

    const onSuccess = () => {
      refetch();
    };

    mutate({ title, content }, { onSuccess });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(saveTodoHandler)}>
        <input {...register('title')} placeholder="주제." data-cy="input-todo-title" />
        <input {...register('content')} placeholder="할 일을 입력 해 주세요." data-cy="input-todo-content" />
        <button type="submit" data-cy="button-save-todo">
          저장
        </button>
      </form>
      <section>
        <ul>{!!data?.length && data?.map((todo) => <TodoListCard {...todo} />)}</ul>
      </section>
    </Wrapper>
  );
}

export default HomeScreen;

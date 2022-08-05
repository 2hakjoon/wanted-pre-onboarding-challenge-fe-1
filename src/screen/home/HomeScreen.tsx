import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { apiCreateTodo, apiGetTodoById, ApiGetTodoById, apiGetTodos, ApiGetTodosResponse } from '../../api/Todos/todos';
import TodoListCard from './component/TodoListCard';
import { TodoParams } from '../../api/Todos/types';

const Wrapper = styled.div`
  .wrapper-section {
    display: flex;
  }
`;

function HomeScreen() {
  const { data: todosData, refetch: refetchTodos } = useQuery<ApiGetTodosResponse>(['getTodos'], apiGetTodos);
  const { mutate } = useMutation(apiCreateTodo);
  const [selectedTodo, setSelecetedTodo] = useState<null | string>(null);
  const { data: todoData, refetch: refetchTodo } = useQuery<ApiGetTodoById>(
    ['getTodoById', selectedTodo],
    () => apiGetTodoById(selectedTodo),
    { enabled: false },
  );

  const { register, handleSubmit } = useForm<TodoParams>();

  const saveTodoHandler = ({ title, content }: TodoParams) => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      window.alert('내용을 모두 입력해주세요.');
      return;
    }

    const onSuccess = () => {
      refetchTodos();
    };

    mutate({ title, content }, { onSuccess });
  };

  const showTodoDetail = (id: string) => {
    setSelecetedTodo(id);
  };

  useEffect(() => {
    if (selectedTodo) {
      refetchTodo();
    }
  }, [selectedTodo]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(saveTodoHandler)}>
        <input {...register('title')} placeholder="주제." data-cy="input-todo-title" />
        <input {...register('content')} placeholder="할 일을 입력 해 주세요." data-cy="input-todo-content" />
        <button type="submit" data-cy="button-save-todo">
          저장
        </button>
      </form>
      <div className="wrapper-section">
        <section>
          <ul data-cy="wrapper-todo-list">
            {!!todosData?.length &&
              todosData?.map((todo, idx) => (
                <TodoListCard
                  data-cy={`wrapper-todo-${idx}`}
                  key={todo.id}
                  {...todo}
                  onClick={() => showTodoDetail(todo.id)}
                />
              ))}
          </ul>
        </section>
        {todoData && (
          <section>
            <span data-cy="text-todo-detail-title">{todoData?.title}</span>
            <span data-cy="text-todo-detail-content">{todoData?.content}</span>
            <span data-cy="text-todo-detail-createdAt">{todoData?.createdAt}</span>
            <span data-cy="text-todo-detail-updatedAt">{todoData?.updatedAt}</span>
          </section>
        )}
      </div>
    </Wrapper>
  );
}

export default HomeScreen;

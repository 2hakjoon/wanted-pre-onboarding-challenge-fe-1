import React from 'react';
import { TodoParams } from '../../../api/Todos/types';
import useGetTodos from '../hooks/useGetTodos';
import useCreateTodo from '../hooks/useCreateTodo';
import TodoWriteForm from '../component/TodoWriteForm';

function TodoWriteTemplate() {
  const { refetch: refetchTodos } = useGetTodos();
  const { mutate } = useCreateTodo();

  const saveTodoHandler = ({ title, content }: TodoParams, onSuccess: () => void) => {
    const onSuccessHandler = () => {
      refetchTodos();
      onSuccess();
    };

    mutate({ title, content }, { onSuccess: onSuccessHandler });
  };

  return <TodoWriteForm onSubmit={saveTodoHandler} />;
}

export default TodoWriteTemplate;

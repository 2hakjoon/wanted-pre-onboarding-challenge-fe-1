import React from 'react';
import { TodoParams } from '../../../api/Todos/types';
import useCreateTodo from '../hooks/useCreateTodo';
import TodoWriteForm from '../component/TodoWriteForm';

function TodoWriteTemplate() {
  const { mutate } = useCreateTodo();

  const saveTodoHandler = ({ title, content }: TodoParams, onSuccess: () => void) => {
    const onSuccessHandler = () => {
      onSuccess();
    };

    mutate({ title, content }, { onSuccess: onSuccessHandler });
  };

  return <TodoWriteForm onSubmit={saveTodoHandler} />;
}

export default TodoWriteTemplate;

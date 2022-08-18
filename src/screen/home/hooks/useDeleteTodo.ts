import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiTodos } from '../../../api/Todos/todos';
import { queryKeyGetTodos } from './useGetTodos';

function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation(apiTodos.deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries([...queryKeyGetTodos]);
    },
  });
}

export default useDeleteTodo;

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { apiTodos } from '../../../api/Todos/todos';
import { ApiGetTodoById } from '../../../api/Todos/types';

export const queryKeyGetTodoById = ['Todo', 'getOne'] as const;

function useGetTodoById(todoId: string | undefined, option?: UseQueryOptions<ApiGetTodoById>) {
  return useQuery<ApiGetTodoById>([...queryKeyGetTodoById, todoId], () => apiTodos.getTodoById(todoId), {
    enabled: !!todoId,
    ...option,
  });
}

export default useGetTodoById;

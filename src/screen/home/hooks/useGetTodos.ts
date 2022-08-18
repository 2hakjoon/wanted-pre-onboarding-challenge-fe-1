import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { apiTodos } from '../../../api/Todos/todos';
import { ApiGetTodosResponse } from '../../../api/Todos/types';

export const queryKeyGetTodos = ['Todo', 'getMany'] as const;

function useGetTodos(options?: UseQueryOptions<ApiGetTodosResponse>) {
  return useQuery<ApiGetTodosResponse>([...queryKeyGetTodos], apiTodos.getTodos, options);
}

export default useGetTodos;

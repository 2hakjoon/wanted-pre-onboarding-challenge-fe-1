import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { apiTodos } from '../../../api/Todos/todos';
import { ApiGetTodosResponse } from '../../../api/Todos/types';



function useGetTodos(options?: UseQueryOptions<ApiGetTodosResponse>) {
  return useQuery<ApiGetTodosResponse>(['getTodos'], apiTodos.getTodos, options);
}

export default useGetTodos;

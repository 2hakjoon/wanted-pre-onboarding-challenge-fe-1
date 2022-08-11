import { useQuery } from "@tanstack/react-query";
import { apiTodos } from "../../../api/Todos/todos";
import { ApiGetTodoById } from "../../../api/Todos/types";



function useGetTodoById (todoId : string | undefined) {
  return useQuery<ApiGetTodoById>(
    ['getTodoById', todoId],
    () => apiTodos.getTodoById(todoId),
    { enabled: !!todoId },
  );
}

export default useGetTodoById
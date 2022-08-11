import { useMutation } from "@tanstack/react-query";
import { apiTodos } from "../../../api/Todos/todos";

function useDeleteTodo () {
  return useMutation(apiTodos.deleteTodo)
}

export default useDeleteTodo;
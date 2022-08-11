import { useMutation } from "@tanstack/react-query";
import { apiTodos } from "../../../api/Todos/todos";

function useUpdateTodos() {
  return useMutation(apiTodos.updateTodo);
}

export default useUpdateTodos
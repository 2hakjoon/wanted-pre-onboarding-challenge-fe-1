import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiTodos } from "../../../api/Todos/todos";
import { queryKeyGetTodos } from "./useGetTodos";

function useUpdateTodos() {
  const queryClient = useQueryClient()
  return useMutation(apiTodos.updateTodo, {onSuccess: ()=>{
    queryClient.invalidateQueries([...queryKeyGetTodos])

  }});
}

export default useUpdateTodos
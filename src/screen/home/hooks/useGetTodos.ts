import { useQuery } from "@tanstack/react-query"
import { apiTodos } from "../../../api/Todos/todos"
import { ApiGetTodosResponse } from "../../../api/Todos/types"

function useGetTodos (){
  return useQuery<ApiGetTodosResponse>(['getTodos'], apiTodos.getTodos)
}

export default useGetTodos
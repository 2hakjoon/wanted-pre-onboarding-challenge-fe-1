import { useMutation } from "@tanstack/react-query";
import { apiTodos } from "../../../api/Todos/todos";


function useCreateTodo (){
  return useMutation(apiTodos.createTodo);
}

export default useCreateTodo
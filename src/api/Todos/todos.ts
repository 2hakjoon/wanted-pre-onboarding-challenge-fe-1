import { apiFetch, FetchResponse } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { ApiGetTodosResponse, ApiUpdateTodoArgs, Todo, TodoParams } from './types';



export const apiGetTodos = async (): Promise<ApiGetTodosResponse> => {
  const res = await apiFetch.get<FetchResponse<ApiGetTodosResponse>>(`${apiEndpont.getTodos}`);
  return res.data;
};

export const apiCreateTodo = async (params: TodoParams) => {
  return apiFetch.post(`${apiEndpont.createTodo}`, params);
};


export const apiGetTodoById = async (id: string | undefined): Promise<Todo> => {
  const res = await apiFetch.get<FetchResponse<Todo>>(`${apiEndpont.getTodoById}${id}`);
  return res.data;
};

export const apiDeleteTodo = async (id: string) => {
  return apiFetch.delete(`${apiEndpont.deleteTodo}${id}`);
};


export const apiUpdateTodo = async ({ id, params }: ApiUpdateTodoArgs): Promise<Todo> => {
  const res = await apiFetch.put<FetchResponse<Todo>>(`${apiEndpont.deleteTodo}${id}`, params);
  return res.data;
};

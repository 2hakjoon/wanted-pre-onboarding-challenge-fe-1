import { apiFetch } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { Todo, TodoParams } from './types';

export type ApiGetTodosResponse = Todo[];

export const apiGetTodos = async (): Promise<ApiGetTodosResponse> => {
  const res = await apiFetch.get(`${apiEndpont.getTodos}`).then((res) => res.json());
  return res.data;
};

export const apiCreateTodo = async (params: TodoParams) => {
  return apiFetch.post(`${apiEndpont.createTodo}`, params);
};

export type ApiGetTodoById = Todo;

export const apiGetTodoById = async (id: string | null): Promise<Todo> => {
  const res = await apiFetch.get(`${apiEndpont.getTodoById}${id}`).then((res) => res.json());
  return res.data;
};

export const apiDeleteTodo = async (id: string) => {
  const res = await apiFetch.delete(`${apiEndpont.deleteTodo}${id}`).then((res) => res.json());
  return res.data;
};

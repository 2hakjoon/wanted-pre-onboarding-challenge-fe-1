import { apiFetch } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { Todo, TodoParams } from './types';

export type ApiGetTodosResponse = Todo[];

export const apiGetTodos = async (): Promise<ApiGetTodosResponse> => {
  return apiFetch.get(`${apiEndpont.getTodos}`).then((res) => res.json());
};

export const apiCreateTodo = async (params: TodoParams) => {
  return apiFetch.post(`${apiEndpont.createTodo}`, params);
};

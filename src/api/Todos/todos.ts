import { apiFetch } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { Todo } from './types';

export type ApiGetTodosResponse = Todo[];

export const apiGetTodos = async (): Promise<ApiGetTodosResponse> => {
  return apiFetch.get(`${apiEndpont.getTodos}`).then((res) => res.json());
};

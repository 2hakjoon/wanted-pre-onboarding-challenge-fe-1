import { apiFetch, FetchResponse } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { ApiGetTodosResponse, ApiUpdateTodoArgs, Todo, TodoParams } from './types';

export const apiTodos = {
  async getTodos() {
    const res = await apiFetch.get<FetchResponse<ApiGetTodosResponse>>(`${apiEndpont.getTodos}`);
    return res.data;
  },
  async createTodo(params: TodoParams) {
    return apiFetch.post(`${apiEndpont.createTodo}`, params);
  },
  async getTodoById(id: string | undefined) {
    const res = await apiFetch.get<FetchResponse<Todo>>(`${apiEndpont.getTodoById}/${id}`);
    return res.data;
  },
  async deleteTodo(id: string) {
    return apiFetch.delete(`${apiEndpont.deleteTodo}/${id}`);
  },
  async updateTodo({ id, params }: ApiUpdateTodoArgs) {
    const res = await apiFetch.put<FetchResponse<Todo>>(`${apiEndpont.deleteTodo}/${id}`, params);
    return res.data;
  },
};

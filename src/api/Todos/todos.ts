import { apiFetch } from '../custom-fetch';
import { apiEndpont } from '../endpoints';

export const apiGetTodos = async () => {
  return apiFetch.get(`${apiEndpont.getTodos}`).then((res) => res.json());
};

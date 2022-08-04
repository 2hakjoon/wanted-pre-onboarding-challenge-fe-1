import { apiEndpont } from '../endpoints';

export const apiGetTodos = async () => {
  return fetch(`${apiEndpont.getTodos}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

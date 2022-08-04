import { authToken } from '../common/constants/local-storage';

export const apiFetch = {
  get: (url: string) =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
    }),
  post: (url: string, body: object) =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
      body: JSON.stringify(body),
    }),
};

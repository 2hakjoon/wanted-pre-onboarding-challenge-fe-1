import { authToken } from '../common/constants/local-storage';

export type FetchResponse<T> = { data: T };

export const apiFetch = {
  get: <T>(url: string): Promise<T> =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
    }).then((res) => res.json()),
  post: <T>(url: string, body: object): Promise<T> =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json()),
  delete: <T>(url: string): Promise<T> =>
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
    }).then((res) => res.json()),
  put: <T>(url: string, body: object): Promise<T> =>
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json()),
};

import { authToken } from '../common/constants/local-storage';

export type FetchResponse<T> = { data: T };

const tokenNotValid = 'Token is missing';

interface apiResponse extends Response {
  details: string;
}

const errorMiddleware = async (data: apiResponse) => {
  if (data.details === tokenNotValid) {
    window.alert('다시 로그인을 진행해주세요.');
    window.location.reload();
    return data;
  }
  return data;
};

const apiFetchMiddlewares = async (res: Response) => {
  let data = await res.json();
  data = errorMiddleware(data);
  return data;
};

export const apiFetch = {
  get: <T>(url: string): Promise<T> =>
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
    }).then(apiFetchMiddlewares),

  post: <T>(url: string, body: object): Promise<T> =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
      body: JSON.stringify(body),
    }).then(apiFetchMiddlewares),

  delete: <T>(url: string): Promise<T> =>
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
    }).then(apiFetchMiddlewares),

  put: <T>(url: string, body: object): Promise<T> =>
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem(authToken) || '',
      },
      body: JSON.stringify(body),
    }).then(apiFetchMiddlewares),
};

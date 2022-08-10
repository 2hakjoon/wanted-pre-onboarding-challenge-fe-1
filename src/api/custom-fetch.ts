import { authToken } from '../common/constants/local-storage';

export type FetchResponse<T> = { data: T };

const tokenNotValid = 'Token is missing';

interface apiResponse extends Response {
  details: string;
}

// 에러와 관련된 부분을 담당하는 미들웨어
const errorMiddleware = async (data: apiResponse) => {
  if (data.details === tokenNotValid) {
    window.alert('다시 로그인을 진행해주세요.');
    window.location.reload();
    return data;
  }
  return data;
};

// 미들웨어들을 조합 하는 함수.
// 새로 추가하고 싶은경우 data = 원하는함수()의 형태로 data를 변경시키며 체이닝함.
const apiFetchMiddlewares = async (res: Response) => {
  let data = await res.json();
  data = errorMiddleware(data);
  // data = 미들웨어(data); 이렇게 추가.
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

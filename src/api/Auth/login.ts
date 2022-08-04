import { apiEndpont } from '../endpoints';

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  message?: string;
  token?: string;
  details?: string;
}

export const apiLogin = async (body: LoginParams): Promise<LoginResponse> => {
  return fetch(apiEndpont.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

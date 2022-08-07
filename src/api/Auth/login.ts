import { apiFetch } from '../custom-fetch';
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

export const apiLogin = async (body: LoginParams) => {
  return apiFetch.post<LoginResponse>(apiEndpont.login,body)
};

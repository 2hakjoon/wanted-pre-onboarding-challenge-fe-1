import { apiFetch } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { LoginParams, LoginResponse } from './types';


export const apiLogin = async (body: LoginParams) => {
  return apiFetch.post<LoginResponse>(apiEndpont.login,body)
};

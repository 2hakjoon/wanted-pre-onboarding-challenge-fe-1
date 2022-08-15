import { apiFetch } from '../custom-fetch';
import { apiEndpont } from '../endpoints';
import { LoginParams, LoginResponse, SignUpParams, SignUpResponse } from './types';

export const authApi = {
  login(body: LoginParams) {
    return apiFetch.post<LoginResponse>(apiEndpont.login, body);
  },
  join(body: SignUpParams) {
    return apiFetch.post<SignUpResponse>(apiEndpont.signUp, body);
  },
};

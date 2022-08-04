import { apiEndpont } from '../endpoints';

export interface SignUpParams {
  email: string;
  password: string;
}

export interface SignUpResponse {
  message?: string;
  token?: string;
  details?: string;
}

export const apiSignUp = async (body: SignUpParams): Promise<SignUpResponse> => {
  return fetch(apiEndpont.signUp, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

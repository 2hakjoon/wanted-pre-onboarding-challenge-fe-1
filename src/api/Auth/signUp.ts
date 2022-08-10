import { apiEndpont } from '../endpoints';
import { SignUpParams, SignUpResponse } from './types';


export const apiSignUp = async (body: SignUpParams): Promise<SignUpResponse> => {
  return fetch(apiEndpont.signUp, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

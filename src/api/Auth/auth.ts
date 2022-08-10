import { apiFetch } from "../custom-fetch";
import { apiEndpont } from "../endpoints";
import { LoginParams, LoginResponse, SignUpParams, SignUpResponse } from "./types";



export const apiLogin = async (body: LoginParams) => {
  return apiFetch.post<LoginResponse>(apiEndpont.login,body)
};

export const apiSignUp = async (body: SignUpParams): Promise<SignUpResponse> => {
  return apiFetch.post<SignUpResponse>(apiEndpont.signUp, body);
};

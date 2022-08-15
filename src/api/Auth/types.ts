import { AxiosError } from 'axios';
import { ErrorResponse } from '../custom-fetch';

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export type LoginError = AxiosError<ErrorResponse>

export interface SignUpParams {
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
  token: string;
}

export type SignUpError = AxiosError<ErrorResponse>
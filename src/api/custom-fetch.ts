/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios, { AxiosError } from 'axios';
import { authToken, persistStore } from '../persistStore/persistStore';
import { backendBaseUrl } from './endpoints';

export type FetchResponse<T> = { data: T };

export interface ErrorResponse {
  details: string;
}

const tokenMissingError = 'Token is missing';

const apiBackend = axios.create({
  baseURL: backendBaseUrl,
  headers: {
    Authorization: persistStore.get(authToken) || '',
  },
});

apiBackend.interceptors.request.use(
  (config) => {
    if (config.headers) config.headers.Authorization = persistStore.get(authToken) || '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiBackend.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError<ErrorResponse>): Promise<never> | undefined => {
    const errorDetail = error.response?.data.details;
    if (errorDetail === tokenMissingError) {
      window.alert('다시 로그인을 진행해 주세요.');
      window.history.pushState(null, '', '/');
      window.location.reload();
      return;
    }
    return Promise.reject(error);
  },
);

export const apiFetch = {
  get: <T>(url: string): Promise<T> => apiBackend.get(url).then((res) => res.data),

  post: <T>(url: string, body: object): Promise<T> => apiBackend.post(url, body).then((res) => res.data),

  delete: <T>(url: string): Promise<T> => apiBackend.delete(url).then((res) => res.data),

  put: <T>(url: string, body: object): Promise<T> => apiBackend.put(url, body).then((res) => res.data),
};

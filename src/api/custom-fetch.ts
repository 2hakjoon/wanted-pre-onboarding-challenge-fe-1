import axios from 'axios';
import { authToken } from '../common/constants/local-storage';
import { backendBaseUrl } from './endpoints';

export type FetchResponse<T> = { data: T };

const apiBackend = axios.create({
  baseURL: backendBaseUrl,
  headers: { Authorization: localStorage.getItem(authToken) || '' },
});

export const apiFetch = {
  get: <T>(url: string): Promise<T> => apiBackend.get(url).then((res) => res.data),

  post: <T>(url: string, body: object): Promise<T> => apiBackend.post(url, body).then((res) => res.data),

  delete: <T>(url: string): Promise<T> => apiBackend.delete(url).then((res) => res.data),

  put: <T>(url: string, body: object): Promise<T> => apiBackend.put(url, body).then((res) => res.data),
};

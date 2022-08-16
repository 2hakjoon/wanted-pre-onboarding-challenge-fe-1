/* eslint-disable @typescript-eslint/no-explicit-any */
export const authToken = 'TOKEN';

export const persistStore = {
  get(key: string) {
    return localStorage.getItem(key);
  },
  set(key: string, value: any) {
    return localStorage.setItem(key, value);
  },
  remove(key: string) {
    return localStorage.removeItem(key);
  },
};

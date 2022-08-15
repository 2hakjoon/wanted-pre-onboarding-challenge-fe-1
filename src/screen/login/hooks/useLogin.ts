import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../../api/Auth/auth';
import { LoginError, LoginParams, LoginResponse } from '../../../api/Auth/types';

function useLogin() {
  return useMutation<LoginResponse, LoginError, LoginParams>(authApi.login);
}

export default useLogin;

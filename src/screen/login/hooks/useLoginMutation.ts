import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../../api/Auth/auth';
import { LoginError, LoginParams, LoginResponse } from '../../../api/Auth/types';

function useLoginMutation() {
  return useMutation<LoginResponse, LoginError, LoginParams>(authApi.login);
}

export default useLoginMutation;

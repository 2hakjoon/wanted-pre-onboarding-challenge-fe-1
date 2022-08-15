import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../../api/Auth/auth';
import { SignUpError, SignUpParams, SignUpResponse } from '../../../api/Auth/types';

function useSignUp() {
  return useMutation<SignUpResponse, SignUpError, SignUpParams>(authApi.join);
}

export default useSignUp;

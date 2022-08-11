import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../../api/Auth/auth';

function useSignUp() {
  return useMutation(authApi.join);
}

export default useSignUp;

import { useMutation } from "@tanstack/react-query"
import { authApi } from "../../../api/Auth/auth"

function useLogin(){
  return useMutation(authApi.login)
}

export default useLogin
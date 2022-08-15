export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}

export interface SignUpParams {
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
  token: string;
}

import { QueryClient } from "@tanstack/react-query";

export interface useErrorBoundaryError {
  response: {
    status: number;
  };
}

const isServerError = (error: useErrorBoundaryError) => {
  // 500에러는 서버 internal error
  // status가 없는 경우는 서버가 죽은경우.
  return error.response?.status >= 500 || !error.response?.status;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: (error) => isServerError(error as useErrorBoundaryError),
    },
    mutations: {
      useErrorBoundary: (error) => isServerError(error as useErrorBoundaryError),
    },
  },
});
export const backend = 'http://localhost:8080';

export const apiEndpont = {
  signUp: `${backend}/users/create`,
  login: `${backend}/users/login`,
  getTodos: `${backend}/todos`,
  getTodoById: `${backend}/todos/`,
  createTodo: `${backend}/todos`,
  updateTodo: `${backend}/todos/`,
  deleteTodo: `${backend}/todos/`
};

export interface Todo {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface TodoParams {
  title: string;
  content: string;
}

export type ApiGetTodosResponse = Todo[];

export type ApiGetTodoById = Todo;

export interface ApiUpdateTodoArgs {
  id: string;
  params: TodoParams;
}

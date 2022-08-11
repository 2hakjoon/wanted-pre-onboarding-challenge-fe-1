import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TodoListCard from '../component/TodoListCard';
import useGetTodos from '../hooks/useGetTodos';

export const TodoListContainer = styled.section`
  width: 100%;
  height: 100%;
  border: 2px solid darkgray;
  border-radius: 30px;
  margin-right: 50px;
  padding: 20px 10px 20px 20px;
`;

const ListContainer = styled.ul`
  padding-right: 10px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px; /*스크롤바의 너비*/
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: gray; /*스크롤바의 색상*/
  }

  &::-webkit-scrollbar-track {
    background-color: none; /*스크롤바 트랙 색상*/
  }
`;

function TodoListTemplate() {
  const { data: todosData, refetch: refetchTodos } = useGetTodos({ suspense: true });
  const { id: todoId } = useParams();

  return (
    <TodoListContainer data-cy="container-todo-list">
      <ListContainer>
        {todosData?.length ? (
          todosData?.map((todo) => (
            <TodoListCard key={todo.id} {...todo} refetchTodos={refetchTodos} selected={todoId === todo.id} />
          ))
        ) : (
          <span>할 일이 아직 없어요..</span>
        )}
      </ListContainer>
    </TodoListContainer>
  );
}

export default TodoListTemplate;

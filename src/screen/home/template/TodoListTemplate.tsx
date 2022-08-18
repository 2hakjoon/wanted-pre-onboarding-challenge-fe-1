import React from 'react';
import styled from 'styled-components';
import TodoListCard from '../component/TodoListCard';
import useGetTodos from '../hooks/useGetTodos';

export const TodoListContainer = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-right: 30px;
  padding: 20px 10px 20px 20px;
  background-color:#FAFAFA;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1);
  flex-shrink: 0;
`;

const ListContainer = styled.ul`
  padding-right: 10px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
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

  return (
    <TodoListContainer data-cy="container-todo-list">
      {todosData?.length ? (
        <ListContainer>
          {todosData.map((todo) => (
            <TodoListCard key={todo.id} {...todo} refetchTodos={refetchTodos} />
          ))}
        </ListContainer>
      ) : (
        <span>할 일이 아직 없어요..</span>
      )}
    </TodoListContainer>
  );
}

export default TodoListTemplate;

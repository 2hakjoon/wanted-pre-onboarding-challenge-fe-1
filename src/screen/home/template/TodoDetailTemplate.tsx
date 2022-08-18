import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ButtonBasic from '../../../common/components/button/ButtonBasic';
import TodoEditForm from '../component/TodoEditForm';
import useGetTodoById from '../hooks/useGetTodoById';
import TodoDetail from '../component/TodoDetail';

export const TodoDetailContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px 20px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1); 
  box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1);
  .button-edit-mode {
    align-self: flex-end;
  }
`;

function TodoDetailTemplate() {
  const { id: todoId } = useParams();

  const [editMode, setEditMode] = useState(false);
  const { data: todoData } = useGetTodoById(todoId, { suspense: true });

  const openEditMode = () => {
    setEditMode(true);
  };
  const closeEditMode = () => {
    setEditMode(false);
  };

  return (
    <TodoDetailContainer>
      {todoData &&
        (!editMode ? (
          <ButtonBasic
            className="button-edit-mode"
            title="수정"
            type="button"
            data-cy="button-edit-mode"
            onClick={openEditMode}
          />
        ) : (
          <TodoEditForm closeEditMode={closeEditMode} />
        ))}
      <TodoDetail />
    </TodoDetailContainer>
  );
}

export default TodoDetailTemplate;

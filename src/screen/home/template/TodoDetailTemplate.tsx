import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import TodoEditForm from '../component/TodoEditForm';
import useGetTodoById from '../hooks/useGetTodoById';
import TodoDetail from '../component/TodoDetail';
import IconEditBox from '../../../common/components/icons/IconEditBox';
import ButtonWrapper from '../../../common/components/button/ButtonWrapper';

export const TodoDetailContainer = styled.article`
  width: 680px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px 20px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  .container-edit {
    display: flex;
    border-bottom: 1px solid gray;
    justify-content: flex-end;
    button {
      align-items: flex-end;
    }
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
      {todoData && (
        <div className="container-edit">
          {!editMode ? (
            <ButtonWrapper type="button" data-cy="button-edit-mode" onClick={openEditMode}>
              <IconEditBox />
            </ButtonWrapper>
          ) : (
            <TodoEditForm closeEditMode={closeEditMode} />
          )}
        </div>
      )}
      <TodoDetail />
    </TodoDetailContainer>
  );
}

export default TodoDetailTemplate;

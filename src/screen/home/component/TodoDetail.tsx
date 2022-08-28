import dayjs from 'dayjs';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetTodoById from '../hooks/useGetTodoById';

const TodoDetailContailer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  .text-title {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0px 15px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text-content {
    font-size: 16px;
    height: 300px;
    margin-bottom: 20px;
    word-break: break-all;
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
  }
  .text-time {
    font-size: 14px;
    color: gray;
    margin-bottom: 10px;
  }
`;

function TodoDetail() {
  const { id: todoId } = useParams();
  const { data: todoData } = useGetTodoById(todoId, { suspense: true });

  return (
    <TodoDetailContailer>
      {todoData ? (
        <>
          <span className="text-title" data-cy="text-todo-detail-title">
            제목 : {todoData.title}
          </span>
          <span className="text-content" data-cy="text-todo-detail-content">
            {todoData.content}
          </span>
          <span className="text-time" data-cy="text-todo-detail-createdAt">
            {`작성한 시간 : ${dayjs(todoData.createdAt).format('YYYY/YY/MM - HH시mm분')}`}
          </span>
          <span className="text-time" data-cy="text-todo-detail-updatedAt">
            {`수정한 시간 : ${dayjs(todoData.updatedAt).format('YYYY/YY/MM - HH시mm분')}`}
          </span>
        </>
      ) : (
        <span>할 일을 선택 해주세요.</span>
      )}
    </TodoDetailContailer>
  );
}

export default TodoDetail;

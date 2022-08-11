import dayjs from 'dayjs';
import React from 'react';
import { useParams } from 'react-router-dom';
import useGetTodoById from '../hooks/useGetTodoById';

function TodoDetail() {
  const { id: todoId } = useParams();
  const { data: todoData } = useGetTodoById(todoId);

  return (
    <>
      {todoData ? (
        <>
          <span data-cy="text-todo-detail-title">제목 : {todoData.title}</span>
          <span data-cy="text-todo-detail-content">내용 : {todoData.content}</span>
          <span data-cy="text-todo-detail-createdAt">
            {`작성한 시간 : ${dayjs(todoData.createdAt).format('YYYY/YY/MM - HH시mm분')}`}
          </span>
          <span data-cy="text-todo-detail-updatedAt">
            {`마지막으로 수정한 시간 : ${dayjs(todoData.updatedAt).format('YYYY/YY/MM - HH시mm분')}`}
          </span>
        </>
      ) : (
        <span>할 일을 선택 해주세요.</span>
      )}
    </>
  );
}

export default TodoDetail;

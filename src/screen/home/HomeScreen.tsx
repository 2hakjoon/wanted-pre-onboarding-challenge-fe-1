import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { apiGetTodos } from '../../api/Todos/todos';

const Wrapper = styled.section``;

function HomeScreen() {
  
  const { data } = useQuery(['getTodos'], apiGetTodos);
  return (
    <Wrapper>
      <div>
        <input placeholder="할 일을 입력 해 주세요." />
        <button type="submit">저장</button>
      </div>
      <ul />
    </Wrapper>
  );
}

export default HomeScreen;

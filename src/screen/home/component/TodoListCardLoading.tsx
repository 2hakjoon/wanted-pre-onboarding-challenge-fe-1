import styled from 'styled-components';
import React from 'react';
import SkeletonSquare from '../../../common/components/skeleton/SkeletonSquare';

const Container = styled.li`
  width: 240px;
  height: 71px;
  margin-bottom: 10px;
  border: 1px solid darkgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

function TodoListCardLoading() {
  return (
    <Container>
      <SkeletonSquare width="120px" height="20px" marginTop="0px" />
      <SkeletonSquare width="80px" height="12px" marginTop="8px" />
    </Container>
  );
}

export default TodoListCardLoading;

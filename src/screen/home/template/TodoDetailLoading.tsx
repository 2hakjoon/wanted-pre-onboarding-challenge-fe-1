import React from 'react';
import styled from 'styled-components';
import SkeletonSquare from '../../../common/components/skeleton/SkeletonSquare';
import { TodoDetailContainer } from './TodoDetailTemplate';

const TodoDetailLoadingContainer = styled(TodoDetailContainer)`
  display: flex;
  flex-direction: column;
`;

function TodoDetailLoading() {
  return (
    <TodoDetailLoadingContainer>
      <SkeletonSquare width='150px' height='30px' marginTop='66px'/>
      <SkeletonSquare width='400px' height='16px' marginTop='15px'/>
      <SkeletonSquare width='480px' height='16px' marginTop='4px'/>
      <SkeletonSquare width='480px' height='16px' marginTop='4px'/>
      <SkeletonSquare width='400px' height='16px' marginTop='4px'/>
      <SkeletonSquare width='350px' height='16px' marginTop='4px'/>
      <SkeletonSquare width='100px' height='16px' marginTop='200px'/>
      <SkeletonSquare width='110px' height='16px' marginTop='4px'/>
    </TodoDetailLoadingContainer>
  );
}

export default TodoDetailLoading;

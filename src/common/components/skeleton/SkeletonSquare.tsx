import styled, { keyframes } from 'styled-components';
import React from 'react';

const skeletonKeyframes = keyframes`
0% {
  background-position: -200px 0;
}
100% {
  background-position: calc(200px + 100%) 0;
}
`;
interface SkeletonSquareProps {
  height: string;
  width: string;
  marginTop: string;
}

const Skeleton = styled.div<SkeletonSquareProps>`
  display: inline-block;
  height: ${(props) => props.height || '14px'};
  width: ${(props) => props.width || '80%'};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTop || '0'};
`;

function SkeletonSquare(props: SkeletonSquareProps) {
  return <Skeleton {...props} />;
}

export default SkeletonSquare;

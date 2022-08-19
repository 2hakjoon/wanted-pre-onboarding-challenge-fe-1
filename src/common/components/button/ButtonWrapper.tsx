import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
  font-size: 18px;
  padding: 5px 5px;
  cursor: pointer;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
`;

interface ButtonWrapper extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function ButtonWrapper(props: ButtonWrapper) {
  return <Button {...props} />;
}

export default ButtonWrapper;

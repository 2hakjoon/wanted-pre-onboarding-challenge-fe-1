import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background-color: gray;
  }
`;

interface ButtonBasicProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function ButtonBasic({ title, ...rest }: ButtonBasicProps) {
  return <Button {...rest}>{title}</Button>;
}

export default ButtonBasic;

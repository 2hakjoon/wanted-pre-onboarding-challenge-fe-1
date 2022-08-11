import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    height: 30px;
    border: 2px solid darkgray;
    border-radius: 8px;
    padding-left: 8px;
  }
`;

interface InputLabelProps {
  title: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  type?: HTMLInputTypeAttribute | undefined;
}

function InputLabel({ title, register, placeholder, type, ...rest }: InputLabelProps) {
  return (
    <Container {...rest}>
      <span>{title}</span>
      <input type={type} {...register} className="input" placeholder={placeholder} />
    </Container>
  );
}

InputLabel.defaultProps = {
  type: undefined,
};

export default InputLabel;

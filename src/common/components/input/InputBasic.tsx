import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 2px solid darkgray;
  border-radius: 8px;
  padding-left: 8px;
`;

interface InputBasicProps {
  register: UseFormRegisterReturn<string>;
  placeholder: string;
}

function InputBasic({ register, placeholder, ...rest }: InputBasicProps) {
  return <Input {...register} className="input" placeholder={placeholder} {...rest} />;
}

export default InputBasic;

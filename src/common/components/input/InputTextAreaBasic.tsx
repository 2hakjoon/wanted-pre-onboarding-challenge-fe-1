import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  border: 2px solid darkgray;
  border-radius: 8px;
  padding-left: 8px;
  resize: none;
`;

interface InputBasicProps {
  register: UseFormRegisterReturn<string>;
  placeholder: string;
}

function InputTextAreaBasic({ register, placeholder }: InputBasicProps) {
  return <Textarea {...register} placeholder={placeholder} />;
}

export default InputTextAreaBasic;

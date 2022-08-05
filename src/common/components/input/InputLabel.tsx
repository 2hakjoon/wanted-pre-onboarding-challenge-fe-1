import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div``;

interface InputLabel {
  title: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
}

function InputLabel({ title, register, placeholder, ...rest }: InputLabel) {
  return (
    <Wrapper {...rest}>
      <span>{title}</span>
      <input {...register} className="input" placeholder={placeholder} />
    </Wrapper>
  );
}

export default InputLabel;

import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 100%;
    height: 30px;
    border: 2px solid darkgray;
    border-radius: 8px;
    padding-left: 8px;
  }
`;

interface InputBasicProps {
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  type?: HTMLInputTypeAttribute | undefined;
}

function InputBasic({ register, placeholder, type, ...rest }: InputBasicProps) {
  return (
    <Wrapper {...rest}>
      <input type={type} {...register} className="input" placeholder={placeholder} />
    </Wrapper>
  );
}

InputBasic.defaultProps = {
  type: undefined,
};

export default InputBasic;

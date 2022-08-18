import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginParams } from '../../../api/Auth/types';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

function useLoginForm() {
  const {
    register,
    trigger,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginParams>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const isFormNotValid = () => {
    return !!errors.email?.message || !!errors.password?.message;
  };

  useEffect(() => {
    trigger();
  }, []);

  return { register, errors, handleSubmit, isFormNotValid };
}

export default useLoginForm;

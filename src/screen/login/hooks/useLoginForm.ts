import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginParams } from '../../../api/Auth/types';

const schema = yup
  .object({
    email: yup.string().email('이메일 양식이 올바르지 않습니다.').required(),
    password: yup.string().min(8, '비밀번호는 8자리 이상입니다.').required(),
  })
  .required();

function useLoginForm() {
  const {
    register,
    trigger,
    getValues,
    watch,
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

  const emailError = getValues('email') ? errors.email?.message : '';
  const passwordError = watch('password') ? errors.password?.message : '';

  return { register, emailError, passwordError, handleSubmit, isFormNotValid };
}

export default useLoginForm;

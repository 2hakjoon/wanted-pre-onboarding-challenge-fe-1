import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { SignUpParams } from '../../../api/Auth/types';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

function useSignUpForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpParams>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const isFormNotValid = () => {
    return !!errors.email?.message || !!errors.password?.message;
  };

  return { register, handleSubmit, isFormNotValid };
}

export default useSignUpForm;

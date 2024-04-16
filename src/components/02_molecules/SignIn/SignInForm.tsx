import React, { useCallback, useEffect, useState } from 'react';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useNavigate } from 'react-router-dom';
import { pb } from '@/api/pocketbase';

import Input from '@/components/01_atoms/Input/Input';
import Button from '@/components/01_atoms/Button/Button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface SignInFormProps {
  isError?: boolean;
  className?: string;
  labelEmail?: string;
  labelPassword?: string;
}
const SignInForm: React.FC<SignInFormProps> = ({ isError, className }) => {
  const { isLoggedIn, setUserInfo, setIsLoggedIn } = useLoginFormStore();
  const [error, setError] = useState<string>(''); // error 상태 추가
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const email = getValues('email');
      const password = getValues('password');

      // 로그인 요청
      await pb.collection('users').authWithPassword(email, password);

      setUserInfo(pb.authStore.model);
      setIsLoggedIn(!isLoggedIn);

      navigate('/Mypage');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[100%] ">
      <div className="flex flex-col gap-3 ">
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요."
            {...register('email', {
              required: '이메일을 필수 입력입니다.',
              pattern: {
                value:
                  /^[a-zA-Z]+[!#$%&'*+-/=?^_`(){|}~]*[a-zA-Z0-9]*@[\w]+\.[a-zA-Z0-9-]+[.]*[a-zA-Z0-9]+$/,
                message: '이메일 형식이 아닙니다.',
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
            className={
              className
                ? className
                : 'border rounded-xl w-full h-[3.79rem] px-3 text-lg'
            }
          />
          <p className="text-red-600">
            {typeof errors.email?.message === 'string'
              ? errors.email.message
              : ''}
          </p>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: '비밀번호는 필수 입력입니다.',
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message:
                  '비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
              },
            })}
            aria-invalid={errors.password ? 'true' : 'false'}
            className={
              className
                ? className
                : 'border rounded-xl w-full h-[3.79rem] px-3 text-lg'
            }
          />
          <p className="text-red-600">
            {typeof errors.password?.message === 'string'
              ? errors.password.message
              : ''}
          </p>
        </div>

        <Button
          type="submit"
          className="text-2xl border rounded-xl w-full h-[3.79rem]"
          children="로그인"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {/* 아래는 storybook 토글  */}
      {isError && (
        <p className="text-red-500">{'아이디 또는 비밀번호를 확인해주세요.'}</p>
      )}
    </form>
  );
};

export default SignInForm;

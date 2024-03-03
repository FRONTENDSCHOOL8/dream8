// SignInForm.tsx 파일에서 handleSubmit 함수 수정
import React, { useCallback, useEffect, useState } from 'react';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useNavigate } from 'react-router-dom';
import { pb } from '@/api/pocketbase';

import Input from '@/components/01_atoms/Input/Input';
import Button from '@/components/01_atoms/Button/Button';

interface SignInFormProps {
  isError?: boolean;
  className?: string;
  labelEmail?: string;
  labelPassword?: string;
}
const SignInForm: React.FC<SignInFormProps> = ({
  isError,
  className,
  labelEmail,
  labelPassword,
}) => {
  const { email, password, setEmail, setPassword } = useLoginFormStore();
  const [error, setError] = useState<string>(''); // error 상태 추가

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const userData = {
          email,
          password,
        };

        await pb
          .collection('users')
          .authWithPassword(userData.email, userData.password);

        useLoginFormStore.setState({ isLoggedIn: true });
        navigate('/product');
      } catch (error) {
        console.error('Error logging in:', error);
        setError('아이디 또는 비밀번호를 확인해주세요.');
      }
    },
    [email, password, navigate]
  );

  return (
    <form onSubmit={handleSubmit} className="w-[28.625rem] ">
      {error && <p className="text-red-500">{error}</p>}
      {/* 아래는 storybook 토글  */}
      {isError && (
        <p className="text-red-500">{'아이디 또는 비밀번호를 확인해주세요.'}</p>
      )}

      <div className="flex flex-col gap-3 ">
        <div>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            ariaRequired={true}
            className={
              className
                ? className
                : 'border rounded-xl w-full h-[3.79rem] px-3 text-lg'
            }
            labelText={labelEmail ? labelEmail : '이메일'}
          />
        </div>
        <div>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            ariaRequired={true}
            className={
              className
                ? className
                : 'border rounded-xl w-full h-[3.79rem] px-3 text-lg'
            }
            labelText={labelPassword ? labelPassword : '비밀번호'}
          />
        </div>

        <Button
          type="submit"
          className="text-2xl border rounded-xl w-full h-[3.79rem]"
          children="로그인"
        />
      </div>
    </form>
  );
};

export default SignInForm;

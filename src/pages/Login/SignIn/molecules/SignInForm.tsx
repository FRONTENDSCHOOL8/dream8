// SignInForm.tsx 파일에서 handleSubmit 함수 수정
import React, { useEffect, useRef } from 'react';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useNavigate } from 'react-router-dom';
import { pb } from '@/api/pocketbase';
import SignInFormLogin from '../atoms/SignInFormLogin';
import SignInFormInput from '../atoms/SignInFormInput';

const SignInForm: React.FC = () => {
  const { email, password, setEmail, setPassword } = useLoginFormStore();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[28.625rem] ">
      <div className="flex flex-col gap-3 ">
        <div>
          <SignInFormInput
            dynamicInputType="email"
            dynamicId="email"
            dynamicvalue={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            ariaRequired={true}
            className="border rounded-xl w-full h-[3.79rem]"
            labelText="이메일"
          />
        </div>
        <div>
          <SignInFormInput
            dynamicInputType="password"
            dynamicId="password"
            dynamicvalue={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            ariaRequired={true}
            className="border rounded-xl w-full h-[3.79rem]"
            labelText="비밀번호"
          />
        </div>

        <SignInFormLogin
          dynamicType="submit"
          dynamicStyle="text-2xl border rounded-xl w-full h-[3.79rem]"
          buttonText="로그인"
        />
      </div>
    </form>
  );
};

export default SignInForm;

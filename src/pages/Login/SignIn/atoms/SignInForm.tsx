// SignInForm.tsx 파일에서 handleSubmit 함수 수정
import React, { useEffect, useRef } from 'react';
import { useLoginFormStore } from '@/store/useLoginFormStore';
import { useNavigate } from 'react-router-dom';
import { pb } from '@/api/pocketbase';

const SignInForm: React.FC = () => {
  const { email, password, setEmail, setPassword, isLoggedIn } =
    useLoginFormStore();

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
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            className="border rounded-xl w-full h-[3.79rem]"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            className="border rounded-xl w-full h-[3.79rem]"
          />
        </div>

        <button
          type="submit"
          className="text-2xl border rounded-xl w-full h-[3.79rem]"
        >
          로그인
        </button>
      </div>
    </form>
  );
};

export default SignInForm;

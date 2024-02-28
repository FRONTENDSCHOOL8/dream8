import React from 'react';
import { useLoginFormStore } from '@/store/useLoginFormStore';

const SignInForm: React.FC = () => {
  const { email, password, setEmail, setPassword, handleSubmit } =
    useLoginFormStore();

  return (
    <form onSubmit={handleSubmit} className="w-[28.625rem] ">
      <div className="flex flex-col gap-3 ">
        <div>
          <label htmlFor="email">이메일:</label>
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
          <label htmlFor="password">비밀번호:</label>
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

import React, { useEffect } from 'react';
import { useLoginFormStore } from '@/store/useLoginFormStore';
import { useNavigate } from 'react-router-dom';

const SignInForm: React.FC = () => {
  const { email, password, setEmail, setPassword, handleSubmit } =
    useLoginFormStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // PocketBase에서 데이터 가져오기

        const storedIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

        // autoLogin이 true이거나 isLoggedIn이 true인 경우 chatList 페이지로 이동
        if (storedIsLoggedIn) {
          navigate('/main');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [navigate]);

  const handleLogin = async () => {};

  // const handleAutoLogin = () => {
  //   setAutoLogin(!autoLogin); // 자동 로그인 버튼 클릭 시 자동 로그인 활성화
  // };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, navigate)}
      className="w-[28.625rem] "
    >
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
          onClick={handleLogin}
          className="text-2xl border rounded-xl w-full h-[3.79rem]"
        >
          로그인
        </button>
      </div>
    </form>
  );
};

export default SignInForm;

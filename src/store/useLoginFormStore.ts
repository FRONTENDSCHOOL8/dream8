import { pb } from '@/api/pocketbase';
import { useNavigate } from 'react-router-dom';
import create from 'zustand';

interface LoginFormState {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    navigate: ReturnType<typeof useNavigate>
  ) => void;
}

export const useLoginFormStore = create<LoginFormState>((set) => ({
  email: '', // 초기화
  password: '', // 초기화
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
  handleSubmit: async (e, navigate) => {
    e.preventDefault();
    // 여기에 로그인 처리 로직을 추가하세요
    // Check if the event target is a form element

    try {
      // 폼 요소에서 이메일과 비밀번호 가져오기

      // 이메일과 비밀번호를 사용하여 로그인 처리
      const userData = {
        email: e.target[0].value,
        password: e.target[1].value,
      }; // 초기화

      console.log(userData.email, userData.password);

      await pb
        .collection('users')
        .authWithPassword(userData.email, userData.password);
      // 서버의 인증처리 후 token 발송
      // 로그인 상태와 자동 로그인 여부를 로컬 스토리지에 저장
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      //  localStorage.setItem('autoLogin', JSON.stringify(autoLogin));

      navigate('/'); // 메인 페이지로 이동
    } catch (error) {
      console.error('Error logging in:', error);
    }
  },
}));

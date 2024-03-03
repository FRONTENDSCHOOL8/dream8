import { create } from 'zustand';

interface LoginFormState {
  userInfo: any; // 사용자 정보를 담을 상태
  email: string;
  password: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUserInfo: (userInfo: any) => void; // 사용자 정보를 설정하는 액션
}

const useLoginFormStore = create<LoginFormState>((set) => ({
  email: '',
  password: '',
  isLoggedIn: false,
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
}));

export default useLoginFormStore;

import { create } from 'zustand';

interface LoginFormState {
  userInfo: any;
  email: string;
  password: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUserInfo: (userInfo: any) => void;
}

const useLoginFormStore = create<LoginFormState>((set) => {
  const storedUserInfo = localStorage.getItem('userInfo');
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

  return {
    email: '',
    password: '',
    isLoggedIn: storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false,
    setIsLoggedIn: (isLoggedIn) => {
      set({ isLoggedIn });
      localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    },
    userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : '',
    setUserInfo: (userInfo) => {
      set({ userInfo });
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
    setEmail: (email: string) => set({ email }),
    setPassword: (password: string) => set({ password }),
  };
});

export default useLoginFormStore;

import { create } from 'zustand';

interface LoginFormState {
  email: string;
  password: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const useLoginFormStore = create<LoginFormState>((set) => ({
  email: '',
  password: '',
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
}));

export default useLoginFormStore;

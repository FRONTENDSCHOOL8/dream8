import create from 'zustand';

interface LoginFormState {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useLoginFormStore = create<LoginFormState>((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  handleSubmit: (e) => {
    e.preventDefault();
    // 여기에 로그인 처리 로직을 추가하세요
  },
}));

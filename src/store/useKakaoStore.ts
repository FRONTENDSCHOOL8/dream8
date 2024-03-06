import { create } from 'zustand';

export const useKakaoStore = create((set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
}));

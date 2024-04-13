import { create } from 'zustand';

export const useKakaoStore = create((set) => ({
  accessToken: null,
  userData: null,
  isSocialLoggedIn: false,
  setAccessToken: (token) => set({ accessToken: token }),
  setuserData: (data) => set({ userData: data }),

  setisSocialLoggedIn: (isSocialLoggedIn: boolean) => set({ isSocialLoggedIn }),
}));

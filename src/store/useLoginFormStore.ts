import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useLoginFormStore = create(
  persist(
    devtools((set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),

      userInfo: '',
      setUserInfo: (userInfo: {}) => set({ userInfo }),
      clearUser: () => set({ userInfo: null }),
    })),
    { name: 'userStore' }
  )
);

export default useLoginFormStore;

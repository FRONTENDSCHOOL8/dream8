import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const useLoginFormStore = create(
  persist(
    devtools((set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),

      userInfo: '',
      setUserInfo: (userInfo: {}) => set({ userInfo }),
      clearUser: () => set({ userInfo: null }),
    })),
    { name: 'userStore', storage: createJSONStorage(() => sessionStorage) }
  )
);

// 페이지를 나갈 때 로컬 스토리지를 삭제하는 이벤트 리스너 추가
// window.addEventListener('beforeunload', () => {
//   localStorage.removeItem('userStore');
// });

export default useLoginFormStore;

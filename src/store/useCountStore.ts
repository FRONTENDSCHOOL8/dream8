import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

// 상태 초기 값
const initialState = {
  count: 0,
};

const useCountStore = create(
  persist(
    devtools((set) => ({
      ...initialState,
      setCount: (count) => set({ count }), // set 함수를 직접 호출하여 값을 설정합니다.
      plusCount: () => set((state) => ({ count: state.count + 1 })), // 액션을 반환하는 함수를 정의합니다.
      minusCount: () => set((state) => ({ count: state.count - 1 })),
      resetCount: () => set(initialState),
    })),

    { name: 'useCountStore' }
  )
);

export default useCountStore;

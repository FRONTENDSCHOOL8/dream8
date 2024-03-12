// import { create } from 'zustand';
// import { createJSONStorage, devtools, persist } from 'zustand/middleware';
// const initialState = {
//   noticeList: [],
// };

// const useNoticeList = create(
//   persist(
//     devtools((set) => ({
//       ...initialState,
//       setNotice: (notice) => set({ notice }), // 수정 필요
//       addNotice: (notice) =>
//         set((state) => ({ noticeList: [...state.noticeList, notice] })),
//       minusNotice: (id) =>
//         set((state) => ({
//           noticeList: state.noticeList.filter((item) => item.id !== id),
//         })),
//       clearNotices: () => set({ noticeList: [] }),
//     })),
//     { name: 'useNoticeList' }
//   )
// );
// export default useNoticeList;
// DB생성 Runtime으로 사용 알림
// Count만 현재 store로 교환

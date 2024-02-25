import { createBrowserRouter } from 'react-router-dom';

// 레이아웃(Layouts)
import RootLayout from '@/layout/RootLayout';

// // 페이지(Pages)
// import NotFound from '@/pages/NotFound';

// 내비게이션(Navigation)
import navigation from '@/routes/navigation';

// 루트 구성(routes configuration)
const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: '로딩중',
    children: navigation,
  },
];

const options = {
  basename: import.meta.env.BASE_URL,
};

// 라우터 인스턴스 생성
let router = createBrowserRouter(routes, options);

// 라우터 인스턴스 기본 내보내기
export default router;

import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
function Exercise() {
  return (
    <HelmetProvider>
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl">클라이언트 사이드 라우팅(CSR)</h2>
        <p className="text-xs">
          클라이언트 환경에서 라우팅되는 싱글 페이지 애플리케이션(SPA) 구성
        </p>
      </div>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
export default Exercise;

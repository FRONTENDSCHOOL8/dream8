import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from '@/routes';

// 1. QueryClient 인스턴스 생성
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // window focus 설정
      // 전역적으로 설정
      //단순 페이지 전환만으로 refetch를 막음, *상황에 따라 다름.
      // staleTime: 1000 * 25,
    },
  },
});

// 2. QueryClientProvider queryClient -> client 공급
function Exercise() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col space-y-1"></div>
        <RouterProvider router={router} />
        {/* ReactQueryDevtools : tanstack qury 개발자 도구 */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HelmetProvider>
  );
}
export default Exercise;

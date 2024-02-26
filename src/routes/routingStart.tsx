import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from '@/routes';

// 1. QueryClient 인스턴스 생성
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
      </QueryClientProvider>
    </HelmetProvider>
  );
}
export default Exercise;

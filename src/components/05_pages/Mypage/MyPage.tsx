import { pb } from '@/api/pocketbase';
import MypageOrganisms from '@/components/03_organisms/Mypage/MypageOrganisms';
import { useQueries } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

export function MyPage() {
  const [dataExchange, dataDonation, dataMycart] = useLoaderData();

  const queries = useQueries({
    queries: [
      {
        queryKey: ['my_cart'],
        queryFn: fetchMycart,
        initialData: dataMycart,
        staleTime: 5000, // 5초
        // cacheTime: Infinity,
      },
      {
        queryKey: ['donation'],
        queryFn: fetchDonation,
        initialData: dataDonation,
        staleTime: 5000, // 5초
        // cacheTime: Infinity,
      },
      {
        queryKey: ['exchange'],
        queryFn: fetchExchange,
        initialData: dataExchange,
        staleTime: 5000, // 5초
        // cacheTime: Infinity,
      },
    ],
  });

  return (
    <section className="max-w-[1440px] m-auto">
      <h2 className="sr-only">마이페이지</h2>
      <MypageOrganisms queries={queries} />
    </section>
  );
}

MyPage.displayName = 'MyPage';

async function fetchExchange() {
  const response = await pb
    .collection('exchange')
    .getFullList({ expand: 'field' });
  return response;
}

async function fetchDonation() {
  const response = await pb
    .collection('donation')
    .getFullList({ expand: 'userId' });
  return response;
}

async function fetchMycart() {
  const response = await pb
    .collection('my_cart')
    .getFullList({ expand: 'userId, productId' });
  return response;
}

export const loader = (queryClient) => async () => {
  return await Promise.all([
    queryClient.ensureQueryData({
      queryKey: ['exchange'],
      queryFn: () => fetchExchange(),
      // staleTime: 1000 * 10, // 10s
    }),
    queryClient.ensureQueryData({
      queryKey: ['donation'],
      queryFn: () => fetchDonation(),
      // staleTime: 1000 * 10, // 10s
    }),
    queryClient.ensureQueryData({
      queryKey: ['my_cart'],
      queryFn: () => fetchMycart(),
      // staleTime: 1000 * 10, // 10s
    }),
  ]);
};

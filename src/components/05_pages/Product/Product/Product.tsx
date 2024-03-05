import ArrangeProduct from '@/components/03_organisms/Product/ArrangeProduct/ArrangeProduct';
import CategoryProduct from '@/components/03_organisms/Product/CategoryProduct/CategoryProduct';
import ListsProduct from '@/components/03_organisms/Product/ListsProduct/ListsProduct';
import SearchProduct from '@/components/03_organisms/Product/SearchProduct/SearchProduct';
import { useCallback, useState } from 'react';
import { pb } from '@/api/pocketbase';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export function Product() {
  const [category, setCategory] = useState<string>('전체');
  const onSelect = useCallback((category: string) => setCategory(category), []);

  const productLists = useLoaderData();

  const { data } = useQuery({
    queryKey: ['productLists'],
    queryFn: () => fetchMultipleProduct(),
    initialData: productLists,
  });

  return (
    <div className="flex flex-col gap-8 bg-white m-auto w-[90rem] max-w-[90rem] pt-16 py-48">
      <h2 className="sr-only">판매 페이지</h2>
      <SearchProduct />
      <div className="flex flex-row justify-end px-[6rem] items-center">
        <ArrangeProduct />
        <CategoryProduct onSelect={onSelect} />
      </div>
      <ListsProduct category={category} productLists={data} />
    </div>
  );
}

async function fetchMultipleProduct() {
  return await pb.collection('product').getFullList({
    sort: '-created',
  });
}

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['productLists'],
    queryFn: () => fetchMultipleProduct(),
    cacheTime: 6000 * 10,
    staleTime: 1000 * 10,
  });
};

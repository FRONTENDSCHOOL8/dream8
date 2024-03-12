import ArrangeProduct from '@/components/03_organisms/Product/ArrangeProduct/ArrangeProduct';
import CategoryProduct from '@/components/03_organisms/Product/CategoryProduct/CategoryProduct';
import ListsProduct from '@/components/03_organisms/Product/ListsProduct/ListsProduct';
import SearchProduct from '@/components/03_organisms/Product/SearchProduct/SearchProduct';
import { useCallback, useState } from 'react';
import { pb } from '@/api/pocketbase';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { RecordModel } from 'pocketbase';
import { ProductListsType } from '@/types';
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';

export function Product() {
  const [category, setCategory] = useState<string>('전체');
  const [sort, setSort] = useState<string>('최근순');
  const [search, setSearch] = useState<string>('');
  const onSelectCategory = useCallback(
    (category: string) => setCategory(category),
    []
  );
  const onSelectSort = useCallback((sort: string) => setSort(sort), []);
  const onSearch = useCallback((search: string) => setSearch(search), []);

  const productLists = useLoaderData();

  const { data } = useQuery({
    queryKey: ['productLists'],
    queryFn: () => fetchMultipleProduct(),
    initialData: productLists,
    staleTime: 1000 * 10,
  });

  const metaTag = {
    title: '판매페이지',
    pageDescription: '드림의 판매 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: 'Product',
  };

  return (
    <>
      <MetaTag metaTag={metaTag} />
      <div className="flex flex-col gap-8 bg-white m-auto w-[90rem] max-w-[90rem] py-36">
        <h2 className="sr-only">판매 페이지</h2>
        <SearchProduct onSearch={onSearch} />
        <div className="flex flex-row justify-end px-[6rem] items-center">
          <ArrangeProduct onSelect={onSelectSort} />
          <CategoryProduct onSelect={onSelectCategory} />
        </div>
        <ListsProduct
          sort={sort}
          category={category}
          search={search}
          productLists={data}
        />
      </div>
    </>
  );
}

async function fetchMultipleProduct(): Promise<ProductListsType[]> {
  return await pb.collection('product').getFullList({
    sort: '-created',
    filter: 'isSale = true',
  });
}

export const loader =
  (queryClient: {
    ensureQueryData: (arg0: {
      queryKey: string[];
      queryFn: () => Promise<RecordModel[]>;
    }) => any;
  }) =>
  async () => {
    return await queryClient.ensureQueryData({
      queryKey: ['productLists'],
      queryFn: () => fetchMultipleProduct(),
    });
  };

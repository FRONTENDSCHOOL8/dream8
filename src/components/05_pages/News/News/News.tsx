import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import Title from "../../../01_atoms/News/NewsTitle/NewsTitle";
import NewsList from "../../../01_atoms/News/NewsList/NewsList";
import Button from '@/components/01_atoms/Button/Button';
import { pb } from "@/api/pocketbase";
import { useLoaderData } from "react-router";

export function News() {
  const [newsCount, setNewsCount] = useState(0);
  const newsListInitialData = useLoaderData();

  const { data: newsList, error, isError } = useQuery({
    queryKey: ['newsList'],
    queryFn: fetchNews,
    initialData: newsListInitialData,
  });

  if (isError) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다. {error.message}</div>
  }

  useEffect(() => {
    if (newsList) {
      setNewsCount(newsList.length);
    }
  }, [newsList]);

  const [ showMore, setShowMore ] = useState(5);

  const handleShowMore = () => {
    if (showMore < newsList.length) {
      setShowMore(showMore + 3);
    }
  };

  return (
    <div className="max-w-[90rem] m-auto bg-white py-20">
      <Title />
      <div className="w-[56rem] m-auto">
        <div className="py-10">
          <p className="text-end">총 <strong className="text-blue-primary">{newsCount}</strong>개의 소식이 있습니다.</p>
        </div>
        <NewsList newsList={newsList.slice(0, showMore)} />
        {showMore < newsList.length && (
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={handleShowMore}
              className="border p-2 rounded-xl text-gray-500 m-auto text-lg hover:text-white hover:bg-blue-primary"
            >
              더보기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

async function fetchNews() {
  const response = await pb.collection('news').getList(1, 10, {
    sort: '-created',
  });
  return response.items;
}

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['newsList'],
    queryFn: fetchNews,
    cacheTime: 6000 * 10,
    staleTime: 1000 * 10,
  });
}
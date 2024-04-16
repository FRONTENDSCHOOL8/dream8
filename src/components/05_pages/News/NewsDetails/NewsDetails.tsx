import { useParams } from 'react-router-dom';
import { pb } from '@/api/pocketbase';
import { getPbImage } from '@/utils/getPbImage';
import NewsTitle from '../../../01_atoms/News/NewsTitle/NewsTitle';
import { useQuery } from '@tanstack/react-query';
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';

export function NewsDetail() {
  const metaTag = {
    title: '소식페이지',
    pageDescription: '드림의 소식 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: 'News',
  };

  const { newsId } = useParams();

  const { data: news } = useQuery({
    queryKey: ['newsDetail', newsId],
    queryFn: () => fetchNewsDetail(newsId),
  });

  return (
    <>
      <MetaTag metaTag={metaTag} />
      <div className="max-w-[90rem] m-auto bg-white py-36">
        <NewsTitle />
        <div className=" flex flex-col m-auto gap-14 justify-center py-5 w-[18rem] md:w-[30rem] xl:w-[50rem]">
          <p className="text-center">
            [발행 날짜: {new Date(news.created).toLocaleDateString()}]
          </p>
          <p className="text-xl md:text-2xl xl:text-3xl font-bold text-center">
            {news.title}
          </p>
          <img
            src={getPbImage(news.collectionId, news.id, news.photo)}
            alt={news.title}
            className="m-auto w-[18rem] md:w-[30rem] xl:w-[50rem] xxl:w-full"
          />
          {news.content.split('. ').map((line, index) => (
            <p
              key={`news_Description_${index}`}
              className="m-auto w-[18rem] md:w-[30rem] xl:w-[50rem] -my-4 text-md xl:text-lg"
            >
              {line}.
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

async function fetchNewsDetail(newsId: string) {
  const response = await pb.collection('news').getOne(newsId);
  return response;
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { newsId } = params;
    return await queryClient.ensureQueryData({
      queryKey: ['newsDetail', newsId],
      queryFn: () => fetchNewsDetail(newsId),
      cacheTime: 6000 * 10,
      staleTime: 1000 * 10,
    });
  };

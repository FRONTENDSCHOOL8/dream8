import { useParams } from "react-router-dom";
import { pb } from "@/api/pocketbase";
import { getPbImage } from '@/utils/getPbImage';
import NewsTitle from "../../../01_atoms/News/NewsTitle/NewsTitle";
import { useQuery } from "@tanstack/react-query";

export function NewsDetail() {

  const { newsId } = useParams();

  const { data: news } = useQuery({
    queryKey: ['newsDetail', newsId ],
    queryFn: () => fetchNewsDetail(newsId)
  });

  return (
    <div className="max-w-[90rem] m-auto bg-white py-20">
      <NewsTitle />
      <div className="flex flex-col m-auto gap-14 justify-center py-5 w-[890px]">
        <p className="text-center">[발행 날짜: {new Date(news.created).toLocaleDateString()}]</p>
        <p className="text-3xl font-bold text-center">{news.title}</p>
        <img
          src={getPbImage(news.collectionId, news.id, news.photo)}
          alt={news.title}
          className="w-full"
        />
        {news.content.split('. ').map((line, index) => (
          <p key={`news_Description_${index}`} className="-my-4 text-lg">
            {line}.
          </p>
        ))}
      </div>
    </div>
  );
}

async function fetchNewsDetail(newsId: string) {
  const response = await pb.collection('news').getOne(newsId);
  return response
}

export const loader = (queryClient) => async ({ params }) => {
  const { newsId } = params;
  return await queryClient.ensureQueryData({
    queryKey: ['newsDetail', newsId ],
    queryFn: () => fetchNewsDetail(newsId),
    cacheTime: 6000 * 10,
    staleTime: 1000 * 10,
  })
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pb } from "@/api/pocketbase";
import { getPbImage } from '@/utils/getPbImage';
import NewsTitle from "../../../01_atoms/News/NewsTitle/NewsTitle";

function NewsDetail() {
  const [news, setNews] = useState<NewsItemProps | null>(null);
  const { newsId } = useParams();

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await pb.collection('news').getList();
        const newsItems = response.items;
        const newsItem = newsItems.find(item => item.id === newsId);
        if (newsItem) {
          setNews(newsItem);
        } else {
          console.error("News not found for the given ID");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
  
    fetchNewsDetail();
  }, [newsId]);

  if (!news) return <div>Loading...😵‍💫</div>;

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

export default NewsDetail;

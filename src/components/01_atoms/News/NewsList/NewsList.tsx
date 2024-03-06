import { useEffect, useState } from "react";
import { pb } from "@/api/pocketbase";
import { Link } from "react-router-dom";

function NewsList({ setNewsCount }) {

  const [newsList, setNewsList] = useState<NewsItemProps[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await pb.collection('news').getList(1, 10, {
          sort: '-created',
        });
        setNewsList(data.items as NewsItemProps[]);
        setNewsCount(data.items.length); // 뉴스 항목의 개수 업데이트
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [setNewsCount]);

  return (
    <>
      {newsList.map((newsItem) => (
        <Link to={`/NewsDetails/${newsItem.id}`} key={newsItem.id}>
          <div className="flex items-center justify-between border border-gray-200 rounded-[20px] p-5 m-5">
            <ul className="flex flex-col gap-2">
              <li><p className="text-xl font-bold">[{newsItem.type}] {newsItem.title}</p></li>
              <li><span className="text-gray-500">{newsItem.content.substring(0, 50)}...</span></li>
            </ul>
            <p className="text-xl">{new Date(newsItem.created).toLocaleDateString()}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default NewsList;
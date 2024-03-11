import { Link } from "react-router-dom";
import NewsMoreButton from "../../01_atoms/Home/NewsMoreButton";

type NewsItemProps = {
  id: string;
  created: string;
  type: string;
  title: string;
  photo: string[];
  content: string;
};

function NewsCard({ width, height, newsItem, content }: { width: string; height: string; newsItem: NewsItemProps; content: boolean }) {
  if (!newsItem) {
    return null;
  }

  const showContent = newsItem.content.length > 430 ? newsItem.content.substring(0, 430) + "..." : newsItem.content;

  return (
    <li className={`${width} ${height} list-none flex flex-col items-end justify-between gap-5 m-auto p-8 rounded-[50px] bg-white shadow-root`}>
      <div className="w-full h-full">
        <div className="flex items-center justify-between pb-8">
          <h2 className="text-3xl font-bold">{newsItem.type}</h2>
          <span className="font-bold">[{new Date(newsItem.created).toLocaleDateString()}]</span>
        </div>
        <div>
          <div className="overflow-hidden  text-gray-500">
            <p className="text-[20px]">"{newsItem.title}"</p>
            {content && <p className="mt-10">{showContent}</p>}
          </div>
        </div>
      </div>
      
      <Link to={`/NewsDetails/${newsItem.id}`}>
        <NewsMoreButton />
      </Link>
    </li>
  );
}

export default NewsCard;
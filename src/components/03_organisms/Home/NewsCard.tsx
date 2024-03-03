// import React from "react";
import { Link } from "react-router-dom";
import NewsMoreButton from "../../01_atoms/Home/NewsMoreButton";

type NewsItemProps = {
  id: string;
  created: string;
  type: string;
  title: string;
  content: string;
};

function NewsCard({ width, height, newsItem }: { width: string; height: string; newsItem: NewsItemProps }) {
  if (!newsItem) {
    return null; // newsItem이 없다면 아무것도 렌더링하지 않음
  }

  return (
    <li className={`${width} ${height} list-none flex flex-col items-end justify-between gap-5 m-auto p-8 rounded-[50px] bg-white shadow-root`}>
      <div className="w-full h-full">
        <div className="flex items-center justify-between pb-8">
          <h2 className="text-3xl font-bold">{newsItem.type}</h2>
          <span className="font-bold">[{new Date(newsItem.created).toLocaleDateString()}]</span>
        </div>
        <div>
          <div className="overflow-hidden">
            <p className="text-[20px] text-gray-500">{newsItem.title}</p>
            {/* <p>{newsItem.content}</p> */}
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
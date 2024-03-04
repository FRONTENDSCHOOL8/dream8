import { useState } from "react";
import Title from "../../../01_atoms/News/NewsTitle/NewsTitle";
import NewsList from "../../../01_atoms/News/NewsList/NewsList";

function News() {
  const [newsCount, setNewsCount] = useState(0); // 뉴스 항목의 개수를 상태로 관리

  return (
    <div className="max-w-[90rem] m-auto bg-white py-20">
      <Title />
      <div className="w-[900px] m-auto">
        <div className="py-10">
          {/* 상태를 이용해 뉴스 항목의 개수를 표시 */}
          <p className="text-end">총 <strong className="text-blue-primary">{newsCount}</strong>개의 소식이 있습니다.</p>
        </div>
        {/* setNewsCount 함수를 prop으로 전달 */}
        <NewsList setNewsCount={setNewsCount} />
      </div>
    </div>
  );
}

export default News;

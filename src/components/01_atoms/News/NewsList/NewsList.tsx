import { Link } from "react-router-dom";

function NewsList() {
  return (
    <Link to="/NewsDetails">
      <div className="flex items-center border justify-between border-gray-200 rounded-[20px] p-5">
        <ul className="flex flex-col gap-2">
          <li><p className="text-xl font-bold">[기사] 기사 제목 불러오기</p></li>
          <li><span className="text-gray-500">기사 내용 불러오기 어쩌구 저쩌구 했습니다...</span></li>
        </ul>
        <p className="text-xl">2024.02.22</p>
      </div>
    </Link>
  );
}

export default NewsList;
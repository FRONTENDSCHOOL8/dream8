import Title from "./atoms/Title";
import NewsList from "./atoms/NewsList";

function News() {
  return (
  <div className="max-w-[1440px] m-auto bg-white py-20">
    <Title />
    <div className="w-[900px] m-auto">
      <div className="py-10">
        <p className="text-end">총 <strong className="text-blue-primary">n</strong>개의 소식이 있습니다.</p>
      </div>
      <NewsList />
    </div>
  </div>
  );
}

export default News;

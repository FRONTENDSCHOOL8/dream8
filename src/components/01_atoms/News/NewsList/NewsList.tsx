import { Link } from 'react-router-dom';

function NewsList({ newsList }) {
  return (
    <>
      {newsList.map((newsItem) => (
        <Link to={`/NewsDetails/${newsItem.id}`} key={newsItem.id}>
          <div className=" w-[500px] lg:w-[800px] flex items-center justify-between gap-10 border border-gray-200 rounded-[20px] p-5 my-5 mx-auto  hover:shadow-root transition-all">
            <ul className="flex flex-col gap-2">
              <li>
                <p className="text-xl font-bold">
                  [{newsItem.type}] {newsItem.title}
                </p>
              </li>
              <li>
                <span className="text-gray-500">
                  {newsItem.content.substring(0, 50)}...
                </span>
              </li>
            </ul>
            <p className="text-xl">
              {new Date(newsItem.created).toLocaleDateString()}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default NewsList;

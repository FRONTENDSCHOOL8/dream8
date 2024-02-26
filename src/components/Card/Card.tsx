import profile from 'public/profile.svg';
import ExchangeBox from './ExchangeBox';

interface CardProps {
  children: {
    title: string;
    product_detail: string;
  };
}

function Card({ children }: CardProps) {
  const { title, product_detail } = children;

  return (
    <div className="rounded-2xl shadow-root w-[16rem] text-ellipsis">
      <img className="bg-gray-200 rounded-t-2xl h-44" />
      <ul className=" flex flex-col gap-2 pl-3 pb-3">
        <li className="flex items-center gap-2 ">
          <img src={profile} alt="Profile" />
          <h2 className="text-sm">name</h2>
        </li>
        <li className="text-[1.3rem] line-clamp-1">{title}</li>
        <li className="text-[0.75rem] line-clamp-1">{product_detail}</li>
        <li className="text-[0.75rem] text-gray-400">조회수 14회</li>
        <ExchangeBox name="교환가능" />
      </ul>
    </div>
  );
}

export default Card;

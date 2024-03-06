import StateBox from '@/components/StateBox/StateBox';
import { getPbImageURL } from '@/utils/getPbImage';
import Profile from '../Profile/Profile';

interface CardProps {
  children: {
    title: string;
    product_detail: string;
  };
}

function Card({ children }: CardProps) {
  const { title, product_detail } = children;

  return (
    <div className="rounded-2xl shadow-root text-ellipsis flex flex-col gap-3 w-11/12">
      <img
        className="bg-gray-200 rounded-t-2xl h-44 line-clamp-1 w-full"
        src={getPbImageURL(children, 'product_img')}
      />
      <ul className="flex flex-col gap-2 px-2 pb-3">
        <li className="flex items-center gap-2">
          <Profile />
        </li>
        <li className="text-[1.3rem] line-clamp-1">{title}</li>
        <li className="text-[0.75rem] line-clamp-1">{product_detail}</li>
        <li className="text-[0.75rem] text-gray-400">조회수 14회</li>
        <StateBox
          name="교환가능"
          className="bg-orange-primary text-white w-14 text-[0.875rem] flex justify-center items-center rounded-[0.3125rem]"
        />
      </ul>
    </div>
  );
}

export default Card;

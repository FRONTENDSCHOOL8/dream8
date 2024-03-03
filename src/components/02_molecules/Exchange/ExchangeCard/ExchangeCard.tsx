import User from '@/components/02_molecules/Exchange/User/User';
import { getPbImageURL } from '@/utils/getPbImage';

interface ExchangeChildren {
  title: string;
  product_detail: string;
}

interface ExchangeCard {
  name: string;
  children: ExchangeChildren;
}

function ExchangeCard({ name, children }: ExchangeCard) {
  const { title, product_detail } = children;

  return (
    <div className="rounded-2xl shadow-root text-ellipsis flex flex-col gap-2">
      <img
        src={getPbImageURL(children, 'product_img')}
        className="rounded-t-2xl h-44 line-clamp-1 w-full"
        alt={product_detail}
      />
      <div className="flex flex-col gap-3 p-2">
        <User />
        <h2 className="text-[1.1rem] line-clamp-1">{title}</h2>
        <p className="text-[0.725rem] line-clamp-1">{product_detail}</p>
        <div className="bg-orange-primary text-white w-14 text-[0.875rem] flex justify-center items-center rounded-[0.3125rem]">
          {name}
        </div>
      </div>
    </div>
  );
}

export default ExchangeCard;

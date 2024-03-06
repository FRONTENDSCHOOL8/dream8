import StateBox from '@/components/01_atoms/StateBox/StateBox';
import User from '@/components/02_molecules/Exchange/User/User';
import { getPbImageURL } from '@/utils/getPbImage';

interface ExchangeChildren {
  title: string;
  model_name: string;
  product_detail: string;
}

interface ExchangeCard {
  name: string;
  children: ExchangeChildren;
  className: string;
  userName: [];
}

function ExchangeCard({ children, className, userName }: ExchangeCard) {
  const { title, product_detail, model_name } = children;

  return (
    <div className={className}>
      <section className="rounded-2xl shadow-root text-ellipsis flex flex-col gap-2">
        <img
          src={getPbImageURL(children, 'product_img')}
          className="bg-gray-100 rounded-t-2xl h-44 line-clamp-1 w-full"
          alt={model_name}
        />
        <User userName={userName} />
        <div className="flex flex-col gap-3 p-2">
          <h2 className="text-[1.1rem] line-clamp-1">{title}</h2>
          <p className="text-[0.725rem] line-clamp-1">{product_detail}</p>
          <StateBox
            className="bg-orange-primary text-white w-14 text-[0.875rem] flex justify-center items-center rounded-[0.3125rem]"
            name="교환가능"
          />
        </div>
      </section>
    </div>
  );
}

export default ExchangeCard;

import StateBox from '@/components/01_atoms/StateBox/StateBox';
import User from '@/components/02_molecules/Exchange/User/User';
import { getPbImageURL } from '@/utils/getPbImage';

interface ExchangeChildren {
  title: string;
  model_name: string;
  product_detail: string;
  isComplete: boolean;
}

interface ExchangeCardProps {
  children: ExchangeChildren;
  className: string;
  userName: string[];
}

function ExchangeCard({ children, className, userName }: ExchangeCardProps) {
  const { title, product_detail, model_name, isComplete } = children;

  return (
    <div className={className}>
      <section className="w-[280px] h-[400px] rounded-2xl shadow-root text-ellipsis flex flex-col gap-4 overflow-hidden bg-gray-300">
        <div className="w-full h-52 flex justify-center items-center overflow-hidden">
          <img
            src={getPbImageURL(children, 'product_img')}
            className="bg-gray-100 line-clamp-1 "
            alt={model_name}
          />
        </div>
        <User userName={userName} />
        <div className="flex flex-col gap-5 p-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg line-clamp-1">{title}</h2>
            <p className="text-xs line-clamp-1">{product_detail}</p>
          </div>
          <StateBox
            className="bg-orange-primary text-white w-16 text-xs py-1 text-center rounded-md"
            isComplete={isComplete}
          />
        </div>
      </section>
    </div>
  );
}

export default ExchangeCard;

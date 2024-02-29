import ExchangeWriteButton from '@/components/Button/ExchangeWriteButton';
import Card from '@/components/Card/Card';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import create from 'zustand';
import { pb } from '@/api/pocketbase';
import ExchangeMore from '@/pages/Exchange/molecules/ExchangeMore';

const user = {
  name: 'donny',
};
interface ExchangeItem {
  id: string;
  title: string;
  type: string;
  brand: string;
  model_name: string;
  grade: string;
  trade_method: string;
  product_detail: string;
  product_img: string;
}

interface ExchangeStore {
  exchangeData: ExchangeItem[];
  setExchangeData: (data: ExchangeItem[]) => void;
}

export const useExchangeStore = create<ExchangeStore>((set) => ({
  exchangeData: [],
  setExchangeData: (data) => set({ exchangeData: data }),
}));

function Exchange() {
  const { exchangeData, setExchangeData } = useExchangeStore();
  const maxItemsToShow = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultList: ExchangeItem[] = await pb
          .collection('exchange')
          .getFullList();
        setExchangeData(resultList);
      } catch (error) {
        console.error('Error fetching exchange data:', error);
      }
    };

    fetchData();
  }, [setExchangeData]);

  if (!user || exchangeData.length === 0) {
    return null;
  }

  const visibleExchangeData = exchangeData.slice(0, maxItemsToShow);

  return (
    <div className="flex flex-col gap-4 pt-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-6/12 flex justify-end">
          <ExchangeWriteButton name="게시글 작성" />
        </div>
        <div
          className={`${
            maxItemsToShow
              ? 'grid grid-cols-3 gap-10 w-7/12'
              : 'grid grid-cols-3 grid-rows-3 gap-10 w-7/12'
          }`}
        >
          {visibleExchangeData.map((item, index) => (
            <Link
              to={`/Exchange/ExchangeDetail/${item.id}`}
              key={item.id}
              className={`${index >= 3 ? 'opacity-30' : ''}`}
            >
              <Card>{item}</Card>
            </Link>
          ))}
        </div>
        <ExchangeMore />
      </div>
    </div>
  );
}

export default Exchange;

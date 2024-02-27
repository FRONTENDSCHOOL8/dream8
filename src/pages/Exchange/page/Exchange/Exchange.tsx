import ExchangeWriteButton from '@/components/Button/ExchangeWriteButton';
import Card from '@/components/Card/Card';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import create from 'zustand';
import { pb } from '@/api/pocketbase';
import ExchangeMore from '@/pages/Exchange/molecules/ExchangeMore';

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

  return (
    <div
      className="flex flex-col gap-4 mt-10 overflow-y-auto"
      style={{ maxHeight: 'calc(100vh - 61px - 210px)' }}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-3/5 flex justify-end">
          <ExchangeWriteButton name="게시글 작성" />
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-10">
          {exchangeData.map((item) => (
            <Link to={`/Exchange/ExchangeDetail/${item.id}`} key={item.id}>
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

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import create from 'zustand';
import { pb } from '@/api/pocketbase';
import ExchangeMore from '@/pages/Exchange/molecules/ExchangeMore';
import useLoginFormStore from '@/store/useLoginFormStore';
import MoreButton from '@/components/Button/MoreButton';
import ExchangeWriteButton from '@/components/Button/ExchangeWriteButton';
import Card from '@/components/Card/Card';

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
  const { isLoggedIn } = useLoginFormStore();
  const [maxList, setMaxList] = useState(6);

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleMoreButtonClick = () => {
    setMaxList((prevMaxList) => prevMaxList + 6);
  };

  return (
    <div className="flex flex-col gap-4 pt-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[56rem] flex justify-end">
          <ExchangeWriteButton name="게시글 작성" />
        </div>
        <div className="grid grid-cols-3 gap-10 w-[60rem]">
          {exchangeData.slice(0, maxList).map((item, index) =>
            isLoggedIn ? (
              <Link to={`/Exchange/ExchangeDetail/${item.id}`} key={item.id}>
                <Card>{item}</Card>
              </Link>
            ) : (
              <Link
                to="/SignIn"
                className={`${!isLoggedIn && index >= 3 ? 'opacity-30' : ''}`}
              >
                <Card>{item}</Card>
              </Link>
            )
          )}
        </div>
        <MoreButton onClick={handleMoreButtonClick} />
        {!isLoggedIn && <ExchangeMore />}
      </div>
    </div>
  );
}

export default Exchange;

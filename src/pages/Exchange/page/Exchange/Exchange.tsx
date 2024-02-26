import MoreButton from '@/components/Button/MoreButton';
import Card from '@/components/Card/Card';
import { pb } from '@/api/pocketbase';

import { useEffect, useState } from 'react';
import ExchangeWriteButton from '@/components/Button/ExchangeWrtieButton';

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

function Exchange() {
  const [exchangeData, setExchangeData] = useState<ExchangeItem[]>([]);

  useEffect(() => {
    const result = async () => {
      const resultList: ExchangeItem[] = await pb
        .collection('exchange')
        .getFullList();
      setExchangeData(resultList);
    };
    result();
  }, []);

  return (
    <div className="mt-10 flex flex-col justify-center items-center gap-4 w-9/12 m-auto">
      <div className="w-4/5 flex justify-end">
        <ExchangeWriteButton name="게시글 작성"></ExchangeWriteButton>
      </div>
      <article className="grid grid-cols-3 grid-rows-3 gap-10">
        {exchangeData.map((item: ExchangeItem) => (
          <Card key={item.id}>{item}</Card>
        ))}
      </article>
    </div>
  );
}

export default Exchange;

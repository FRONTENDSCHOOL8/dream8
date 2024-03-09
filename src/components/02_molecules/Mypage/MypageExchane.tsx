import { pb } from '@/api/pocketbase';
import TransactionListCard from './components/TransactionListCard';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useEffect, useState } from 'react';
import { RecordModel } from 'pocketbase';
import { getPbImage } from '@/utils/getPbImage';

interface MypageExchaneProps {
  mycartList?: RecordModel[];
}

const MypageExchane = ({ mycartList }: MypageExchaneProps) => {
  const { userInfo } = useLoginFormStore();
  const [exchangeData, setExchangeData] = useState(mycartList);

  useEffect(() => {
    const fetchExchangeValue = async () => {
      try {
        // const response = await pb
        //   .collection('exchange')
        //   .getFullList({ expand: 'field' });

        compareCart(userInfo.id, exchangeData);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchExchangeValue();
  }, [userInfo]);

  const compareCart = (userId: string, excahnge: RecordModel[] | undefined) => {
    const result = excahnge?.filter(
      (item) => userId === item.expand?.field?.id
    );

    setExchangeData(result);
  };

  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">교환내역</h2>

      <div>
        <ul>
          <li className="flex flex-col gap-10">
            {exchangeData?.map((item) => (
              <TransactionListCard
                key={item.id}
                src={[getPbImage(item.collectionId, item.id, item.product_img)]}
                content={item.product_detail} // donationData 배열을 직접 전달
                isPayed={item.isComplete}
                className={''}
                type="exchange"
              />
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MypageExchane;

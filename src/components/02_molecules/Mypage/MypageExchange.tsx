import { pb } from '@/api/pocketbase';
import TransactionListCard from './components/TransactionListCard';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useEffect, useState } from 'react';
import { RecordModel } from 'pocketbase';
import { getPbImage } from '@/utils/getPbImage';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Button from '@/components/01_atoms/Button/Button';

export const MypageExchange = () => {
  const loadedData = useLoaderData();
  const { userInfo } = useLoginFormStore();
  const [showMore, setShowMore] = useState(5);
  const [exchangeData, setExchangeData] = useState<RecordModel[] | undefined>(
    loadedData
  );

  const { data: exchangeList } = useQuery<RecordModel[]>({
    queryKey: ['exchange'],
    queryFn: fetchExchangeValue,
    initialData: loadedData,
    staleTime: 1000 * 10,
  });

  useEffect(() => {
    const fetchExchangeValue = async () => {
      try {
        // const response = await pb
        //   .collection('exchange')
        //   .getFullList({ expand: 'field' });

        compareCart(userInfo.id, exchangeList);
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

  const handleShowMore = () => {
    if (showMore < exchangeList.length) {
      setShowMore(showMore + 3);
    }
  };

  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">교환내역</h2>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div className="flex flex-col gap-10">
        <ul>
          <li className="flex flex-col gap-5">
            {exchangeData?.slice(0, showMore)?.map((item) => (
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

        {exchangeData && exchangeData.length > 0 && (
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={handleShowMore}
              className="border p-2 rounded-xl text-gray-500 m-auto text-lg hover:text-white hover:bg-blue-primary bg-white"
            >
              더보기
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

// Component.displayName = 'MypageEchange';

async function fetchExchangeValue() {
  return await pb.collection('exchange').getFullList({ expand: 'field' });
}

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['exchange'],
    queryFn: () => fetchExchangeValue(),
  });
};

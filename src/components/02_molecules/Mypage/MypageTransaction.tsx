import useLoginFormStore from '@/store/useLoginFormStore';
import TransactionListCard from './components/TransactionListCard';

import { useEffect, useState } from 'react';
import { RecordModel } from 'pocketbase';
import { getPbImage } from '@/utils/getPbImage';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { pb } from '@/api/pocketbase';
import Button from '@/components/01_atoms/Button/Button';

export const MypageTransaction = () => {
  const loadedData = useLoaderData();
  const { userInfo } = useLoginFormStore();
  const [showMore, setShowMore] = useState(5);
  const [cartData, setCartData] = useState<RecordModel[] | undefined>(
    loadedData
  );

  const { data: productList } = useQuery<RecordModel[]>({
    queryKey: ['my_cart'],
    queryFn: fetchMultipleProduct,
    initialData: loadedData,
    staleTime: 1000 * 10,
  });

  useEffect(() => {
    const fetchCartValue = async () => {
      try {
        compareCart(userInfo.id, productList);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchCartValue();
  }, [userInfo, productList]);

  const compareCart = (userId: string, cart?: RecordModel[]) => {
    const result = cart?.filter((item) => userId === item.expand?.userId?.id);
    setCartData(result);
  };

  const handleShowMore = () => {
    if (showMore < productList.length) {
      setShowMore(showMore + 3);
    }
  };

  console.log('cartData  ', cartData);
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">구매내역</h2>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div>
        <ul>
          <li className="flex flex-col gap-10">
            {cartData?.slice(0, showMore)?.map((item) => {
              const photo = item.expand?.productId.photo;
              const firstPhotoURL = getPbImage(
                item.expand?.productId.collectionId,
                item.expand?.productId.id,
                photo[0] // 첫 번째 이미지 URL만 추출
              );
              const title = item.expand?.productId.title;
              const isPayed = item.isPayed;

              return (
                <TransactionListCard
                  key={item.id}
                  src={[firstPhotoURL]} // 배열로 전달
                  content={title}
                  isPayed={isPayed}
                  type={'mycart'}
                />
              );
            })}
          </li>
        </ul>
        {cartData && cartData.length > 0 && (
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
// Component.displayName = 'MypageTransaction';

async function fetchMultipleProduct(): Promise<RecordModel[]> {
  return await pb
    .collection('my_cart')
    .getFullList({ expand: 'userId, productId' });
}

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['my_cart'],
    queryFn: () => fetchMultipleProduct(),
  });
};

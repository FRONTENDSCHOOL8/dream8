import useLoginFormStore from '@/store/useLoginFormStore';
import TransactionListCard from './components/TransactionListCard';
import { pb } from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import { RecordModel } from 'pocketbase';
import { getPbImage } from '@/utils/getPbImage';
import { useNavigate } from 'react-router-dom';

const MypageTransaction = () => {
  const { userInfo } = useLoginFormStore();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchCartValue = async () => {
      try {
        const response = await pb
          .collection('my_cart')
          .getFullList({ expand: 'userId, productId' });

        compareCart(userInfo.id, response);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchCartValue();
  }, [userInfo]);

  const compareCart = (userId: string, cart: RecordModel[]) => {
    const result = cart.filter((item) => userId === item.expand?.userId?.id);
    setCartData(result);
  };

  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">구매내역</h2>
      <div>
        <ul>
          <li className="flex flex-col gap-10">
            {cartData.map((item) => {
              const photo = item.expand.productId.photo;
              const firstPhotoURL = getPbImage(
                item.expand.productId.collectionId,
                item.expand.productId.id,
                photo[0] // 첫 번째 이미지 URL만 추출
              );
              const title = item.expand.productId.title;
              const isPayed = item.isPayed;
              // console.log('item.expand.productId  ', item.isPayed);
              return (
                <TransactionListCard
                  key={item.id}
                  src={[firstPhotoURL]} // 배열로 전달
                  content={title}
                  isPayed={isPayed}
                />
              );
            })}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MypageTransaction;

import useLoginFormStore from '@/store/useLoginFormStore';
import TransactionListCard from './components/TransactionListCard';
import { pb } from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import { RecordModel } from 'pocketbase';

const MypageTransaction = () => {
  const { userInfo } = useLoginFormStore();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchCartValue = async () => {
      try {
        const response = await pb
          .collection('my_cart')
          .getFullList({ expand: 'userId' });

        compareCart(userInfo.id, response);
      } catch (error) {
        console.log('error : ', error);
      }
    };
    fetchCartValue();
  }, [userInfo]);

  const compareCart = (userId: string, cart: RecordModel[]) => {
    const result = cart.filter((item) => {
      const itemUserId = item.expand?.userId?.id;
      return userId === itemUserId;
    });
    setCartData(result);
  };
  console.log('cartData: ', cartData);
  // console.log('userInfo', userInfo);
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">거래내역</h2>

      <div>
        <ul>
          <li className="flex flex-col gap-10">
            <TransactionListCard
              alt={''}
              src={''}
              resultValue={''}
              content={''}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MypageTransaction;

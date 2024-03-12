import useLoginFormStore from '@/store/useLoginFormStore';
import TransactionListCard from './components/TransactionListCard';
import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';
import { RecordModel } from 'pocketbase';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export const MypageSponsorship = () => {
  const loadedData = useLoaderData();
  const { userInfo } = useLoginFormStore();
  const [donationData, setDonationData] = useState(loadedData);

  const { data } = useQuery({
    queryKey: ['donation'],
    queryFn: fetchDonationValue,
    initialData: loadedData,
    staleTime: 1000 * 10,
  });

  useEffect(() => {
    const fetchDonaitionValue = async () => {
      try {
        // const response = await pb
        //   .collection('donation')
        //   .getFullList({ expand: 'userId' });

        compareCart(userInfo.id, data);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchDonaitionValue();
  }, [userInfo]);

  const compareCart = (userId: string, mydonation?: RecordModel[]) => {
    const result = mydonation?.filter(
      (item) => userId === item.expand?.userId?.id
    );

    setDonationData(result); // donationData를 배열로 설정
  };

  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">후원내역</h2>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div>
        <ul>
          <li className="flex flex-col items-center gap-8">
            {donationData?.map((item) => (
              <TransactionListCard
                key={item.id}
                src={[]}
                content={item.description} // donationData 배열을 직접 전달
                isPayed={true}
                className="p-8"
                type={'sponsorship'}
              />
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};

// Component.displayName = 'MypageSponsorship';

async function fetchDonationValue() {
  return await pb.collection('donation').getFullList({ expand: 'userId' });
}

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['donation'],
    queryFn: () => fetchDonationValue(),
  });
};

import useLoginFormStore from '@/store/useLoginFormStore';
import TransactionListCard from './components/TransactionListCard';
import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';
import { RecordModel } from 'pocketbase';

interface MypageSponsorshipProps {
  mySponsorList?: RecordModel[];
}

const MypageSponsorship = ({ mySponsorList }: MypageSponsorshipProps) => {
  const { userInfo } = useLoginFormStore();
  const [donationData, setDonationData] = useState(mySponsorList);

  useEffect(() => {
    const fetchDonaitionValue = async () => {
      try {
        // const response = await pb
        //   .collection('donation')
        //   .getFullList({ expand: 'userId' });

        compareCart(userInfo.id, donationData);
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

      <div>
        <ul>
          <li className="flex flex-col gap-10">
            {donationData?.map((item) => (
              <TransactionListCard
                key={item.id}
                src={[]}
                content={item.description} // donationData 배열을 직접 전달
                isPayed={true}
                className="py-10 pl-10"
                type={'sponsorship'}
              />
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MypageSponsorship;

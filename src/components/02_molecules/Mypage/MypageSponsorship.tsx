import useLoginFormStore from '@/store/useLoginFormStore';
import TransactionListCard from './components/TransactionListCard';

const MypageSponsorship = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">후원내역</h2>

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

export default MypageSponsorship;

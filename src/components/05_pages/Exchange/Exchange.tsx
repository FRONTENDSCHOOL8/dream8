import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pb } from '@/api/pocketbase';
import useLoginFormStore from '@/store/useLoginFormStore';
import ExchangeCard from '@/components/02_molecules/Exchange/ExchangeCard/ExchangeCard';
import Button from '@/components/01_atoms/Button/Button';
import BeforeLogin from '@/components/02_molecules/Exchange/Button/BeforeLogin';
import { ExchangeItem, useListStore } from '@/store/useListStore';

function Exchange() {
  const { Data, setData } = useListStore();
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
      setData(resultList);
    } catch (error) {
      console.error('Error fetching exchange data:', error);
    }
  };

  const handleMoreButtonClick = () => {
    setMaxList((prevMaxList) => prevMaxList + 6);
  };

  const renderExchangeCards = () => {
    return Data.slice(0, maxList).map((item, index) => (
      <Link to={`/Exchange/ExchangeDetail/${item.id}`} key={item.id}>
        <ExchangeCard
          name="교환가능"
          className={`${!isLoggedIn && index >= 3 ? 'opacity-30' : ''}`}
        >
          {item}
        </ExchangeCard>
      </Link>
    ));
  };

  return (
    <div className="flex flex-col gap-4 pt-10 items-center">
      <div className="flex flex-col gap-5">
        <div className="flex justify-end">
          <Link to={isLoggedIn ? '/Exchange/ExchangeWrite' : '/SignIn'}>
            <Button
              type="button"
              className="px-2 rounded-md text-blue-primary border-blue-primary border hover:bg-blue-primary hover:text-white"
            >
              게시글 작성
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-10 w-[60rem]">
          {renderExchangeCards()}
        </div>
        {isLoggedIn ? (
          <BeforeLogin onClick={handleMoreButtonClick} />
        ) : (
          <Link to="/SignIn">
            <BeforeLogin />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Exchange;

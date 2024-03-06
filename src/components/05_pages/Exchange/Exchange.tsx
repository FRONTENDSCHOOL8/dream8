import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLoginFormStore from '@/store/useLoginFormStore';
import ExchangeCard from '@/components/02_molecules/Exchange/ExchangeCard/ExchangeCard';
import Button from '@/components/01_atoms/Button/Button';
import BeforeLogin from '@/components/02_molecules/Exchange/Button/BeforeLogin';
import { useListStore } from '@/store/useListStore';
import Button01 from '@/components/01_atoms/Button/Button01';
import useGetList from '@/hooks/useGetList';

function Exchange() {
  const { Data } = useListStore();
  const { isLoggedIn } = useLoginFormStore();
  const [maxList, setMaxList] = useState(6);
  const data = useGetList();

  const usersData = data.map((item) => item.expand);
  const userData = usersData.map((item) => item.field[0]);

  const handleLoadMoreButtonClick = () => {
    setMaxList((prevMaxList) => prevMaxList + 6);
  };

  const renderExchangeCards = () => {
    return Data.slice(0, maxList).map((item, index) => (
      <Link
        to={isLoggedIn ? `/Exchange/ExchangeDetail/${item.id}` : '/SignIn'}
        key={item.id}
      >
        <ExchangeCard
          name="교환가능"
          userName={userData[index]?.user_name}
          className={`${!isLoggedIn && index >= 3 ? 'opacity-30' : ''}`}
        >
          {item}
        </ExchangeCard>
      </Link>
    ));
  };

  return (
    <div className="flex flex-col gap-4 pt-10 items-center">
      <div className="flex flex-col gap-2">
        <div className="flex justify-end">
          <Link to={isLoggedIn ? '/ExchangeWrite' : '/SignIn'}>
            <Button
              type="button"
              className="px-2 rounded-md text-blue-primary border-blue-primary border-2 hover:bg-blue-primary hover:text-white"
            >
              게시글 작성
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-10 w-[60rem]">
          {renderExchangeCards()}
        </div>
        <div className="flex justify-center items-center pt-3 pb-3">
          {isLoggedIn ? (
            <Button01
              type="button"
              className="rounded-md p-0 w-[4rem] border-2 text-sm hover:bg-blue-primary hover:text-white"
              onClick={handleLoadMoreButtonClick}
            >
              더보기
            </Button01>
          ) : (
            <Link
              to="/SignIn"
              className="flex flex-col gap-3 justify-center items-center"
            >
              <Button01
                type="button"
                className="rounded-md p-0 w-[4rem] border-2 text-sm hover:bg-blue-primary hover:text-white"
                onClick={handleLoadMoreButtonClick}
              >
                더보기
              </Button01>
              <BeforeLogin />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Exchange;

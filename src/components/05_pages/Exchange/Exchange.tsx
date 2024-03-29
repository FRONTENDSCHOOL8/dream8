import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useLoginFormStore from '@/store/useLoginFormStore';
import ExchangeCard from '@/components/02_molecules/Exchange/ExchangeCard/ExchangeCard';
import Button from '@/components/01_atoms/Button/Button';
import BeforeLogin from '@/components/02_molecules/Exchange/Button/BeforeLogin';
import Button01 from '@/components/01_atoms/Button/Button01';
import useGetList from '@/hooks/useGetList';
import { useQuery } from '@tanstack/react-query';
import ConfirmModal from '@/components/02_molecules/Modal/ConfirmModal/ConfirmModal';
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';

export function Exchange() {
  const exchangeLists = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);
  const metaTagData = {
    // 변수 이름을 metaTagData로 변경
    title: '교환 페이지',
    pageDescription: '드림의 판매 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: '/Exchange',
  };

  const { isLoggedIn } = useLoginFormStore();
  const [maxList, setMaxList] = useState(6);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['exchangeList'],
    queryFn: useGetList,
    initialData: exchangeLists,
  });

  if (isPending) return;

  if (isError) return `...에러났어여! :  ${error}`;

  const usersData = data?.map((item) => item.expand);
  const userData = usersData?.map((item) => item.field);

  const handleLoadMoreButtonClick = () => {
    setMaxList((prevMaxList) => prevMaxList + 6);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const renderExchangeCards = () => {
    return data?.slice(0, maxList).map((item, index) => (
      <Link
        to={isLoggedIn ? `/Exchange/ExchangeDetail/${item.id}` : '/SignIn'}
        key={item.id}
      >
        <ExchangeCard
          userName={userData[index]?.user_name}
          className={`${
            !isLoggedIn && index >= 3 ? 'opacity-30' : ''
          } hover:scale-105`}
        >
          {item}
        </ExchangeCard>
      </Link>
    ));
  };
  86 + 225;

  return (
    <div className="flex flex-col gap-4 pt-32 items-center max-w-[90rem] m-auto">
      <MetaTag metaTag={metaTagData} />
      <div className="flex flex-col gap-10">
        <div className="flex justify-end">
          <Link to={isLoggedIn ? '/ExchangeWrite' : '/SignIn'}>
            <Button
              type="button"
              className="p-1 mr-3 rounded-md text-blue-primary border-blue-primary border-2 hover:bg-blue-primary hover:text-white"
            >
              게시글 작성
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-10 w-[60rem]">
          {renderExchangeCards()}
        </div>
        <div className="flex justify-center items-center pt-3 pb-2">
          {isLoggedIn ? (
            <Button01
              type="button"
              className="border p-2 rounded-xl text-gray-500 m-auto text-lg hover:text-white hover:bg-blue-primary"
              onClick={handleLoadMoreButtonClick}
            >
              더보기
            </Button01>
          ) : (
            <div className="flex flex-col items-center">
              <Button01
                type="button"
                className="border p-2 rounded-xl text-gray-500 m-auto text-lg hover:text-white hover:bg-blue-primary"
                onClick={handleClick}
              >
                더보기
              </Button01>
              <BeforeLogin />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <ConfirmModal title="실패!" onClose={handleCloseModal}>
          로그인 해주세요!
        </ConfirmModal>
      )}
    </div>
  );
}

export const loader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['exchangeList'],
    queryFn: useGetList,
    cacheTime: 6000 * 10,
    staleTime: 1000 * 10,
  });
};

import { useLoaderData, useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils/getPbImage';
import StateBox from '@/components/StateBox/StateBox';
import User from '@/components/02_molecules/Exchange/User/User';
import useLoginFormStore from '@/store/useLoginFormStore';
import Chat_Modify from '@/components/02_molecules/Exchange/Button/Chat_Modify';
import { useQuery, QueryClient } from '@tanstack/react-query';
import useGetOneUser from '@/hooks/useGetOneUser';
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';

export function ExchangeDetail() {
  const { id } = useParams<{ id: string }>();
  const metaTagData = {
    // 변수 이름을 metaTagData로 변경
    title: '교환 디테일 페이지',
    pageDescription: '드림의 교환 디테일 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: '/Exchange/ExchangeDetail/:id',
  };

  const { userInfo } = useLoginFormStore();
  const exchangeOneLists = useLoaderData();

  const { data, isLoading, error } = useQuery({
    queryKey: ['exchangeDetail', id],
    queryFn: () => useGetOneUser(id),
    initialData: exchangeOneLists,
  });

  if (isLoading) return <p>로딩 중입니다...</p>;
  if (error) return <p>오류가 발생했습니다: {error.message}</p>;

  const userData = data?.expand.field;
  const userName = userData?.user_name;
  const Edit = userData?.id === userInfo.id;

  return (
    <div className="pl-36 pt-32 pb-5 flex flex-col">
      <MetaTag metaTag={metaTagData} />
      <div className="flex">
        <img
          src={getPbImageURL(data, 'product_img')}
          className="w-[18.75rem] h-[18.75rem] rounded-xl"
        />
        <div className="flex flex-col pl-14 gap-6 max-w-[90rem]">
          <p>{data?.type}</p>
          <h2 className="text-2xl">{data?.title}</h2>
          <StateBox
            className="bg-orange-primary text-white w-14 text-[0.875rem] flex justify-center items-center rounded-[0.3125rem]"
            name="교환가능"
          ></StateBox>
          <div className="border border-gray-200 p-2">
            <User userName={userName} />
          </div>
          <p className="text-gray-100 text-xs">
            중고 물품 물물 거래만 가능합니다. <br />
            금전 거래를 자제해주세요.
          </p>
          <Chat_Modify Edit={Edit} id={id} />
        </div>
      </div>
      <div className="pt-10 flex flex-col">
        <h1>상품정보</h1>
        <p className="w-11/12 border rounded-md h-52 p-4">
          {data?.product_detail}
        </p>
      </div>
    </div>
  );
}

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return await queryClient.ensureQueryData({
      queryKey: ['exchangeDetail', id],
      queryFn: () => useGetOneUser(id),
      cacheTime: 6000 * 10,
      staleTime: 1000 * 10,
    });
  };

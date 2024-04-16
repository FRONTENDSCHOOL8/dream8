import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';
import CategoryMolecules from '@/components/02_molecules/Mypage/CategoryMolecules';
import MypageInfoUserCard from '@/components/02_molecules/Mypage/MypageInfoUserCard';
import { Outlet } from 'react-router-dom';

export function Mypage() {
  const metaTag = {
    title: '마이페이지',
    pageDescription: '드림의 마이 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: 'Mypage',
  };
  return (
    <section className=" flex flex-col justify-center items-center m-auto py-36">
      <MetaTag metaTag={metaTag} />
      <h2 className=" xxl_max:top-8 bg-white w-full text-3xl font-semibold text-center">
        마이페이지
      </h2>

      <div className="xxl_max:hidden w-[64rem] flex items-start gap-20 justify-between py-10 ">
        <CategoryMolecules />
        <div className="w-[56rem] flex flex-col gap-10">
          <MypageInfoUserCard />
          <Outlet></Outlet>
        </div>
      </div>

      <div className="xxl:hidden  flex flex-col items-start gap-20 py-10 ">
        <CategoryMolecules />
        <div className="w-full xxl:w-[56rem] flex flex-col gap-10 m-auto">
          <MypageInfoUserCard />

          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
}

Mypage.displayName = 'Mypage';

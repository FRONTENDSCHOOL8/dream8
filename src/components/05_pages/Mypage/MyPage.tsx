import CategoryMolecules from '@/components/02_molecules/Mypage/CategoryMolecules';
import MypageInfoUserCard from '@/components/02_molecules/Mypage/MypageInfoUserCard';
import { Outlet } from 'react-router-dom';

export function MyPage() {
  return (
    <section className="max-w-[1440px] m-auto">
      <h2 className="sr-only">마이페이지</h2>
      <section className="max-w-[90rem] flex flex-col py-10 ">
        <h2 className="text-3xl font-semibold py-20 text-center">마이페이지</h2>
        <div className="flex  items-start gap-10 justify-center">
          <CategoryMolecules />
          <div className="flex flex-col  gap-[4.37rem] min-w-[40.62rem]">
            <MypageInfoUserCard />
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </section>
  );
}

MyPage.displayName = 'MyPage';

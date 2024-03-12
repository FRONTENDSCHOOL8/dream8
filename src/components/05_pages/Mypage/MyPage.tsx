import CategoryMolecules from '@/components/02_molecules/Mypage/CategoryMolecules';
import MypageInfoUserCard from '@/components/02_molecules/Mypage/MypageInfoUserCard';
import { Outlet } from 'react-router-dom';

export function MyPage() {
  return (
    <section className="max-w-[90rem] flex flex-col justify-center items-center m-auto py-36">
      <h2 className="text-3xl font-semibold text-center">마이페이지</h2>
      <div className="w-[64rem] flex items-start gap-20 justify-between py-10">
        <CategoryMolecules />
        <div className="w-full flex flex-col gap-10">
          <MypageInfoUserCard />
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
}

MyPage.displayName = 'MyPage';

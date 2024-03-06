import CategoryMolecules from '@/components/02_molecules/Mypage/CategoryMolecules';

import MypageInfoUserCard from '@/components/02_molecules/Mypage/MypageInfoUserCard';
import MypageSponsorship from '@/components/02_molecules/Mypage/MypageSponsorship';
import MypageTransaction from '@/components/02_molecules/Mypage/MypageTransaction';
import MypageUserSetting from '@/components/02_molecules/Mypage/MypageUserSetting';
import { useState } from 'react';

const MypageOrganisms = ({}) => {
  const [currentPage, setCurrentPage] = useState<string>('LoginInfo');

  const handleMove = (id: string) => {
    setCurrentPage(id);
  };

  return (
    <section className="max-w-[90rem] flex flex-col py-10 ">
      <h2 className="text-3xl font-semibold py-20  text-center">마이페이지</h2>
      <div className="flex  items-start gap-10 justify-center">
        <CategoryMolecules handleMove={handleMove} />
        <div className="flex flex-col  gap-[4.37rem] min-w-[40.62rem]">
          <MypageInfoUserCard />
          {currentPage === 'LoginInfo' && <MypageUserSetting />}
          {currentPage === 'Purchase' && <MypageTransaction />}
          {currentPage === 'Donation' && <MypageSponsorship />}
        </div>
      </div>
    </section>
  );
};

export default MypageOrganisms;

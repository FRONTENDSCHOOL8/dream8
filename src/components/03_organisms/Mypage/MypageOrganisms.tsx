import CategoryMolecules from '@/components/02_molecules/Mypage/CategoryMolecules';
import MypageExchane from '@/components/02_molecules/Mypage/MypageExchane';

import MypageInfoUserCard from '@/components/02_molecules/Mypage/MypageInfoUserCard';
import MypageSponsorship from '@/components/02_molecules/Mypage/MypageSponsorship';
import MypageTransaction from '@/components/02_molecules/Mypage/MypageTransaction';
import MypageUserSetting from '@/components/02_molecules/Mypage/MypageUserSetting';
import { UseQueryResult } from '@tanstack/react-query';
import { RecordModel } from 'pocketbase';
import { useState } from 'react';

interface MypageOrganismsProps {
  queries: UseQueryResult<RecordModel[], Error>[];
}

const MypageOrganisms = ({ queries }: MypageOrganismsProps) => {
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
          {currentPage === 'Purchase' && (
            <MypageTransaction mycartList={queries[0]?.data} />
          )}
          {currentPage === 'Donation' && (
            <MypageSponsorship mySponsorList={queries[1]?.data} />
          )}
          {currentPage === 'Exchange' && (
            <MypageExchane mycartList={queries[2]?.data} />
          )}
        </div>
      </div>
    </section>
  );
};

export default MypageOrganisms;

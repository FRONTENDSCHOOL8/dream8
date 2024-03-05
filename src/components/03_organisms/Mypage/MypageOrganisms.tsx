import React from 'react';
import Image from '@/components/01_atoms/Image/Image';
import MypageMolecules from '@/components/02_molecules/Mypage/CategoryMolecules';
import MypageInfoMolecules from '@/components/02_molecules/Mypage/MypageInfoMolecules';
import MypageInfoUserCard from '@/components/02_molecules/Mypage/MypageInfoUserCard';

const MypageOrganisms = ({}) => {
  return (
    <section className="max-w-[90rem] flex flex-col py-10 ">
      <h2 className="text-3xl font-semibold py-20  text-center">마이페이지</h2>
      <div className="flex  items-start gap-10 justify-center">
        <MypageMolecules />
        <div className="flex flex-col  gap-[4.37rem] min-w-[40.62rem]">
          <MypageInfoUserCard />
          <MypageInfoMolecules />
        </div>
      </div>
    </section>
  );
};

export default MypageOrganisms;

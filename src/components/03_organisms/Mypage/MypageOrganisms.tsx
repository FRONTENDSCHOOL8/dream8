import React from 'react';
import Image from '@/components/01_atoms/Image/Image';
import MypageMolecules from '@/components/02_molecules/Mypage/CategoryMolecules';
import MypageInfoMolecules from '@/components/02_molecules/Mypage/MypageInfoMolecules';
import MypageInfoUserCard from '@/components/02_molecules/Mypage/MypageInfoUserCard';

const MypageOrganisms = ({}) => {
  return (
    <section className="flex flex-col p-10">
      <h2 className="text-center text-[2.37rem] font-semibold py-20">
        마이페이지
      </h2>
      <div className="flex gap-5 justify-between">
        <MypageMolecules />
        <div className="flex flex-col gap-[4.37rem]">
          <MypageInfoUserCard />
          <MypageInfoMolecules />
        </div>
      </div>
    </section>
  );
};

export default MypageOrganisms;

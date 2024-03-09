import Button from '@/components/01_atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import MypageUserSetting from './MypageUserSetting';
import { useState } from 'react';

interface CategoryMoleculesProps {
  handleMove: (id: string) => void;
}
const CategoryMolecules: React.FC<CategoryMoleculesProps> = ({
  handleMove,
}) => {
  const [selectedButton, setSelectedButton] = useState('LoginInfo');

  return (
    <div className="flex flex-col whitespace-nowrap px-14 py-20  border border-gray-300 justify-center items-center gap-24 shadow-xl">
      <Button
        type="button"
        aria-label="회원정보 자세히보기 버튼"
        className={`text-2xl font-semibold ${
          selectedButton === 'LoginInfo' ? 'text-blue-500' : ''
        }`}
        onClick={() => {
          handleMove('LoginInfo');
          setSelectedButton('LoginInfo');
        }}
      >
        <span>회원정보</span>
      </Button>
      <Button
        type="button"
        aria-label="구매내역 자세히보기 버튼"
        className={`text-2xl font-semibold ${
          selectedButton === 'Purchase' ? 'text-blue-500' : ''
        }`}
        onClick={() => {
          handleMove('Purchase');
          setSelectedButton('Purchase');
        }}
      >
        <span>구매내역</span>
      </Button>

      <Button
        type="button"
        aria-label="교환내역 자세히보기 버튼"
        className={`text-2xl font-semibold ${
          selectedButton === 'Exchange' ? 'text-blue-500' : ''
        }`}
        onClick={() => {
          handleMove('Exchange');
          setSelectedButton('Exchange');
        }}
      >
        <span>교환내역</span>
      </Button>
      <Button
        type="button"
        aria-label="후원내역 자세히보기 버튼"
        className={`text-2xl font-semibold ${
          selectedButton === 'Donation' ? 'text-blue-500' : ''
        }`}
        onClick={() => {
          handleMove('Donation');
          setSelectedButton('Donation');
        }}
      >
        <span>후원내역</span>
      </Button>
    </div>
  );
};

export default CategoryMolecules;

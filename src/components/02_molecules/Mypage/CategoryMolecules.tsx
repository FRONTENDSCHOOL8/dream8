import Button from '@/components/01_atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

const CategoryMolecules = () => {
  const navigate = useNavigate();

  const handleMove = (id: string) => {
    console.log('ddd');
    switch (id) {
      case 'LoginInfo':
        return navigate('/MypageUserSetting');
      case 'Purchase':
        return console.log('Purchase');
      case 'Donation':
        return console.log('Donation');
      default:
        return navigate('/Mypage');
    }
  };

  return (
    <div className="flex flex-col whitespace-nowrap px-14 py-20  border border-gray-300 justify-center items-center gap-24 ">
      <Button
        type="button"
        aria-label="마이페이지 버튼"
        className="text-2xl font-semibold"
        onClick={() => handleMove('Mypage')}
      >
        <span>마이페이지</span>
      </Button>
      <Button
        type="button"
        aria-label="회원정보 자세히보기 버튼"
        className="text-xl font-semibold"
        onClick={() => handleMove('LoginInfo')}
      >
        <span>회원정보</span>
      </Button>
      <Button
        type="button"
        aria-label="거래내역 자세히보기 버튼"
        className="text-xl font-semibold"
        onClick={() => handleMove('Purchase')}
      >
        <span>거래내역</span>
      </Button>
      <Button
        type="button"
        aria-label="후원내역 자세히보기 버튼"
        className="text-xl font-semibold"
        onClick={() => handleMove('Donation')}
      >
        <span>후원내역</span>
      </Button>
    </div>
  );
};

export default CategoryMolecules;

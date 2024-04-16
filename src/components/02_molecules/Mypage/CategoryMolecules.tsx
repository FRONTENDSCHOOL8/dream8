import Button from '@/components/01_atoms/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryMolecules = ({}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="z-10  m-auto xxl:sticky top-20 flex  xxl:flex-col whitespace-nowrap p-7 xxl:px-14 xxl:py-20 bg-white  border border-gray-300 justify-center items-center xxl:gap-20 lg:gap-10 gap-2">
      <Button
        type="button"
        aria-label="회원정보 자세히보기 버튼"
        className={` md:text-xl xxl:text-2xl font-semibold ${
          pathname === '/Mypage' ? 'text-blue-primary' : ''
        }`}
        onClick={() => {
          navigate('/Mypage', { preventScrollReset: true });
        }}
      >
        <span>회원정보</span>
      </Button>
      <Button
        type="button"
        aria-label="장바구니 페이지 버튼"
        className={`md:text-xl xxl:text-2xl font-semibold ${
          pathname === '/Payment' ? 'text-blue-primary' : ''
        }`}
        onClick={() => {
          navigate('/Payment', { preventScrollReset: true });
        }}
      >
        <span>장바구니</span>
      </Button>
      <Button
        type="button"
        aria-label="구매내역 자세히보기 버튼"
        className={`md:text-xl xxl:text-2xl font-semibold ${
          pathname === '/Mypage/purchase' ? 'text-blue-primary' : ''
        }`}
        onClick={() => {
          navigate('/Mypage/purchase', { preventScrollReset: true });
        }}
      >
        <span>구매내역</span>
      </Button>
      <Button
        type="button"
        aria-label="교환내역 자세히보기 버튼"
        className={`md:text-xl xxl:text-2xl font-semibold ${
          pathname === '/Mypage/exchange' ? 'text-blue-primary' : ''
        }`}
        onClick={() => {
          navigate('/Mypage/exchange', { preventScrollReset: true });
        }}
      >
        <span>교환내역</span>
      </Button>
      <Button
        type="button"
        aria-label="후원내역 자세히보기 버튼"
        className={`md:text-xl xxl:text-2xl font-semibold ${
          pathname === '/Mypage/donation' ? 'text-blue-primary' : ''
        }`}
        onClick={() => {
          navigate('/Mypage/donation', { preventScrollReset: true });
        }}
      >
        <span>후원내역</span>
      </Button>
    </div>
  );
};

export default CategoryMolecules;

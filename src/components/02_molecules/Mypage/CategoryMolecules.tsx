import Button from '@/components/01_atoms/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoryMolecules = ({}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="sticky top-20 flex flex-col whitespace-nowrap px-14 py-20 border border-gray-300 justify-center items-center gap-20">
      <Button
        type="button"
        aria-label="회원정보 자세히보기 버튼"
        className={`text-2xl font-semibold ${
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
        className={`text-2xl font-semibold ${
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
        className={`text-2xl font-semibold ${
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
        className={`text-2xl font-semibold ${
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
        className={`text-2xl font-semibold ${
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

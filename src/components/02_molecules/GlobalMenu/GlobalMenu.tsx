import { Link } from 'react-router-dom';

export type GLobalMenuProps = {
  direction: string;
};

const GlobalMenu = ({ direction }: GLobalMenuProps) => {
  return (
    <>
      <nav className={`flex ${direction} gap-20 text-xl whitespace-nowrap`}>
        <Link
          to="/"
          aria-label="메인 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          메인
        </Link>
        <Link
          to="/Product"
          aria-label="상품 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          판매
        </Link>
        <Link
          to="/Exchange"
          aria-label="교환 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          교환
        </Link>
        <Link
          to="/Donation"
          aria-label="후원 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          후원
        </Link>
        <Link
          to="/News"
          aria-label="소식 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          소식
        </Link>
      </nav>
    </>
  );
};

export default GlobalMenu;

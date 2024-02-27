import { Link } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';
import logo from 'public/logo.svg';

function Header() {
  return (
    <header className="flex items-center justify-between sticky top-0 border-b bg-white">
      <img src={logo} alt="Dream 로고" className="p-2 w-14" />
      <nav className="flex gap-20">
        <Link to="/" aria-label="메인 페이지로 이동">
          메인
        </Link>
        <Link to="/Product" aria-label="상품 페이지로 이동">
          판매
        </Link>
        <Link to="/Exchange" aria-label="교환 페이지로 이동">
          교환
        </Link>
        <Link to="/Donation" aria-label="후원 페이지로 이동">
          후원
        </Link>
        <Link to="/News" aria-label="소식 페이지로 이동">
          소식
        </Link>
      </nav>

      <div className="flex flex-col gap-2">
        <div className="flex text-sm gap-2 pr-2">
          <Link to="/SignIn">로그인</Link>
          <Link to="/SignUp">회원가입</Link>
          <Link to="/SignIn">로그인</Link>
        </div>
      </div>

      <GlobalNavBar />
    </header>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';

function Header() {
  return (
    <header className="fixed w-full bg-white shadow-root z-50">
      <div className="max-w-[1440px] m-auto">
        <div className="flex items-start justify-end text-sm gap-2">
          <Link to="/SignUp">회원가입</Link>
          <Link to="/SignIn">로그인</Link>
        </div>
        <GlobalNavBar />
      </div>
    </header>
  );
}

export default Header;

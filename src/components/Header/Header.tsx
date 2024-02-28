import { Link } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';

function Header() {
  return (
    <header className="fixed w-full flex flex-col px-[5.25rem] bg-white shadow-root">
      <div className="flex text-sm gap-2 pt-1 justify-end">
        <Link to="/SignUp">회원가입</Link>
        <Link to="/SignIn">로그인</Link>
      </div>

      <GlobalNavBar />
    </header>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';

function Header() {
  return (
    <header className="fixed w-full flex flex-col gap-[26px] px-[84px] py-[31px]    bg-white ">
      <div className="flex gap-2 justify-end">
        <div className="flex text-sm gap-4 pr-2 ">
          <Link to="/SignUp">회원가입</Link>
          <Link to="/SignIn">로그인</Link>
        </div>
      </div>

      <GlobalNavBar />
    </header>
  );
}

export default Header;

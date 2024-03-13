import { Link } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';
import useLoginFormStore from '@/store/useLoginFormStore';
import Logout from './Logout';

function Header() {
  const { isLoggedIn } = useLoginFormStore();
  console.log('isLoggedIn   ', isLoggedIn);
  return (
    <header className="fixed w-full bg-white shadow-root z-30 p-1 bg-opacity-80 px-20">
      <div className="max-w-[90rem] m-auto">
        <div className="flex items-start justify-end text-sm gap-2">
          {!isLoggedIn && <Link to="/SignUp">회원가입</Link>}
          {isLoggedIn && <Link to="/Mypage">마이페이지</Link>}
          {isLoggedIn && <Logout />}
          {!isLoggedIn && <Link to="/SignIn">로그인</Link>}
        </div>
        <GlobalNavBar />
      </div>
    </header>
  );
}

export default Header;

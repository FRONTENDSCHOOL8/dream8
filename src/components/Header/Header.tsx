import { Link } from 'react-router-dom';
import GlobalNavBar from './GlobalNavBar';
import { useLoginFormStore } from '@/store/useLoginFormStore';

function Header() {
  const { isLoggedIn } = useLoginFormStore();
  console.log('isLoggedIn   ', isLoggedIn);
  return (
    <header className="fixed w-full bg-white shadow-root z-50">
      <div className="max-w-[1400px] m-auto">
        <div className="flex items-start justify-end text-sm gap-2">
          {isLoggedIn && <Link to="/SignUp">회원가입</Link>}
          {!isLoggedIn && <Link to="/SignIn">로그인</Link>}
        </div>
        <GlobalNavBar />
      </div>
    </header>
  );
}

export default Header;

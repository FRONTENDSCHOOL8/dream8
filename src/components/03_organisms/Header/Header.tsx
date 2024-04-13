import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GlobalNavBar from './GlobalNavBar';
import useLoginFormStore from '@/store/useLoginFormStore';
import Logout from './Logout';

function Header() {
  const { isLoggedIn } = useLoginFormStore();
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const { pathname } = useLocation();

  const isMainPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMainPage]);

  const handleHover = () => {
    setHeaderVisible(false);
  };

  const handleMouseLeave = () => {
    setHeaderVisible(true);
  };

  return (
    <header
      className={`hover: fixed w-full transition-colors duration-300 z-30 ${
        isHeaderVisible && isMainPage
          ? 'bg-transparent text-white'
          : 'bg-white text-black'
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[90rem] m-auto">
        <div className="flex items-start justify-end text-sm gap-2">
          {!isLoggedIn && (
            <Link
              to="/SignUp"
              className="hover:text-blue-primary hover:font-bold"
            >
              회원가입
            </Link>
          )}
          {isLoggedIn && (
            <Link
              to="/Mypage"
              className="hover:text-blue-primary hover:font-bold"
            >
              마이페이지
            </Link>
          )}
          {isLoggedIn && <Logout />}
          {!isLoggedIn && (
            <Link
              to="/SignIn"
              className="hover:text-blue-primary hover:font-bold"
            >
              로그인
            </Link>
          )}
        </div>
        <GlobalNavBar
          color={isHeaderVisible ? (isMainPage ? '#FFF' : '#000') : '#000'}
        />
      </div>
    </header>
  );
}

export default Header;

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GlobalNavBar from './GlobalNavBar';
import useLoginFormStore from '@/store/useLoginFormStore';
import Logout from './Logout';
import menu from 'public/menuberger.svg';
import logo from '/logo.svg';
import { MenuHamberger } from '@/components/svg/menuhamberger';
import Sidebar from '@/components/02_molecules/Sidebar/Sidebar';

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
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
  };

  return (
    <header
      className={`p-2 px-10 hover: fixed w-full transition-colors duration-300 z-30 ${
        isHeaderVisible && isMainPage
          ? 'bg-transparent text-white'
          : 'lg:bg-white text-black'
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[90rem] m-auto">
        <div className="hidden lg:flex items-start justify-end text-sm gap-2">
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
      <div className="lg:hidden p-2 py-5  flex items-center justify-between">
        <img src={logo} alt="Dream 로고" className="pb-2 " />
        <button type="button">
          <Sidebar />
        </button>
      </div>
    </header>
  );
}

export default Header;

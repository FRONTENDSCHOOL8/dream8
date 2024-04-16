import Logout from '@/components/03_organisms/Header/Logout';
import useLoginFormStore from '@/store/useLoginFormStore';
import { Link } from 'react-router-dom';

const LoginOut = () => {
  const { isLoggedIn } = useLoginFormStore();
  return (
    <div>
      <div className="flex flex-col items-start justify-end text-sm gap-2 whitespace-nowrap">
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
    </div>
  );
};

export default LoginOut;

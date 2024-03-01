import { Link } from 'react-router-dom';

function BeforeLogin() {
  return (
    <>
      <p>로그인 하시고 더 많은 중고거래를 확인하세요</p>
      <Link
        to="/SignIn"
        className="text-blue-100 underline font-semibold text-[1.2rem]"
      >
        로그인하러가기
      </Link>
    </>
  );
}

export default BeforeLogin;

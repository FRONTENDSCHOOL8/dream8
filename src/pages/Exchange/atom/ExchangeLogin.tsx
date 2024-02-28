import { Link } from 'react-router-dom';

function ExchangeLogin() {
  return (
    <Link to="/SignIn">
      <button className="text-blue-100 text-[1.1rem] underline tracking-[0.0225rem] font-semibold	">
        로그인하러가기
      </button>
    </Link>
  );
}

export default ExchangeLogin;

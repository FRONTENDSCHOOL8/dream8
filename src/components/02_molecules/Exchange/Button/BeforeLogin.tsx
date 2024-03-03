import Button from '@/components/01_atoms/Button/Button';
import { Link } from 'react-router-dom';

function BeforeLogin() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        type="button"
        className="rounded-md px-1 text-blue-primary border-blue-primary border hover:bg-blue-primary hover:text-white"
      >
        더보기
      </Button>
      <p>로그인 하시고 더 많은 중고거래를 확인하세요</p>
      <Link
        to="/SignIn"
        className="text-blue-100 underline font-semibold text-[1.2rem]"
      >
        로그인하러가기
      </Link>
    </div>
  );
}

export default BeforeLogin;

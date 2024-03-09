import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import alarmIcon from '/alarm.svg';
import mailIcon from '/mail.svg';
import Button from '@/components/01_atoms/Button/Button';

function GlobalNavBar() {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="Dream 로고" className="pb-2" />

      <nav className="flex gap-20 text-xl whitespace-nowrap">
        <Link
          to="/"
          aria-label="메인 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold "
        >
          메인
        </Link>
        <Link
          to="/Product"
          aria-label="상품 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold "
        >
          판매
        </Link>
        <Link
          to="/Exchange"
          aria-label="교환 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold "
        >
          교환
        </Link>
        <Link
          to="/Donation"
          aria-label="후원 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold "
        >
          후원
        </Link>
        <Link
          to="/News"
          aria-label="소식 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold "
        >
          소식
        </Link>
      </nav>

      <div className="flex justify-center gap-5 ">
        <Button ariaLabel="이메일로 이동" type="button">
          <img
            src={mailIcon}
            alt="이메일 아이콘"
            className="w-[30px] max-w-[30px]"
          />
        </Button>
        <Button ariaLabel="알람으로 이동" type="button">
          <img
            src={alarmIcon}
            alt="알람 아이콘"
            className="w-[30px] max-w-[30px]"
          />
        </Button>
      </div>
    </div>
  );
}

export default GlobalNavBar;

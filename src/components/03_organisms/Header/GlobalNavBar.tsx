import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import alarmIcon from '/alarm.svg';
import mailIcon from '/mail.svg';
import Button from '@/components/01_atoms/Button/Button';
import { useState } from 'react';
import useCountStore from '@/store/useCountStore';
import NotificationCommon from './Notification/NotificationCommon';
import { Dialog, Transition } from '@headlessui/react';
import { Alarm } from '@/components/svg/alarm';
import { Mail } from '@/components/svg/mail';

export type GlobalNavBar = {
  color?: string;
};

function GlobalNavBar({ color }: GlobalNavBar) {
  const { count } = useCountStore();
  const [isOpen, setOpen] = useState(false);
  const { resetCount } = useCountStore();

  const handleNotificationClick = () => {
    setOpen((prevState) => !prevState);
    resetCount();
  };

  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="Dream 로고" className="pb-2" />

      <nav className="flex gap-20 text-xl whitespace-nowrap">
        <Link
          to="/"
          aria-label="메인 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          메인
        </Link>
        <Link
          to="/Product"
          aria-label="상품 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          판매
        </Link>
        <Link
          to="/Exchange"
          aria-label="교환 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          교환
        </Link>
        <Link
          to="/Donation"
          aria-label="후원 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          후원
        </Link>
        <Link
          to="/News"
          aria-label="소식 페이지로 이동"
          className="hover:text-blue-primary hover:font-bold"
        >
          소식
        </Link>
      </nav>

      <div className="flex justify-center gap-5">
        <Button ariaLabel="이메일로 이동" type="button">
          {/* <img
            src={mailIcon}
            alt="이메일 아이콘"
            className="w-[30px] max-w-[30px]"
          /> */}
          <Mail color={color} />
        </Button>
        <Button
          ariaLabel="알람으로 이동"
          type="button"
          className="relative"
          onClick={handleNotificationClick}
        >
          {/* <img
            src={alarmIcon}
            alt="알람 아이콘"
            className=" w-[30px] max-w-[30px]"
          /> */}
          <Alarm color={color} />
          {count > 0 && (
            <div className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 rounded-full text-white flex items-center justify-center text-xs">
              {count}
            </div>
          )}
        </Button>
      </div>

      {isOpen && (
        <Dialog
          as="div"
          open={isOpen}
          onClose={setOpen}
          className="fixed inset-0 bg-black opacity-50"
          // onClick={handleNotificationClose}
        >
          <Dialog.Panel>
            <NotificationCommon

            // onClose={handleBackgroundClick}
            />
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}

export default GlobalNavBar;

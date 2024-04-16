import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.svg';
import alarmIcon from '/alarm.svg';
import mailIcon from '/mail.svg';
import Button from '@/components/01_atoms/Button/Button';
import { useState, useEffect } from 'react';
import useCountStore from '@/store/useCountStore';
import NotificationCommon from './Notification/NotificationCommon';
import { Dialog, Transition } from '@headlessui/react';
import { Alarm } from '@/components/svg/alarm';
import { Mail } from '@/components/svg/mail';
import GlobalMenu from '@/components/02_molecules/GlobalMenu/GlobalMenu';

export type GlobalNavBar = {
  color?: string;
};

function GlobalNavBar({ color }: GlobalNavBar) {
  const { count } = useCountStore();
  const [isOpen, setOpen] = useState(false);
  const { resetCount } = useCountStore();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNotificationClick = () => {
    setOpen((prevState) => !prevState);
    resetCount();
  };

  return (
    <div className="hidden lg:flex items-center justify-between">
      <img src={logo} alt="Dream 로고" className="pb-2" />

      <GlobalMenu direction={''} />

      <div className="flex justify-center gap-5">
        <Button ariaLabel="이메일로 이동" type="button">
          <Mail color={color} />
        </Button>
        <Button
          ariaLabel="알람으로 이동"
          type="button"
          className="relative"
          onClick={handleNotificationClick}
        >
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
        >
          <Dialog.Panel>
            <NotificationCommon />
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}

export default GlobalNavBar;

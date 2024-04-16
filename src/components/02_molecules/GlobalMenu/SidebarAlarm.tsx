import Button from '@/components/01_atoms/Button/Button';
import NotificationCommon from '@/components/03_organisms/Header/Notification/NotificationCommon';
import { Alarm } from '@/components/svg/alarm';
import { Mail } from '@/components/svg/mail';
import useCountStore from '@/store/useCountStore';
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';

const SidebarAlarm = () => {
  const { count } = useCountStore();
  const [isOpen, setOpen] = useState(false);
  const { resetCount } = useCountStore();
  const color = '#FFF';

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNotificationClick = () => {
    setOpen((prevState) => !prevState);
    resetCount();
  };
  return (
    <>
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
    </>
  );
};

export default SidebarAlarm;

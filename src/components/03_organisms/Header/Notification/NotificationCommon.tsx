import { createPortal } from 'react-dom';
import CommonLayout from './components/CommonLayout';
import LoginCheckLayout from './components/LoginCheckLayout';
import useLoginFormStore from '@/store/useLoginFormStore';
import logo from '/logo.svg';
import { useId } from 'react';
import FocusLock from 'react-focus-lock';

function NotificationCommon({ noticeList }) {
  const { userInfo, isLoggedIn } = useLoginFormStore();
  const uniquId = useId();
  console.log('noticeList   ', noticeList);
  return createPortal(
    <FocusLock>
      {/* <section className="background w-full h-full fixed top-0 left-0 bg-black-100 bg-opacity-50 flex justify-center items-center z-40 "> */}
      <div className=" min-w-[20rem] h-[30rem] rounded-b-3xl overflow-hidden fixed top-20  right-0 shadow-2xl bg-gray-200 overflow-y-auto  z-40 ">
        <h2 className="sr-only">일반 알림창</h2>
        <div className="flex flex-col">
          <div className="bg-white text-center p-12 text-xl font-semibold">
            {'알림'}
          </div>
          <div className=" p-5 flex flex-col gap-3 ">
            <LoginCheckLayout isLoggedIn={isLoggedIn} />
            {isLoggedIn &&
              noticeList?.map((item, index) => {
                console.log('item dddd ', item);
                return (
                  <CommonLayout
                    // key={`${uniquId}-${index}`}
                    key={item.id}
                    id={item.id}
                    src={'' || logo}
                    alt={item.title}
                    title={item.description}
                    isComplete={item.isComplete}
                  />
                );
              })}
          </div>
        </div>
      </div>
      {/* </section> */}
    </FocusLock>,
    document.body
  );
}

export default NotificationCommon;

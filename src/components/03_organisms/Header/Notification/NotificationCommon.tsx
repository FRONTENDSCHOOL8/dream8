import { createPortal } from 'react-dom';
import CommonLayout from './components/CommonLayout';
import LoginCheckLayout from './components/LoginCheckLayout';
import useLoginFormStore from '@/store/useLoginFormStore';
import logo from '/logo.svg';
import { useEffect, useId, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { currentUser, pb } from '@/api/pocketbase';

function NotificationCommon({ noticeList }) {
  const { userInfo, isLoggedIn } = useLoginFormStore();
  const uniquId = useId();
  console.log('noticeList   ', noticeList);

  const [allNotice, setAllNotice] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getAllNotification();

    setAllNotice(data);

    const unsubscribe = pb
      .collection('notification')
      .subscribe('*', async () => {
        // const updatedChats = await getChatWithUsers();
        const data = await getAllNotification();

        setAllNotice(data);

        return () => {
          pb.collection('notification').unsubscribe('*');
          unsubscribe;
        };
      });
  };
  console.log('allNotice   ', allNotice);
  //notification collection 모든 정보 가져오기
  const getAllNotification = async () => {
    try {
      if (!currentUser || !currentUser.id) {
        return []; // currentUser가 없거나 id가 null인 경우 빈 배열 반환
      }

      const response = await pb.collection('notification').getFullList({
        // sort: 'created',
        expand: 'userId',
        // filter: `userId  ~ ${currentUser.id}`,

        //  "users" 컬렉션에서 현재 사용자의 ID를 포함하는 항목을 찾는 것을 나타냅니다.
      });
      // console.log('사용자의 ID를 포함하는 항목  ', response);
      const allDataOfUser = response?.map((item) => {
        console.log('item   ', item);
        if (item.expand?.userId.user_name === currentUser?.user_name)
          return item;
      });
      console.log('사용자의 ID를 포함하는 항목  ', allDataOfUser);

      return allDataOfUser;
    } catch (error) {
      console.log('error', error);
    }
  };

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
              allNotice?.map((item, index) => {
                // console.log('item dddd ', item);
                return (
                  <CommonLayout
                    // key={`${uniquId}-${index}`}
                    key={item.id}
                    id={item.id}
                    src={'' || logo}
                    alt={item.title}
                    title={item.description}
                    isComplete={item.isComplete}
                    userId={item.userId}
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

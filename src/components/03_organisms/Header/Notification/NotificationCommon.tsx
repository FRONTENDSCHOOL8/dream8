import { createPortal } from 'react-dom';
import CommonLayout from './components/CommonLayout';
import LoginCheckLayout from './components/LoginCheckLayout';
import useLoginFormStore from '@/store/useLoginFormStore';
import logo from '/logo.svg';
import { useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { currentUser, pb } from '@/api/pocketbase';
import { getPbImage } from '@/utils/getPbImage';
import NothingNotification from './components/NothingNotification';

function NotificationCommon() {
  const { userInfo, isLoggedIn } = useLoginFormStore();
  const [loading, setLoading] = useState(true);
  const [allNotice, setAllNotice] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    getAllNotification()
      .then((data) => {
        setLoading(false);
        setAllNotice(data);
      })
      .catch((error) => {
        console.log('error', error);
        setLoading(false);
      });
  };

  const getAllNotification = async () => {
    try {
      const response = await pb.collection('notification').getFullList({
        expand: 'userId',
      });

      const allDataOfUser = response
        ?.map((item) => {
          if (item.expand?.userId.user_name === userInfo?.user_name) {
            return item;
          }
        })
        .filter((item) => item !== undefined);
      return allDataOfUser;
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleDelete = async () => {
    try {
      fetchData(); // 알림 삭제 후 새로고침
    } catch (error) {
      console.log('error', error);
    }
  };

  return createPortal(
    <FocusLock>
      <div className="w-[20rem] lg:w-[25rem] xxl:w-[30rem]  max-h-[30rem] rounded-b-3xl overflow-hidden fixed top-20 right-0 shadow-2xl bg-gray-200 overflow-y-auto z-40">
        <h2 className="sr-only">일반 알림창</h2>
        <div className="flex flex-col">
          <div className="sticky top-0 z-50 bg-white text-center p-12 text-xl font-semibold">
            {'알림'}
          </div>
          <div className="p-5 flex flex-col gap-3">
            <NothingNotification isData={allNotice} />
            <LoginCheckLayout isLoggedIn={isLoggedIn} />
            {!loading &&
              isLoggedIn &&
              allNotice?.map((item) => {
                if (!item || !item.id) {
                  return null;
                }
                let photo = '';
                if (item?.photo) {
                  photo = getPbImage(item?.collectionId, item?.id, item?.photo);
                } else {
                  photo = logo;
                }
                return (
                  <CommonLayout
                    key={item.id}
                    id={item.id}
                    src={photo}
                    alt={item.title}
                    title={item.title || ''}
                    description={item.description || ''}
                    isComplete={item.isComplete}
                    type={item.type}
                    onDelete={handleDelete} // 삭제 이벤트 핸들러 전달
                  />
                );
              })}
          </div>
        </div>
      </div>
    </FocusLock>,
    document.body
  );
}

export default NotificationCommon;

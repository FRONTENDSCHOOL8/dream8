import { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button01 from '@/components/01_atoms/Button/Button01';
import Close from '/close.svg';
import Send from '/send.svg';
import useLoginFormStore from '@/store/useLoginFormStore';
import { pb } from '@/api/pocketbase';
import User from '@/components/02_molecules/Exchange/User/User';
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';

function Chat() {
  const metaTagData = {
    // 변수 이름을 metaTagData로 변경
    title: '채팅 페이지',
    pageDescription: '드림의 채팅 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: 'Chat/:id',
  };

  const { id } = useParams();

  const navigate = useNavigate();
  const { userInfo } = useLoginFormStore();
  const [chatRoom, setChatRoom] = useState([]);
  const [chatMessage, setChatMessage] = useState([]);
  const [inputText, setInputText] = useState('');
  const [otherUser, setOtherUser] = useState([]);
  const [chatMessageList, setChatMessageList] = useState([]);
  const [chatRoomUsersCount, setChatRoomUsersCount] = useState(0);

  useLayoutEffect(() => {
    // 채팅룸 ID
    let chatRoomId = '';

    // 채팅룸 연결 함수
    const connectChatRoom = async () => {
      // 채팅룸 정보 가져오기
      const chatRoom = await pb
        .collection('chat_room')
        .getFirstListItem(`field='${id}'`);

      // 채팅룸이 존재할 경우
      if (chatRoom) {
        // 채팅룸 ID 설정
        chatRoomId = chatRoom.id;

        // 채팅룸 접속자 수
        const usersCount = chatRoom.users.length;

        // 채팅룸 접속자 수가 1보다 작거나 같다면
        if (usersCount <= 1) {
          // 현재 로그인한 사용자를 채팅룸 접속자로 추가
          await pb.collection('chat_room').update(chatRoomId, {
            'users+': userInfo.id,
          });
          // 채팅룸 접속자 수 + 1
          setChatRoomUsersCount(usersCount + 1);

          // 채팅룸 구독
          pb.collection('chat_room').subscribe(chatRoomId, (e) => {
            // 채팅룸 접속자 수
            const nextUsersCount = e.record.users.length;
            // 채팅룸 접속자 수 설정
            setChatRoomUsersCount(nextUsersCount);
          });
        }
        // 채팅룸 접속자 수가 2보다 크다면
        else {
          // 사용자에게 알림
          alert('채팅 인원(2명)이 모두 찼습니다. 채팅 이용이 불가능합니다.');
          // 교환 페이지로 이동
          navigate('/exchange');
        }
      }
    };

    // 채팅룸 연결 해제 함수
    const disconnectChatRoom = async () => {
      // 로그인 사용자가 페이지를 떠나므로 채팅룸 사용자에서 제거
      await pb.collection('chat_room').update(chatRoomId, {
        'users-': userInfo.id,
      });
      // 채팅룸 접속자 수 - 1
      setChatRoomUsersCount((c) => c - 1);
      // 채팅룸 구독 취소
      pb.collection('chat_room').unsubscribe(chatRoomId);
    };

    // 채팅 룸 연결
    connectChatRoom();
    setChatRoom(chatRoom);

    return () => {
      // 채팅 룸 연결 해제
      disconnectChatRoom();
    };
  }, [id, navigate, userInfo.id]);

  const handleMessageSend = async (e) => {
    e.preventDefault();

    const chatRoom = await pb
      .collection('chat_room')
      .getFirstListItem(`field='${id}'`);

    console.log(chatRoom);

    const chatList = await pb
      .collection('chat_message')
      .getList(1, 15, { filter: `field='${id}'` });

    const chat_roomData = {
      field: id,
      users: [userInfo.id, otherUser],
    };

    await pb.collection('chat_room').create(chat_roomData);

    const messageData = {
      message: inputText,
      sender: userInfo.id,
      chat_room: chatRoom.id,
    };

    setChatMessage(messageData);
    setChatMessageList(chatList);

    await pb.collection('chat_message').create(messageData);

    setInputText('');
  };

  console.log(chatMessageList);

  return (
    <div className="pt-14">
      <MetaTag metaTag={metaTagData} />
      <div className="w-[45rem] border h-[45rem] flex flex-col m-auto mt-14 mb-10 rounded-3xl">
        <header className="h-[5rem] w-full bg-gray-700 rounded-t-3xl flex items-center">
          <h1 className="flex items-center m-auto text-xl">{}</h1>
          <Button01
            type="button"
            className="p-0 h-10 w-10 bg-gray-700 border-none pr-4"
            onClick={() => navigate(-1)}
          >
            <img src={Close} alt="Close" />
          </Button01>
        </header>
        <main className="w-full border h-[35rem] overflow-y-auto">
          <div className="flex flex-col pt-4">
            <h1>현재 사용자수 : {chatRoomUsersCount}</h1>
            <div className="flex flex-col gap-4">
              {/* {chatMessage.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    message.sender.expand?.sender.id === userInfo.id
                      ? 'flex-row-reverse'
                      : 'justify-start'
                  }`}
                >
                  <User />
                  <div className="bg-gray-700 w-64 flex items-center h-10 rounded-xl pl-2">
                    {message.message}
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </main>
        <footer className="w-full h-[5rem] flex items-center justify-center">
          <form className="flex gap-4" onSubmit={handleMessageSend}>
            <input
              type="text"
              className="flex w-[30rem] h-[3rem] bg-gray-700 rounded-2xl pl-4 text-xl"
              placeholder="메세지 보내기"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button01 type="submit" className="p-0 w-10 border-none">
              <img src={Send} alt="Send" />
            </Button01>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default Chat;

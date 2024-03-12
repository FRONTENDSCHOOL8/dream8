import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button01 from '@/components/01_atoms/Button/Button01';
import Close from '/close.svg';
import Send from '/send.svg';
import useLoginFormStore from '@/store/useLoginFormStore';
import { pb } from '@/api/pocketbase';
import User from '@/components/02_molecules/Exchange/User/User';

function Chat() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { userInfo } = useLoginFormStore();

  const [chatRoom, setChatRoom] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [chatMessage, setChatMessage] = useState([]);
  const [inputText, setInputText] = useState('');
  const [otherUser, setOtherUser] = useState([]);

  useEffect(() => {
    // 교환 항목 별, 메시지 가져오기
    const getChatList = async () => {
      // 10개 메시지 목록 가져오기
      const chatMessages = await pb.collection('chat_message').getList(1, 10, {
        // 현재 교환 상품과 일치하는 레코드만 필터링
        // 사용자 정보 확장
        expand: 'sender, chat_room',
      });

      const resultList = await pb.collection('chat_room').getList(1, 50);
      setChatRoom(resultList);

      // 메시지 목록 업데이트
      const nextMessages = chatMessages.items.map((item) => ({
        id: item.id,
        message: item.message,
        sender: item,
        chat_room: item,
        created: item.created,
      }));

      const writeUser = await pb
        .collection('exchange')
        .getOne(id, { expand: 'field' });

      const otherUsers = writeUser.expand?.field.id;

      const currentPage = writeUser.id;

      setCurrentPage(currentPage);

      setChatMessage(nextMessages);

      setOtherUser(otherUsers);
    };

    getChatList();

    pb.collection('chat_message').subscribe('*', (e) => {
      // 레코드의 exchange 값이 현재 교환 상품 ID와 일치하는 경우에만 화면 업데이트
      if (e.action === 'create' && e.record.chat_message === id) {
        const { id, message, sender, chat_room, created } = e.record;
        setChatMessage((prevMessages) => [
          ...prevMessages,
          {
            id,
            sender,
            message,
            chat_room,
            created,
          },
        ]);
      }
    });

    return () => {
      pb.collection('chat_message').unsubscribe('*');
    };
  }, []);

  const handleMessageSend = async (e) => {
    e.preventDefault();

    const chatRoomId = chatMessage.map(
      (item) => item.chat_room.expand?.chat_room.id
    );

    const chat_roomData = {
      field: id,
      users: [userInfo.id, otherUser],
    };

    await pb.collection('chat_room').create(chat_roomData);

    const messageData = {
      message: inputText,
      sender: userInfo.id,
      chat_room: chatRoomId,
    };

    await pb.collection('chat_message').create(messageData);

    setInputText('');
  };

  return (
    <div className="w-[45rem] border h-[45rem] flex flex-col m-auto mt-14 mb-10 rounded-3xl">
      <header className="h-[5rem] w-full bg-gray-700 rounded-t-3xl flex items-center">
        <h1 className="flex items-center m-auto text-xl"></h1>
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
          <div className="flex flex-col gap-4">
            {chatMessage.map((message, index) => (
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
            ))}
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
  );
}

export default Chat;

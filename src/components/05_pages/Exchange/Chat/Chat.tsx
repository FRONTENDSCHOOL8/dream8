import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { pb } from '@/api/pocketbase';
import Button01 from '@/components/01_atoms/Button/Button01';
import Close from '/close.svg';
import Send from '/send.svg';
import useLoginFormStore from '@/store/useLoginFormStore';
import User from '@/components/02_molecules/Exchange/User/User';

function Chat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useLoginFormStore();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [others, setOthers] = useState(null);

  const currentUser = userInfo;

  useEffect(() => {
    pb.collection('chat').subscribe('*', (e) => {
      setMessages((prevMessages) => [...prevMessages, e.record]);
    });

    const fetchOtherUser = async () => {
      try {
        const otherUser = await pb
          .collection('exchange')
          .getOne(id, { expand: 'field' });
        setOthers(otherUser.expand?.field);
      } catch (error) {
        console.error('Error fetching other user:', error);
      }
    };

    fetchOtherUser();

    return () => {
      pb.collection('chat').unsubscribe(id);
    };
  }, [id]);

  const handleMessageSend = async (e) => {
    e.preventDefault();

    if (!others) {
      console.error('Other user information not available');
      return;
    }

    const messageData = {
      users: [currentUser.id, others.id],
      message: inputText,
    };

    await pb.collection('chat').create(messageData);
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
        <div className="flex flex-col pt-4 gap-6">
          <div>
            {messages.map((message, index) => (
              <div key={index}>
                <User
                  userName={
                    message.senderId === currentUser.id
                      ? currentUser.user_name
                      : others?.user_name
                  }
                ></User>
                <div>{message.message}</div>
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

import { Link } from 'react-router-dom';

interface ButtonName {
  name: string;
}

function ChatButton({ name }: ButtonName) {
  return (
    <Link to="/ExchangeWrite">
      <button
        aria-label="채팅하기 버튼"
        className=" text-blue-primary border-2 border-blue-primary px-32 py-1 rounded-[5px] hover:bg-blue-primary hover:text-white"
      >
        {name}
      </button>
    </Link>
  );
}

export default ChatButton;

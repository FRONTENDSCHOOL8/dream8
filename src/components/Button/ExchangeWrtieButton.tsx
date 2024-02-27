import { Link } from 'react-router-dom';

interface ButtonName {
  name: string;
}

function ExchangeWriteButton({ name }: ButtonName) {
  return (
    <Link to="/ExchangeWrite">
      <button
        aria-label="게시글 작성 버튼"
        className=" text-blue-primary border-2 border-blue-primary px-3 rounded-[5px] hover:bg-blue-primary hover:text-white"
      >
        {name}
      </button>
    </Link>
  );
}

export default ExchangeWriteButton;

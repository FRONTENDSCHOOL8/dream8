import { useLoginFormStore } from '@/store/useLoginFormStore';
import { Link } from 'react-router-dom';

interface ButtonName {
  name: string;
}

function ExchangeWriteButton({ name }: ButtonName) {
  const { isLoggedIn } = useLoginFormStore();

  return isLoggedIn ? (
    <Link to="/ExchangeWrite">
      <button
        aria-label="게시글 작성 버튼 "
        className=" text-blue-primary border-2 border-blue-primary px-3 rounded-[5px] hover:bg-blue-primary hover:text-white"
      >
        {name}
      </button>
    </Link>
  ) : (
    <Link to="/SignIn">
      <button
        aria-label="게시글 작성 버튼 "
        className=" text-blue-primary border-2 border-blue-primary px-3 rounded-[5px] hover:bg-blue-primary hover:text-white"
      >
        {name}
      </button>
    </Link>
  );
}

export default ExchangeWriteButton;

import { useLoginFormStore } from '@/store/useLoginFormStore';
import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';

interface MaxProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function MoreButton({ onClick }: MaxProps) {
  const { isLoggedIn } = useLoginFormStore();

  return (
    <>
      {!isLoggedIn ? (
        <Link to={'/SignIn'}>
          <button className="text-blue-primary text-[1.1rem] rounded-[0.3125rem] flex justify-center items-center border-2 px-2 border-blue-primary hover:bg-blue-primary hover:text-white">
            더보기
          </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="text-blue-primary text-[1.1rem] rounded-[0.3125rem] flex justify-center items-center border-2 px-2 border-blue-primary hover:bg-blue-primary hover:text-white"
        >
          더보기
        </button>
      )}
    </>
  );
}

export default MoreButton;

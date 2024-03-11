import Button01 from '@/components/01_atoms/Button/Button01';
import Close from '/close.svg';
import Send from '/send.svg';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

function Chat() {
  const navigate = useNavigate();

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-[45rem] border h-[45rem] flex flex-col m-auto mt-14 mb-10 rounded-3xl">
        <header className="h-[5rem] w-full bg-gray-700 rounded-t-3xl flex items-center">
          <h1 className="flex items-center m-auto text-xl">사용자 이름</h1>
          <Button01
            type="button"
            className="p-0 h-10 w-10 bg-gray-700 border-none pr-4"
            onClick={() => navigate(-1)}
          >
            <img src={Close} />
          </Button01>
        </header>
        <main className="w-full border h-[35rem]"></main>
        <footer className="w-full h-[5rem] flex items-center justify-center">
          <form className="flex gap-4">
            <input
              type="text"
              className="flex w-[30rem] h-[3rem] bg-gray-700 rounded-2xl pl-4 text-xl"
              placeholder="메세지 보내기"
            />
            <Button01
              type="submit"
              className="p-0 w-10 border-none"
              onClick={handleClick}
            >
              <img src={Send} />
            </Button01>
          </form>
        </footer>
      </div>
    </>
  );
}

export default Chat;

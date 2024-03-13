import { useNavigate } from 'react-router-dom';

interface LoginCheckLayout {
  isLoggedIn: boolean;
}

const LoginCheckLayout = ({ isLoggedIn }: LoginCheckLayout) => {
  const navigation = useNavigate();
  const handleMovePage = () => {
    navigation('/SignIn');
  };
  return (
    <>
      {!isLoggedIn ? (
        <section className="flex flex-col gap-10 justify-center items-center w-full bg-white p-10 rounded-lg">
          <p className="text-lg">알림을 확인하려면 로그인을 진행해주세요</p>
          <button
            className="text-blue-primary text-base"
            onClick={handleMovePage}
          >
            로그인하러가기
          </button>
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default LoginCheckLayout;

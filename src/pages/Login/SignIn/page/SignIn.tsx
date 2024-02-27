import facebook from 'public/facebook-icon.svg';
import kakao from 'public/kakao-icon.svg';
import google from 'public/google-icon.svg';
import { kakaoURL } from '@/api/SocialKakao';

function SignIn() {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <section className="py-[25%] flex justify-center items-center">
      <h2 className="sr-only">로그인페이지</h2>

      <div className="flex flex-col justify-center gap-10 border rounded-2xl w-[970px] h-[728px] stroke-3.64 stroke-gray-400 items-center">
        <h2 className="text-5xl">로그인</h2>
        <button
          aria-label="Google 로그인 버튼"
          className="relative flex  text-center rounded-xl border w-[458px] h-[60.7px]"
        >
          <img
            src={google}
            alt="구글 로그인 아이콘"
            className="absolute top-3 left-3"
          />
          <span className="m-auto text-2xl">Google 로그인</span>
        </button>
        <button
          aria-label="Kakao 로그인 버튼"
          className="relative flex text-center bg-yellow-300 rounded-xl w-[458px] h-[60.7px]"
          onClick={handleKakaoLogin}
        >
          <img
            src={kakao}
            alt="카카오톡 로그인 아이콘"
            className="absolute top-3 left-3"
          />
          <span className="m-auto text-2xl"> Kakao 로그인</span>
        </button>
        <button
          aria-label="페이스북 로그인 버튼"
          className="relative flex text-center bg-blue-600 rounded-xl w-[458px] h-[60.7px]"
        >
          <img
            src={facebook}
            alt="페이스북 로그인 아이콘"
            className="absolute top-3 left-3"
          />
          <span className="m-auto text-2xl"> 페이스북 로그인</span>
        </button>
      </div>
    </section>
  );
}

export default SignIn;

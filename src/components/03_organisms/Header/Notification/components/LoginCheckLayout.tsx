interface LoginCheckLayout {
  isLoggedIn: boolean;
}

const LoginCheckLayout = ({ isLoggedIn }: LoginCheckLayout) => {
  return (
    <>
      {!isLoggedIn ? (
        <section className="flex flex-col gap-10 justify-center items-center w-full bg-white p-10 rounded-lg">
          <p className="text-lg">알림을 확인하려면 로그인을 진행해주세요</p>
          <span className="text-blue-primary text-base">로그인하러가기</span>
        </section>
      ) : (
        ''
      )}
    </>
  );
};

export default LoginCheckLayout;

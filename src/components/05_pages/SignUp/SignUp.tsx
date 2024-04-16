import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';
import SignUpInput from '@/components/02_molecules/SignUp/SignUpInput';

function SignUp() {
  const metaTag = {
    title: '회원가입 페이지',
    pageDescription: '드림의 회원가입 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: 'SignUp',
  };
  return (
    <section className="py-14 lg:py-36">
      <MetaTag metaTag={metaTag} />
      <div className="flex flex-col gap-10 items-center justify-center  w-[80%] lg:w-[800px]  m-auto py-20 lg:border border-gray-200 rounded-[50px]">
        <h2 className="text-3xl md:text-5xl">회원가입</h2>
        <SignUpInput />
      </div>
    </section>
  );
}
// md:w-[40rem] xl:w-[64rem]
export default SignUp;

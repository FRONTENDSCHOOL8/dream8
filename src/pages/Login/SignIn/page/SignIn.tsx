import React from 'react';
import SignInForm from '@/pages/Login/SignIn/atoms/SignInForm';
import SocialLoginButtons from '@/pages/Login/SignIn/molecules/SocialLoginButtons';

const SignInPage: React.FC = () => {
  return (
    <section className="py-[10%] flex justify-center items-center">
      <h2 className="sr-only">로그인페이지</h2>

      <div className="flex  flex-col justify-center gap-10 border rounded-2xl w-[60.62rem] py-20  stroke-3.64 stroke-gray-400 items-center">
        <h2 className="text-5xl">로그인</h2>

        <SignInForm />
        <div className="border w-[28.625rem]"> </div>
        <SocialLoginButtons />
      </div>
    </section>
  );
};

export default SignInPage;

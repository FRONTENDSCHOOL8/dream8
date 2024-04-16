import React from 'react';
import SignInForm from '@/components/02_molecules/SignIn/SignInForm';
import SocialLoginButtons from '@/components/03_organisms/SignIn/SocialLoginButtons';

const SignInTemplates: React.FC = () => {
  return (
    <div className="flex   justify-center  rounded-2xl lg:border w-[80%] lg:w-[800px] py-20  stroke-3.64 stroke-gray-400 items-center">
      <div className="flex w-[70%] flex-col items-center gap-10">
        <h2 className="text-3xl md:text-5xl">로그인</h2>

        <SignInForm />
        <div className="border w-full"> </div>
        <SocialLoginButtons />
        {/* sns로그인은 추후 개발 */}
      </div>
    </div>
  );
};

export default SignInTemplates;

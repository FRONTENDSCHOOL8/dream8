import React from 'react';
import SignInForm from '@/components/02_molecules/SignIn/SignInForm';
import SocialLoginButtons from '@/components/03_organisms/SignIn/SocialLoginButtons';

const SignInTemplates: React.FC = () => {
  return (
    <div className="flex   justify-center  border rounded-2xl w-[50.62rem] py-20  stroke-3.64 stroke-gray-400 items-center">
      <div className="flex  flex-col items-center gap-10">
        <h2 className="text-5xl">로그인</h2>

        <SignInForm />
        <div className="border w-full"> </div>
        <SocialLoginButtons />
      </div>
    </div>
  );
};

export default SignInTemplates;

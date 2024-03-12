import React from 'react';

import SignInTemplates from '@/components/04_templates/SignIn/SignInTemplates';
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';

const SignInPage: React.FC = () => {
  const metaTag = {
    title: '로그인 페이지',
    pageDescription: '드림의 로그인 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: 'SignIn',
  };
  return (
    <section className="py-36 flex justify-center items-center ">
      <MetaTag metaTag={metaTag} />
      <h2 className="sr-only">로그인페이지</h2>

      <SignInTemplates></SignInTemplates>
    </section>
  );
};

export default SignInPage;

import React from 'react';

import SignInTemplates from '@/components/04_templates/SignIn/SignInTemplates';

const SignInPage: React.FC = () => {
  return (
    <section className="py-[10%] flex justify-center items-center">
      <h2 className="sr-only">로그인페이지</h2>

      <SignInTemplates></SignInTemplates>
    </section>
  );
};

export default SignInPage;

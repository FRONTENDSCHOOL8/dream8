import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Fragment } from 'react';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

function RootLayout() {
  const { state } = useNavigation();
  return (
    <div>
      <Header />
<<<<<<< HEAD
      <GlobalNavBar />
      <main className="w-full">
=======
      <main className="w-full pt-20">
>>>>>>> develop
        RootLayout 페이지입니다.
        {state === 'loading' ? '로딩중입니다~~' : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Fragment } from 'react';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

function RootLayout() {
  const { state } = useNavigation();
  return (
    <div>
      <Header />
      <main className="w-full pt-20">
        {state === 'loading' ? '로딩중입니다~~' : <Outlet />}
      </main>
      <Footer />
    </div>
  );
  ㅋ;
}

export default RootLayout;

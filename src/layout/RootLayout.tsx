import Footer from '@/components/Footer/Footer';
import GlobalNavBar from '@/components/Header/GlobalNavBar';
import Header from '@/components/Header/Header';
import { Fragment } from 'react';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

function RootLayout() {
  const { state } = useNavigation();
  return (
    <Fragment>
      <Header />
      <main className="w-full">
        RootLayout 페이지입니다.
        {state === 'loading' ? '로딩중입니다~~' : <Outlet />}
      </main>
      <Footer />
    </Fragment>
  );
}

export default RootLayout;

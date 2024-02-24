import Footer from '@/components/Footer/Footer';
import GlobalNavBar from '@/components/Header/GlobalNavBar';
import Header from '@/components/Header/Header';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

function RootLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Header />
      <GlobalNavBar />
      <main className="w-full bg-red-300">
        RootLayout 페이지입니다.
        {state === 'loading' ? '로딩중입니다~~' : <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

function RootLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Header />
      <main className="w-full">
        {state === 'loading' ? '로딩중입니다~~' : <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
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
}

export default RootLayout;
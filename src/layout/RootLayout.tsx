import Header from '@/components/03_organisms/Header/Header';
import Footer from '@/components/03_organisms/Footer/Footer';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

function RootLayout() {
  const { state } = useNavigation();

  ScrollToTop();

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

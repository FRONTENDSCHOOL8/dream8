import Header from '@/components/03_organisms/Header/Header';
import Footer from '@/components/03_organisms/Footer/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { LoadingSpinner } from '@/components/Loading/Loading';
import GoToTop from '@/components/01_atoms/GoToTop/GoToTop';

function RootLayout() {
  const { state } = useNavigation();

  ScrollToTop();

  return (
    <div>
      <Header />
      <main className="w-full pt-20">
        {state === 'loading' ? <LoadingSpinner /> : <Outlet />}
      </main>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default RootLayout;

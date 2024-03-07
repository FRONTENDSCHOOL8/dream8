import Header from '@/components/03_organisms/Header/Header';
import Footer from '@/components/03_organisms/Footer/Footer';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import { LoadingSpinner } from '@/components/Loading/Loading';

function RootLayout() {
  const { state } = useNavigation();
  return (
    <div>
      <Header />
      <main className="w-full pt-20">
        {state === 'loading' ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;

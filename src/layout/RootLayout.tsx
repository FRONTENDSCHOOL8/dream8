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
      <div className="skip_nav fixed z-50 p-5">
        <a href="/Product" className="  skipToContent">
          판매 페이지 바로가기
        </a>
        <a href="/Exchange" className="skipToContent">
          교환 페이지 바로가기
        </a>
        <a href="/Donation" className="skipToContent">
          후원 페이지 바로가기
        </a>
        <a href="/News" className="skipToContent">
          소식 페이지 바로가기
        </a>
      </div>
      <Header />
      <main className="w-full">
        {state === 'loading' ? <LoadingSpinner /> : <Outlet />}
      </main>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default RootLayout;

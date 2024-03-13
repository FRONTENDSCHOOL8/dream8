import { useEffect } from "react";
import HomeContents from "../../04_templates/Home/HomeContents";
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';

function Home() {
  const metaTag = {
    title: '드림상점',
    pageDescription: '드림의 메인 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: '/',
  };
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    }
  }, []);

  return (
    <>
      <MetaTag metaTag={metaTag} />
      <div className="overflow-hidden">
        <HomeContents />
      </div>
    </>
  );
}

export default Home;

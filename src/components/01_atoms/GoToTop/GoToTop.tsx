import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopScroll from '/arrow-up.svg';

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkVisibility = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const footerHeight = 150;
      const showValue = pageHeight - viewportHeight - footerHeight;

      if (scrollPosition > showValue) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    // 페이지 이동 시 리스너 제거
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [location]);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <div className="fixed right-20 bottom-72 w-12 h-12 border rounded-full bg-white shadow-root cursor-pointer">
      <img
        src={TopScroll}
        alt="상단으로 이동"
        onClick={moveToTop}
        className="w-full h-full"
      />
    </div>
  ) : null;
}

export default GoToTop;

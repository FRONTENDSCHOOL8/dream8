import { useEffect } from "react";
import HomeContents from "../../04_templates/Home/HomeContents";

function Home() {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <HomeContents />
    </div>
  );
}

export default Home;

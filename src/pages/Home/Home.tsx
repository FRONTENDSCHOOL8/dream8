import { useEffect, useRef } from "react";

function Home() {

  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefalut();
      const { deltaY } = e; // wheel이 움직인 방향(양수 / 음수)
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if () {

        } else if () {

        } else () {

        }
      } eles {
        if () {

        } else if () {

        } else () {
          
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
  <div >
    <div ref={outerDivRef} className="outer overflow-y-hidden scrollbar-hide">
      <div className="inner w-screen h-screen bg-gray-300">
        <h1>section 1</h1>
      </div>
      <div className="inner w-screen h-screen bg-yellow-300">
        <h1>section 2</h1>
      </div>
      <div className="inner marker:w-screen h-screen bg-pink-300">
        <h1>section 3</h1>
      </div>
      <div className="inner marker:w-screen h-screen bg-purple-300">
        <h1>section 4</h1>
      </div>
      <div className="inner marker:w-screen h-screen bg-orange-300">
        <h1>section 5</h1>
      </div>
    </div>
  </div>
  );
}

export default Home;

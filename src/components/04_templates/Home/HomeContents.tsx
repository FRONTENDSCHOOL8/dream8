import whiteLogo from "/white-logo.svg"
import titleImg from "/home-section1.png"
import earthSick from "/earth-sick.png"
import fastImf from "/fast-fashion.png"
import earthClean from "/clean-earth.png"
import NewsCard from "../../03_organisms/Home/NewsCard"
import { useEffect, useState } from "react";
import { pb } from "@/api/pocketbase";

function HomeContens() {

  const [currentSection, setCurrentSection] = useState(0);
  const sectionCount = 5;

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        setCurrentSection(prevSection => 
          Math.min(prevSection + 1, sectionCount - 1)
        );
      } else {
        setCurrentSection(prevSection => 
          Math.max(prevSection - 1, 0)
        );
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight * currentSection,
      behavior: "smooth",
    });
  }, [currentSection]);

  const [newsList, setNewsList] = useState<NewsItemProps[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await pb.collection('news').getList();
        setNewsList(data.items); // `records`를 사용하여 데이터 설정
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, []);

  return (
    <>
      <div 
        className="snap-start w-screen h-screen flex items-center justify-center" 
        style={{
          backgroundImage: `url(${titleImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
          }}>
        <h1 className="sr-only">section 1</h1>
        <div className="flex flex-col items-center justify-center gap-8 w-full h-full">
          <img src={whiteLogo} alt="드림로고" className="w-[135px] h-[135px]" />
          <p className="text-7xl text-white font-bold">드림과 함께 만들어 가는 세상</p>
        </div>
      </div>

      <div className="snap-start w-screen h-screen bg-blue-primary">
        <div className="flex flex-col items-center gap-10 justify-center w-full h-full">
          <h1 className="sr-only">section 2</h1>
            <p className="flex flex-col gap-5 text-center text-6xl text-white font-bold">
              <span>지구가 울고 있어요</span>
              <span>우리는 듣고 행동해야 합니다</span>
            </p>
          <img src={earthSick} alt="지구가아파요" className="w-[543px] h-[428px]" />
        </div>
      </div>

      <div 
        className="snap-start w-screen h-screen"
        style={{
          backgroundImage: `url(${fastImf})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
        <div className="flex flex-col m-auto items-center gap-8 justify-center w-full h-full text-center text-white">
          <h1 className="sr-only">section 3</h1>
          <p className="flex flex-col gap-5 text-6xl font-bold">
            <span>패스트패션</span>
            <span>환경 파괴도 '더 빨리, 더 많이'</span>
          </p>
          <p className="flex flex-col gap-3 font-thin text-3xl">
            <span>의류 생산량을 증가시켜</span>
            <span>이산화탄소 과잉 발생에 영향을 줍니다.</span>
          </p>
        </div>
      </div>

      <div className="snap-start w-screen h-screen bg-white">
        <div className="flex flex-col items-center gap-8 justify-center w-full h-full">
          <h1 className="sr-only">section 4</h1>
          <p className="text-7xl">"지구를 되살리기 위한 사업을 합니다"</p>
          <img src={earthClean} alt="건강한지구" />
          <p className="flex flex-col gap-3 text-3xl font-bold">
            <span>후원물품은 검수 후에 판매되며,</span>
            <span>일부 판매 수익은 기부됩니다.</span>
          </p>
        </div>
      </div>
  
      <div className="snap-start w-screen h-screen">
        <div className="max-w-[1400px] h-full flex flex-col items-center m-auto">
          <h2 className="text-5xl mt-10">드림 소식</h2>

          <div className="grid gap-4 grid-cols-2 w-[1170px] h-[570px] m-auto">
            <ul className="grid gap-4 grid-cols-2">
              {newsList.slice(0, 4).map((newsItem, index) => (
                <NewsCard width="w-[275px]" height="h-[275px]" key={index} newsItem={newsItem} />
              ))}
            </ul>
            <div className="w-full">
              {newsList.length > 0 && <NewsCard width="w-full" height="h-full" newsItem={newsList[1]} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeContens;
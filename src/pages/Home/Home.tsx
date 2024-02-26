import whiteLogo from "../../assets/images/home/white-logo.svg"
function Home() {


  return (
    <div className="outer overflow-y-hidden scrollbar-hide">
      <div className="inner w-screen h-screen bg-gray-300">
        <h1 className="sr-only">section 1</h1>
        <div className="flex flex-col m-auto items-center justify-center w-full h-full">
          <img src={whiteLogo} alt="드림로고" className="w-[135px] h-[135px] pb-6" />
          <h2 className="text-7xl text-white font-bold">드림과 함께 만들어 가는 세상</h2>
        </div>
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
  );
}

export default Home;

import { Link } from "react-router-dom"
import donationIllust from "/donation-illust.svg"
import Note  from "/note.svg"
import Check  from "/check.svg"
import Location from "/location.svg"
import DonaionBg from "/donation-bg.webp"
import useLoginFormStore from "@/store/useLoginFormStore"

function DonationContents() {

  const { isLoggedIn } = useLoginFormStore();

  return (
    <>
      <div className="max-w-[90rem] m-auto">
        <div className="text-3xl flex justify-between w-[53rem] m-auto">
          <h3>후원하기</h3>
          <p className="flex flex-col">
            <span>당신의 후원, 소중한 지구생명을 치료합니다</span>
            <span>정기후원으로 드림의 후원회원이 되어주세요!</span>
          </p>
        </div>
  
        <img src={donationIllust} alt="기부 일러스트" className="w-[1214px] h-[700px] m-auto py-20" />
  
        <div className="flex flex-col gap-40 py-20 items-center">
          <p className="flex flex-col gap-1 text-center text-2xl">
            <span>Dream 사이트는</span>
            <span>당신의 헌 옷을 통해 환경 보호와 사회 공헌을</span>
            <span>동시에 실현하는 온라인 플랫폼입니다.</span>
            <span>사용하지 않는 옷을 버리는 대신</span>
            <span>필요한 사람들에게 판매하고,</span>
            <span>판매 수익은 사회 공헌 활동에 기부됩니다.</span>
          </p>
          <Link to={isLoggedIn ? '/DonationForm' : '/SignIn'}>
            <button 
              className="font-bold text-blue-primary border-2 border-blue-primary rounded-[3px] py-2 px-8 hover:bg-blue-primary hover:text-white">
              후원 기증 신청
            </button>
          </Link>
        </div>
      </div>
    
      <div className="w-full h-[650px] p-10 bg-gray-50 text-center">
        <p className="text-4xl font-bold">전화/온라인 접수 절차</p>
        <ul className="flex items-center justify-around w-[1050px] h-full m-auto">
          <li className="flex flex-col items-center justify-center gap-2 w-[16rem] h-[16rem] bg-white rounded-full">
            <img src={Note} alt="후원 접수" className="w-[86px]" />
            <p className="text-xl font-bold">후원 접수</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 w-[16rem] h-[16rem] bg-white rounded-full">
            <img src={Check} alt="수거 예약" />
            <p className="text-xl font-bold">수거 예약</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 w-[16rem] h-[16rem] bg-white rounded-full">
            <img src={Location} alt="방문 수거" />
            <p className="text-xl font-bold">방문 수거</p>
          </li>
        </ul>
      </div>
    
      <div 
      className="w-full h-[61rem] relative"
      style={{
        backgroundImage: `url(${DonaionBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      >
      <div className="text-white absolute left-32 bottom-32">
        <p className="text-6xl">기부금 안내</p>
        <div className="flex flex-col gap-7 text-2xl pt-10">
          <p className="flex flex-col">
            <span>따뜻한 관심이 세계의 환경을 보살핍니다.</span>
            <span>지구를 지킬 수 있도록 드림 캠퍼인에 동참해주세요.</span>
          </p>
          <p className="flex flex-col">
            <span>*계좌안내</span>
            <span>드림은행 330-303030-3332 (드림은행)</span>
            <span>기부금영수증 발급문의: 123-456-7890</span>
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default DonationContents;
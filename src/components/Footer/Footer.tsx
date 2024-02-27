function Footer() {
  return (
    <footer className="max-w-[90rem] w-full flex flex-col gap-2 fixed bottom-0 bg-gray-300 px-20 text-sm">
      <div className="flex justify-between pt-1">
        <div className="flex flex-col gap-3">
          <span className="text-blue-900 font-bold">C/S CENTER</span>
          <span className=" text-[1.5rem] text-gray-700">123-456-7890</span>
          <div className="flex flex-col  text-gray-700">
            <span className="text-[0.725rem]">평일 10:100 - 17:00</span>
            <span className="text-[0.725rem]">점심시간 12:00 - 13:30</span>
            <span className="text-[0.725rem]">주말 및 공휴일 휴무</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-blue-900 font-bold">COMPANY INFO</span>
          <div className="flex flex-col gap-[0.625rem] text-gray-700">
            <span className="text-[0.725rem]">
              드림 상점 | 대표 : 정서린 | 사업자등록번호 : 135-15-15302
            </span>
            <span className="text-[0.625rem]">
              주소 : 서울특별시 종로구 사직로 161
            </span>
            <span className="text-[0.625rem]">
              개인정보 관리 책임자 : 조현돈
            </span>
          </div>
          <span className="text-gray-600 text-[0.625rem]">
            이용약관 | 개인정보취급방법
          </span>
        </div>
      </div>

      <div className="text-blue-900 m-auto text-[0.825rem] pb-2">
        © 2024 DREAM STORE
      </div>
    </footer>
  );
}

export default Footer;

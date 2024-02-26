function Footer() {
  return (
    <footer className="w-full flex flex-col gap-[23px]  h-[300px] pt-[28px] pb-[24px] px-20">
      <div className="flex justify-between px-[136]">
        <div className="flex flex-col ">
          <span className="text-blue-900 font-bold">C/S CENTER</span>
          <span className="py-[18px] text-xl text-gray-700">123-456-7890</span>
          <div className="flex flex-col gap-3 text-gray-700">
            <span>평일 10:100 - 17:00</span>
            <span>점심시간 12:00 - 13:30</span>
            <span>주말 및 공휴일 휴무</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-blue-900 font-bold">COMPANY INFO</span>
          <div className="flex flex-col py-[17px] gap-[10px] text-gray-700">
            <span>
              드림 상점 | 대표 : 정서린 | 사업자등록번호 : 135-15-15302
            </span>
            <span>주소 : 서울특별시 종로구 사직로 161</span>
            <span>개인정보 관리 책임자 : 조현돈</span>
          </div>
          <span className="text-gray-600 text-[13px]">
            이용약관 | 개인정보취급방법
          </span>
        </div>
      </div>

      <div className="text-blue-900 m-auto">© 2024 DREAM STORE</div>
    </footer>
  );
}

export default Footer;

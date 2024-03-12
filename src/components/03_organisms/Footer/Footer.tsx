function Footer() {
  return (
    <footer className="w-full bg-gray-300 text-sm">
      <div className="max-w-[1440px] flex justify-between m-auto py-4">
        <div className="flex flex-col gap-2">
          <span className="text-blue-900 font-bold">C/S CENTER</span>
          <span className="text-3xl text-gray-700">123-456-7890</span>
          <div className="flex flex-col  text-gray-700">
            <span>
              <strong>평일</strong> 10:100 - 17:00
            </span>
            <span>
              <strong>점심시간</strong> 12:00 - 13:30
            </span>
            <span>주말 및 공휴일 휴무</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-blue-900 font-bold">COMPANY INFO</span>
          <div className="flex flex-col">
            <span>
              드림 상점 | 대표 : 정서린 | 사업자등록번호 : 135-15-15302
            </span>
            <span>주소 : 서울특별시 종로구 사직로 161</span>
            <span>개인정보 관리 책임자 : 조현돈</span>
          </div>
          <span className="text-gray-500 text-xs">
            이용약관 | 개인정보취급방법
          </span>
        </div>
      </div>

      <div className=" border-t border-gray-200 text-blue-900 m-auto py-4 text-center">
        © 2024 DREAM STORE
      </div>
    </footer>
  );
}

export default Footer;

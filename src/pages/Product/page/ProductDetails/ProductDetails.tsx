import timerIcon from '/timer.svg';
import cautionIcon1 from '/global-outlined.svg';
import cautionIcon2 from '/leveldb.svg';
import cautionIcon3 from '/gold-medal-two.svg';
const Cautions = () => {
  return (
    <div
      aria-label="주의사항"
      className="flex flex-col gap-7 text-base tracking-[-0.4px]"
    >
      <p className="flex">
        <img
          src={cautionIcon1}
          alt="글로벌 테두리 아이콘"
          className="w-6 h-6 mr-2"
        />
        DREAM에서 검수한 상품이 문제가 있을 경우, 구매가의 3배를 보상합니다.
      </p>
      <p className="flex">
        <img
          src={cautionIcon2}
          alt="초록색 데이터베이스 아이콘"
          className="w-6 h-6 mr-2"
        />
        모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을
        거쳐 검수를 진행합니다.
      </p>
      <p className="flex">
        <img
          src={cautionIcon3}
          alt="금색 메달 아이콘"
          className="w-6 h-6 mr-2"
        />
        검수에 합격한 경우에 한하여 Dream의 엄격한 다중 검수 등급 판별
      </p>
    </div>
  );
};

function ProductDetails() {
  return (
    <div className="pt-20 w-[75rem] m-auto">
      <h2 className="sr-only">상품 디테일 페이지</h2>
      <div className="flex justify-between gap-14">
        <figure className="flex flex-col border m-0">
          <img src="" alt="" className="w-96 h-[31.25rem] border" />
          <div aria-label="썸네일 버튼">
            <ul>
              <li>
                <button>
                  <img src="" alt="" className="w-12 h-12" />
                </button>
              </li>
            </ul>
          </div>
        </figure>
        <div className="flex flex-col justify-between">
          <div role="group">
            <h3 className="text-3xl">주머니 포인트 청바지 (M)</h3>
            <p className="flex gap-1 mt-5">
              <img src={timerIcon} alt="타이머 아이콘" /> 2달전
            </p>
          </div>
          <div role="group" className="flex flex-col gap-4">
            <p>
              상품상태: <span>A급</span>
            </p>
            <p>
              금액: <span>12,000원</span>
            </p>
            <p>
              배송비: <span>배송비 별도</span>
            </p>
          </div>
          <Cautions />
          <div role="group" className="grid grid-cols-2 gap-5">
            <button className="text-2xl border-[3px] border-blue-primary font-semibold text-blue-primary rounded-md hover:text-white hover:bg-blue-primary py-2">
              구매하기
            </button>
            <button className="text-2xl border-[3px] border-blue-primary font-semibold text-blue-primary rounded-md hover:text-white hover:bg-blue-primary py-2">
              장바구니
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-[#eee] my-20"></div>
      <div className="text-center">
        <h2 className="text-3xl">상품 설명</h2>
        <figure>
          <img src="" alt="" className="w-96 h-auto border" />
        </figure>
        <div className="w-[43.75rem] text-start m-auto">
          <p>(새상품) 키치워크 와이드 데님팬츠 연청 M</p>
          <p>
            키치워크 와이드 데님팬츠 연청 17000원에 판매합니다.(정가
            95000원)미착용 새상품이고 짐 정리하면서 저렴하게 판매합니다. 가격
            대비 만족하실 거에요.와이드핏이며 사이즈 M(27)입니다.바지 핏은
            마지막컷 참고해주세요.
          </p>
          <p>사이즈:M</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

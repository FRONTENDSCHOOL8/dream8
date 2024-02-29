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

export default Cautions;

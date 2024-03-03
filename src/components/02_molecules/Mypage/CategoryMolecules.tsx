import Button from '@/components/01_atoms/Button/Button';

const CategoryMolecules = () => {
  return (
    <div className="flex flex-col min-w-[23.75rem]  h-[59.06rem] border border-gray-300 justify-center items-center gap-[7.5rem] text-[2.06rem] font-semibold">
      <Button type="button" aria-label="마이페이지 버튼" className="mb-20">
        <span>마이페이지</span>
      </Button>
      <Button type="button" aria-label="장바구니 자세히보기 버튼">
        <span>장바구니</span>
      </Button>
      <Button type="button" aria-label="거래내역 자세히보기 버튼">
        <span>거래내역</span>
      </Button>
      <Button type="button" aria-label="후원내역 자세히보기 버튼">
        <span>후원내역</span>
      </Button>
    </div>
  );
};

export default CategoryMolecules;

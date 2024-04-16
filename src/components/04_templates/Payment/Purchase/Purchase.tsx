import Button from '@/components/01_atoms/Button/Button';
import { MyCartListItem } from '@/types';
interface purchaseType {
  checkedList: MyCartListItem[];
  onClick: () => void;
}

function Purchase({ checkedList, onClick }: purchaseType) {
  const price = checkedList.reduce(
    (acc, cur) => acc + (cur.isChecked ? cur.price : 0),
    0
  );

  const totalPrice = price + 3000;
  return (
    <section className="text-left w-[80%] xxl:w-[62.5rem] m-auto bg-[#F3F3F3] my-16 p-12">
      <h3 className="text-2xl xxl:text-3xl">구매정보</h3>
      <div className="flex flex-col text-lg gap-6 mt-6">
        <div className="flex justify-between font-medium">
          <div>구매가</div>
          <div>{price.toLocaleString()}원</div>
        </div>
        <div className="flex justify-between text-gray-100">
          <div>배송비</div>
          <div>3000원</div>
        </div>
        <div className="flex justify-between text-gray-100">
          <div>쿠폰사용</div>
          <div>-</div>
        </div>
        <div className="flex justify-between font-semibold">
          <div>총 결제 금액</div>
          <div>{(price === 0 ? 0 : totalPrice).toLocaleString()}원</div>
        </div>
        <Button
          type="button"
          onClick={onClick}
          className="w-full h-12 border-2 border-blue-primary text-blue-primary font-semibold hover:bg-blue-primary hover:text-white"
        >
          결제하기
        </Button>
      </div>
    </section>
  );
}

export default Purchase;

const MyCartList = () => {
  return (
    <li className="grid grid-cols-[1fr_2fr_5fr_2fr_1fr] items-center text-lg bg-white px-12 py-4 rounded-2xl">
      <div>
        <label htmlFor="" className="sr-only">
          구매체크
        </label>
        <input type="checkbox" name="checkToPurchase" id="" />
      </div>
      <figure className="m-0">
        <img src="" alt="" className="w-28 h-28 border rounded-3xl" />
      </figure>
      <div>
        <div className="flex justify-start font-semibold">
          <div>주머니 포인트 청바지</div>
          <div className="text-blue-primary ml-10 text-base">A등급</div>
        </div>
        <div className="flex justify-start"> 사이즈: M</div>
      </div>

      <div>12,000원</div>
      <button className="text-blue-primary">✖</button>
    </li>
  );
};

function Payment() {
  return (
    <div className="text-center bg-white">
      <section className="w-[62.5rem] m-auto my-16">
        <h2 className="text-4xl pt-20 pb-10 font-semibold">장바구니 목록</h2>
        <ul className="flex flex-col">
          <MyCartList />
          <MyCartList />
        </ul>
      </section>
      <section className="text-left w-[62.5rem] m-auto bg-[#F3F3F3] my-16 p-12">
        <h3 className="text-3xl">구매정보</h3>
        <div className="flex flex-col text-lg gap-6 mt-6">
          <div className="flex justify-between font-medium">
            <div>구매가</div>
            <div>19,000원</div>
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
            <div>29,000원</div>
          </div>
          <button className="w-full h-12 border-2 border-blue-primary text-blue-primary font-semibold hover:bg-blue-primary hover:text-white">
            결제하기
          </button>
        </div>
      </section>
    </div>
  );
}

export default Payment;

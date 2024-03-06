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

export default MyCartList;

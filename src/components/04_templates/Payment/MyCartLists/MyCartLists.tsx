import MyCartList from '@/components/03_organisms/Payment/MyCartList/MyCartList';
import { MyCartDataItem } from '@/types';
interface MyCartListsType {
  data: MyCartDataItem[];
  onChecked: () => void;
  onDelete: () => void;
}

function MyCartLists({ data, onChecked, onDelete }: MyCartListsType) {
  return (
    <section className="w-[80%] xxl:w-[62.5rem] m-auto my-16">
      <h2 className="text-4xl p-10 font-semibold">장바구니 목록</h2>
      <ul className=" flex flex-col gap-2">
        <li className="grid xxl:grid-cols-[1fr_2fr_6fr_2fr_1fr] xxl_max:grid-cols-[1fr_1fr_2fr_1fr_1fr] text-center px-12 ">
          <div className="border border-white bg-[#f3f3f3]">구매선택</div>
          <div className="border border-white bg-[#f3f3f3]">사진</div>
          <div className="border border-white bg-[#f3f3f3]">상품</div>
          <div className="border border-white bg-[#f3f3f3]">가격</div>
          <div className="border border-white bg-[#f3f3f3]">삭제</div>
        </li>

        {data.map(
          (list) =>
            list.isPayed === false && (
              <MyCartList
                key={list.id}
                list={list}
                onChecked={onChecked}
                onDelete={onDelete}
              />
            )
        )}
      </ul>
    </section>
  );
}

export default MyCartLists;

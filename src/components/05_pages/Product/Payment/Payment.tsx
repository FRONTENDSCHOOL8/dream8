import { pb } from '@/api/pocketbase';
import Button from '@/components/01_atoms/Button/Button';
import ConfirmModal from '@/components/02_molecules/Modal/ConfirmModal/ConfirmModal';
import MyCartList from '@/components/03_organisms/Payment/MyCartList/MyCartList';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const [showModal, setShowModal] = useState(false);
  const [checkedMyCartLists, setCheckedMyCartLists] = useState([]);
  const { isLoggedIn, userInfo } = useLoginFormStore();
  const navigate = useNavigate();

  async function fetchMyCart(userId: string) {
    return await pb.collection('my_cart').getFullList({
      filter: `userId = "${userId}" && isPayed = false`,
      expand: 'productId',
    });
  }

  const { data, refetch } = useQuery({
    queryKey: ['myCart', userInfo.id],
    queryFn: () => fetchMyCart(userInfo.id),
    initialData: [],
    staleTime: 1000 * 10,
  });

  const initial = data.map((list) => ({
    myCartID: list.id,
    productId: list.expand.productId.id,
    price: list.expand.productId.price,
    isChecked: false,
  }));

  const price = checkedMyCartLists.reduce(
    (acc, cur) => acc + (cur.isChecked ? cur.price : 0),
    0
  );

  const totalPrice = price + 3000;

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCheckedMyCartLists = (listID, isChecked) => {
    console.log(checkedMyCartLists);
    const updateData = checkedMyCartLists.map((item) =>
      item.myCartID === listID ? { ...item, isChecked: isChecked } : item
    );
    setCheckedMyCartLists(updateData);
  };

  const handleDeleteMyCartList = async (data) => {
    await pb.collection('my_cart').delete(data);
    refetch();
  };

  const handlePurchase = async () => {
    // const updatedData = data.map()
    handleOpenModal();
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/SignIn');
    } else {
      setCheckedMyCartLists(initial);
    }
  }, [isLoggedIn, data]);

  return (
    <div className="text-center bg-white max-w-[90rem] m-auto" id="myCartPage">
      <section className="w-[62.5rem] m-auto my-16">
        <h2 className="text-4xl p-10 font-semibold">장바구니 목록</h2>
        <ul className="flex flex-col gap-2">
          <li className="grid grid-cols-[1fr_2fr_6fr_2fr_1fr] text-center px-12 ">
            <div className="border border-white bg-[#f3f3f3]">구매선택</div>
            <div className="border border-white bg-[#f3f3f3]">사진</div>
            <div className="border border-white bg-[#f3f3f3]">상품</div>
            <div className="border border-white bg-[#f3f3f3]">가격</div>
            <div className="border border-white bg-[#f3f3f3]">삭제</div>
          </li>
          {data.map((list) => (
            <MyCartList
              key={list.id}
              list={list}
              checked={false}
              onChecked={handleCheckedMyCartLists}
              onDelete={handleDeleteMyCartList}
            />
          ))}
        </ul>
      </section>
      <section className="text-left w-[62.5rem] m-auto bg-[#F3F3F3] my-16 p-12">
        <h3 className="text-3xl">구매정보</h3>
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
            onClick={handlePurchase}
            className="w-full h-12 border-2 border-blue-primary text-blue-primary font-semibold hover:bg-blue-primary hover:text-white"
          >
            결제하기
          </Button>
        </div>
      </section>
      {showModal && (
        <>
          <ConfirmModal title="성공" onClose={handleCloseModal}>
            <p>결제를 성공했습니다</p>
          </ConfirmModal>
        </>
      )}
    </div>
  );
}

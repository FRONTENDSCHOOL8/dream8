import { pb } from '@/api/pocketbase';
import ConfirmModal from '@/components/02_molecules/Modal/ConfirmModal/ConfirmModal';
import MyCartList from '@/components/03_organisms/Payment/MyCartList/MyCartList';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, userInfo } = useLoginFormStore();
  const navigate = useNavigate();
  // const [checkedItems, setCheckedItems] = useState({});

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCheckedMyCartLists = (data) => {
    setCheckedMyCartLists(data);
  };

  async function fetchMyCart(userId: string) {
    return await pb.collection('my_cart').getFullList({
      filter: `userId = "${userId}"`,
      expand: 'productId',
    });
  }

  const { data, refetch } = useQuery({
    queryKey: ['myCart', userInfo.id],
    queryFn: () => fetchMyCart(userInfo.id),
    initialData: [],
  });

  const initial = data.map((list) => ({
    myCartID: list.id,
    productId: list.expand.productId.id,
    price: list.expand.productId.price,
    isChecked: false,
  }));

  const [checkedMyCartLists, setCheckedMyCartLists] = useState(initial);
  console.log(initial);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/SignIn');
    }
  }, []);

  const handleDeleteMyCartList = async (data) => {
    await pb.collection('my_cart').delete(data);
    refetch();
  };

  return (
    <div className="text-center bg-white max-w-[90rem]" id="myCartPage">
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
            <div>{checkedMyCartLists.length > 1 ? 1000 : 0}원</div>
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
          <button
            onClick={handleOpenModal}
            className="w-full h-12 border-2 border-blue-primary text-blue-primary font-semibold hover:bg-blue-primary hover:text-white"
          >
            결제하기
          </button>
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

export default Payment;

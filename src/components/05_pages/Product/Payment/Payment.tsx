import CautionModal from '@/components/02_molecules/Modal/CautionModal/CautionModal';
import ConfirmModal from '@/components/02_molecules/Modal/ConfirmModal/ConfirmModal';
import SelectModal from '@/components/02_molecules/Modal/SelectModal/SelectModal';
import MyCartList from '@/components/03_organisms/Product/MyCartList/MyCartList';
import { useState } from 'react';

function Payment() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="text-center bg-white" id="myCartPage">
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
          {/* <ConfirmModal title="성공" onClose={handleCloseModal}>
            <p>데이터 저장에 성공했습니다</p>
          </ConfirmModal> */}
          <SelectModal
            title="장바구니 담기 완료"
            onClose={handleCloseModal}
            onLink={handleCloseModal}
          >
            <p>구매하기 페이지로 넘어가시겠습니까?</p>
          </SelectModal>
          {/* <CautionModal onClose={handleCloseModal} /> */}
        </>
      )}
    </div>
  );
}

export default Payment;

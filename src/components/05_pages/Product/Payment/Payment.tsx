import { pb } from '@/api/pocketbase';
import ConfirmModal from '@/components/02_molecules/Modal/ConfirmModal/ConfirmModal';
import MyCartLists from '@/components/04_templates/Payment/MyCartLists/MyCartLists';
import Purchase from '@/components/04_templates/Payment/Purchase/Purchase';
import useCountStore from '@/store/useCountStore';
import useLoginFormStore from '@/store/useLoginFormStore';
import { MyCartDataItem, MyCartListItem } from '@/types';
import { getPbImage, getPbImageURL } from '@/utils/getPbImage';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const { plusCount } = useCountStore();
  const [showModal, setShowModal] = useState(false);
  const [checkedMyCartLists, setCheckedMyCartLists] = useState<
    MyCartListItem[]
  >([]);
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
  });

  const initial: MyCartListItem[] = data.map((list) => ({
    myCartID: list.id,
    productId: list.expand?.productId.id,
    price: list.expand?.productId.price,
    isChecked: false,
  }));

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    refetch();
  };

  const handleCheckedMyCartLists = (listID: string, isChecked: boolean) => {
    const updateData = checkedMyCartLists.map((item) =>
      item.myCartID === listID ? { ...item, isChecked: isChecked } : item
    );
    setCheckedMyCartLists(updateData);
  };

  const handleDeleteMyCartList = async (recordId: string) => {
    await pb.collection('my_cart').delete(recordId);
    refetch();
  };

  const updateMyCartPayed = async (MyCartId: string, data: MyCartDataItem) => {
    await pb.collection('my_cart').update(MyCartId, data);
  };

  const handlePurchase = async () => {
    const payedMyCartLists = checkedMyCartLists
      .filter((item) => item.isChecked === true)
      .map((item) => item.productId);

    if (payedMyCartLists.length === 0) return;

    const updatedData = data.map((item) =>
      payedMyCartLists.includes(item.expand?.productId.id)
        ? { ...item, isPayed: true }
        : item
    );
    try {
      for (const item of updatedData) {
        if (item.isPayed) {
          const formData = new FormData();
          const photo = getPbImage(
            item.expand?.productId.collectionId,
            item.expand?.productId.id,
            item.expand?.productId.photo[0]
          );

          const blob = await fetch(photo).then((res) => res.blob());
          const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

          formData.append('photo', file);
          formData.append('field', 'notification');
          formData.append('title', item.expand?.productId.title);
          formData.append('description', item.expand?.productId.description);
          formData.append('isComplete', item.isPayed);
          formData.append('userId', userInfo.id);

          updateMyCartPayed(item.id, item);
          plusCount();

          const response = await pb.collection('notification').create(formData);
          console.log('response  ', response);
        }
      }
    } catch (error) {
      console.log('error  ', error);
    }

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
      <MyCartLists
        data={data}
        onChecked={handleCheckedMyCartLists}
        onDelete={handleDeleteMyCartList}
      />
      <Purchase checkedList={checkedMyCartLists} onClick={handlePurchase} />
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

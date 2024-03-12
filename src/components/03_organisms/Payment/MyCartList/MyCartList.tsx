import Button from '@/components/01_atoms/Button/Button';
import { getPbImage } from '@/utils/getPbImage';
import { useState } from 'react';

const MyCartList = ({ list, onChecked, onDelete }) => {
  const { collectionId, id, photo, price, grade, title, size } =
    list.expand.productId;
  const imageSrc = getPbImage(collectionId, id, photo[0]);

  const [isCheck, setIsCheck] = useState(false);

  const handleCheckToPurchase = () => {
    onChecked(list.id, !isCheck);
    setIsCheck(!isCheck);
  };

  const handleDeleteMyCart = () => {
    onDelete(list.id);
  };

  return (
    <li className="grid grid-cols-[1fr_2fr_6fr_2fr_1fr] items-center text-lg bg-white px-12 py-4 rounded-2xl">
      <div>
        <label htmlFor={list.id} className="sr-only">
          구매체크
        </label>
        <input
          type="checkbox"
          name="checkToPurchase"
          id={list.id}
          checked={isCheck}
          onChange={handleCheckToPurchase}
          className="w-4 h-4"
        />
      </div>
      <figure>
        <img
          src={imageSrc}
          alt={title}
          className="w-28 h-28 rounded-3xl object-cover m-auto"
        />
      </figure>
      <div className="flex justify-between items-center">
        <div className="flex flex-col font-semibold">
          <div>{title}</div>
          <div className="font-base self-start"> 사이즈: {size}</div>
        </div>
        <div className="text-blue-primary mr-4 text-base font-semibold">
          {grade}등급
        </div>
      </div>

      <div>{price.toLocaleString()}원</div>
      <Button
        type="button"
        className="text-blue-primary"
        onClick={handleDeleteMyCart}
      >
        ✖
      </Button>
    </li>
  );
};

export default MyCartList;

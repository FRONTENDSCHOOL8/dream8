import { FC } from 'react';

type ArrangeButtonProps = {
  children: string;
};
const ArrangeButton: FC<ArrangeButtonProps> = ({ children }) => {
  return (
    <li>
      <button className="text-base font-medium text-gray-500 w-24 h-11 hover:text-blue-primary hover:font-bold">
        {children}
      </button>
      {/* <button className="text-base font-medium font-blue-primary w-24 h-11 border border-blue-primary rounded-xl hover:text-white hover:bg-blue-primary">
        {children}
      </button> */}
    </li>
  );
};

function ArrangeProduct() {
  return (
    <div className="px-[5.31rem]">
      <h2 className="sr-only">정렬</h2>
      <ul className="flex flex-row justify-end items-center text-gray-500">
        <ArrangeButton>등급별</ArrangeButton> |
        <ArrangeButton>가격별</ArrangeButton> |
        <ArrangeButton>최신순</ArrangeButton> |
        <ArrangeButton>오래된순</ArrangeButton>
      </ul>
    </div>
  );
}

export default ArrangeProduct;

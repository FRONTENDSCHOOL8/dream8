import { FC } from 'react';

type ArrangeButtonProps = {
  children: string;
};
const ArrangeButton: FC<ArrangeButtonProps> = ({ children }) => {
  return (
    <li>
      <button className="text-base font-medium font-[#224B8F] w-24 h-11 border border-[#224B8F] rounded-xl hover:text-white hover:bg-[#224B8F]">
        {children}
      </button>
    </li>
  );
};

function ArrangeProduct() {
  return (
    <div className="w-[55rem] m-auto">
      <h2 className="sr-only">정렬</h2>
      <ul className="flex flex-row justify-between">
        <ArrangeButton>등급별</ArrangeButton>
        <ArrangeButton>가격별</ArrangeButton>
        <ArrangeButton>최신순</ArrangeButton>
        <ArrangeButton>오래된순</ArrangeButton>
      </ul>
    </div>
  );
}

export default ArrangeProduct;

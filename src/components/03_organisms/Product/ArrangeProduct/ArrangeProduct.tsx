import { FC } from 'react';

type ArrangeButtonProps = {
  children: string;
};
const ArrangeButton: FC<ArrangeButtonProps> = ({
  onSelectArrange,
  children,
}) => {
  return (
    <li>
      <button
        className="text-lg font-medium text-gray-500 w-24 h-11 hover:text-blue-primary hover:font-bold"
        onClick={onSelectArrange}
      >
        {children}
      </button>
    </li>
  );
};

function ArrangeProduct({ onSelect }) {
  const handleChangeArrange = (e) => {
    onSelect(e.target.innerHTML);
  };
  return (
    <div className="px-[1rem]">
      <h2 className="sr-only">정렬</h2>
      <ul className="flex flex-row justify-end items-center text-gray-500">
        <ArrangeButton onSelectArrange={handleChangeArrange}>
          등급별
        </ArrangeButton>{' '}
        |
        <ArrangeButton onSelectArrange={handleChangeArrange}>
          가격별
        </ArrangeButton>{' '}
        |
        <ArrangeButton onSelectArrange={handleChangeArrange}>
          최신순
        </ArrangeButton>{' '}
        |
        <ArrangeButton onSelectArrange={handleChangeArrange}>
          오래된순
        </ArrangeButton>{' '}
        |
      </ul>
    </div>
  );
}

export default ArrangeProduct;

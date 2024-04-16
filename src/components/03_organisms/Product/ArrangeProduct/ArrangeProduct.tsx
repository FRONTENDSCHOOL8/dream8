type ArrangeButtonProps = {
  children: string;
  onSelectArrange: React.MouseEventHandler<HTMLButtonElement>;
};

function ArrangeButton({ onSelectArrange, children }: ArrangeButtonProps) {
  return (
    <li>
      <button
        className="text-sm lg_md:text-lg font-medium text-gray-500 w-[80%] lg_md:w-24 h-11 hover:text-blue-primary hover:font-bold whitespace-nowrap "
        onClick={onSelectArrange}
      >
        {children}
      </button>
    </li>
  );
}

interface ArrangeProductProps {
  onSelect: (value: string) => void;
}

function ArrangeProduct({ onSelect }: ArrangeProductProps) {
  const handleChangeArrange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    onSelect(target.innerHTML);
  };
  return (
    <div className="px-[1rem]">
      <h2 className="sr-only ">정렬</h2>
      <ul className="flex flex-row justify-end items-center text-gray-500 lg_md_range:gap-1">
        <ArrangeButton onSelectArrange={handleChangeArrange}>
          등급순
        </ArrangeButton>{' '}
        |
        <ArrangeButton onSelectArrange={handleChangeArrange}>
          가격순
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

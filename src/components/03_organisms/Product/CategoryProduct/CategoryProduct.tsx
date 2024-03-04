import Button from '@/components/01_atoms/Button/Button';
import { FC } from 'react';

type CategoryButtonProps = {
  children: string;
  onChangeCategory: () => void;
};

const CategoryButton: FC<CategoryButtonProps> = ({
  onChangeCategory,
  children,
}) => {
  return (
    <li>
      <Button
        type="button"
        className="text-xl font-medium hover:text-[#224B8F] hover:font-semibold"
        onClick={onChangeCategory}
      >
        {children}
      </Button>
    </li>
  );
};

function CategoryProduct({ onSelect }) {
  const handleChangeCategory = (e) => {
    onSelect(e.target.innerText);
  };
  return (
    <div className="w-[55rem] m-auto">
      <h2 className="sr-only">카테고리</h2>
      <ul className="flex flex-row justify-between px-[6rem] py-1 mt-4">
        <CategoryButton onChangeCategory={handleChangeCategory}>
          전체
        </CategoryButton>
        <CategoryButton onChangeCategory={handleChangeCategory}>
          의류
        </CategoryButton>
        <CategoryButton onChangeCategory={handleChangeCategory}>
          잡화
        </CategoryButton>
        <CategoryButton onChangeCategory={handleChangeCategory}>
          기타
        </CategoryButton>
      </ul>
    </div>
  );
}
export default CategoryProduct;

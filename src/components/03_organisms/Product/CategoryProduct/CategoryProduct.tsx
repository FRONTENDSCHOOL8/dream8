import { FC } from 'react';

type CategoryButtonProps = {
  children: string;
};
const CategoryButton: FC<CategoryButtonProps> = ({ children }) => {
  return (
    <li>
      <button className="text-xl font-medium hover:text-[#224B8F] hover:font-semibold">
        {children}
      </button>
    </li>
  );
};

function CategoryProduct() {
  return (
    <div className="w-[55rem] m-auto">
      <h2 className="sr-only">카테고리</h2>
      <ul className="flex flex-row justify-between px-[6rem] py-1 mt-4">
        <CategoryButton>전체</CategoryButton>
        <CategoryButton>의류</CategoryButton>
        <CategoryButton>잡화</CategoryButton>
        <CategoryButton>기타</CategoryButton>
      </ul>
    </div>
  );
}
export default CategoryProduct;

interface CategoryProductProps {
  onSelect: (value: string) => void;
}

function CategoryProduct({ onSelect }: CategoryProductProps) {
  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };
  return (
    <div>
      <h2 className="sr-only">카테고리</h2>
      <label htmlFor="productCategory" className="sr-only">
        카테고리 선택
      </label>
      <select
        name="productCategory"
        id="productCategory"
        onChange={handleChangeCategory}
        className="lg_md_range:text-sm text-lg text-gray-500 border rounded-lg  text-center  lg_md_range:py-1 py-2 lg_md_range:w-14 w-24"
      >
        <option value="전체">전체</option>
        <option value="의류">의류</option>
        <option value="잡화">잡화</option>
        <option value="기타">기타</option>
      </select>
    </div>
  );
}
export default CategoryProduct;

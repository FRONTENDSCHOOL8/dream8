function CategoryProduct({ onSelect }) {
  const handleChangeCategory = (e) => {
    onSelect(e.target.value);
  };
  return (
    <div>
      <h2 className="sr-only">카테고리</h2>
      <label htmlFor="productCategory"></label>
      <select
        name="productCategory"
        id="productCategory"
        onChange={handleChangeCategory}
        className="text-lg text-gray-500 border rounded-lg w-24 text-center py-2"
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

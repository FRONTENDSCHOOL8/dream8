import searchIcon from '/search.svg';

function SearchProduct() {
  return (
    <div className="w-[55rem] m-auto relative">
      <h2 className="sr-only">검색</h2>
      <label htmlFor="inputSearch" className="sr-only">
        검색창
      </label>
      <input
        className="w-full h-11 border border-[#6a6a6a] rounded-[50px] px-7 bg-[#eeeeee]"
        type="search"
        placeholder="검색어를 입력해주세요"
        name="inputSearch"
        id="inputSearch"
      />
      <button aria-label="검색" className="absolute top-3 right-6">
        <img className="w-4 h-4" src={searchIcon} alt="검색 아이콘" />
      </button>
    </div>
  );
}

export default SearchProduct;

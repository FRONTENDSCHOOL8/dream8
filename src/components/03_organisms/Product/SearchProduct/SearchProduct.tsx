import { useState } from 'react';
import searchIcon from '/search.svg';
import Button from '@/components/01_atoms/Button/Button';

function SearchProduct({ onSearch }) {
  const [inputSearch, setInputSearch] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(inputSearch);
  };
  return (
    <div className="w-[55rem] m-auto relative">
      <h2 className="sr-only">검색</h2>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="inputSearch" className="sr-only">
          검색창
        </label>
        <input
          className="w-full h-11 border border-[#6a6a6a] rounded-[50px] px-7 bg-[#eeeeee]"
          type="search"
          placeholder="검색어를 입력해주세요"
          name="inputSearch"
          id="inputSearch"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <Button
          aria-label="검색"
          className="absolute top-3 right-6"
          type="submit"
        >
          <img className="w-4 h-4" src={searchIcon} alt="검색 아이콘" />
        </Button>
      </form>
    </div>
  );
}

export default SearchProduct;

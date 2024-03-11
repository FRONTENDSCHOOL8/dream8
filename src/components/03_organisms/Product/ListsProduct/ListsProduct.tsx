import Button from '@/components/01_atoms/Button/Button';
import ListProduct from '@/components/02_molecules/Product/ListProduct/ListProduct';
import { ProductListsType } from '@/types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
interface listsProductType {
  category: string;
  sort: string;
  search: string;
  productLists: ProductListsType[];
}
function ListsProduct({
  category,
  sort,
  search,
  productLists,
}: listsProductType) {
  const [filteredProductLists, setFilteredProductLists] =
    useState(productLists);

  const [showMoreCount, setShowMoreCount] = useState(12);

  function getSearchedProductLists(search: string, lists: ProductListsType[]) {
    let searchedProductLists = [...lists];
    if (search != '') {
      searchedProductLists = lists.filter(
        (list) => list.title.includes(search) === true
      );
    }
    return searchedProductLists;
  }

  function getSortedProductLists(sort: string, lists: ProductListsType[]) {
    let sortedProductLists = [...lists];
    switch (sort) {
      case '등급순':
        return sortedProductLists.sort((a, b) =>
          a.grade.localeCompare(b.grade)
        );
      case '가격순':
        return sortedProductLists.sort((a, b) => a.price - b.price);
      case '최신순':
        return sortedProductLists.sort(
          (a, b) =>
            new Date(b.created).getTime() - new Date(a.created).getTime()
        );
      case '오래된순':
        return sortedProductLists.sort(
          (a, b) =>
            new Date(a.created).getTime() - new Date(b.created).getTime()
        );
      default:
        return sortedProductLists;
    }
  }

  function getCategoryProductLists(
    category: string,
    lists: ProductListsType[]
  ) {
    if (category === '전체') {
      return lists;
    }
    return lists.filter((list) => list.category === category);
  }

  const handleShowMore = () => {
    if (showMoreCount < filteredProductLists.length) {
      setShowMoreCount(showMoreCount + 12);
    }
  };

  useEffect(() => {
    let updatedProductLists = [...productLists];
    updatedProductLists = getSearchedProductLists(search, updatedProductLists);
    updatedProductLists = getSortedProductLists(sort, updatedProductLists);

    if (category !== '전체') {
      updatedProductLists = getCategoryProductLists(
        category,
        updatedProductLists
      );
    }

    setFilteredProductLists(updatedProductLists);
  }, [category, sort, search, productLists]);

  return (
    <div className="px-[5.31rem] pb-12 flex flex-col justify-center gap-8">
      <h2 className="sr-only">상품 리스트</h2>
      <ul className="grid grid-cols-4 gap-10 relative">
        {filteredProductLists.length > 0 ? (
          filteredProductLists.slice(0, showMoreCount).map(
            (list) =>
              list.isSale && (
                <Link
                  key={list.id}
                  to={`/ProductDetails/${list.id}/${list.category}`}
                >
                  <ListProduct list={list} />
                </Link>
              )
          )
        ) : (
          <div className="absolute top-0 right-1/2 translate-x-1/2 text-xl">
            상품이 없습니다
          </div>
        )}
      </ul>
      {showMoreCount < filteredProductLists.length && (
        <Button
          type="button"
          onClick={handleShowMore}
          className="border p-2 rounded-xl text-gray-500 m-auto text-lg hover:text-white hover:bg-blue-primary"
        >
          더보기
        </Button>
      )}
    </div>
  );
}

export default ListsProduct;

import ListProduct from '@/components/02_molecules/Product/ListProduct/ListProduct';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListsProduct({ category, sort, search, productLists }) {
  const [filteredProductLists, setFilteredProductLists] =
    useState(productLists);

  function getSearchedProductLists(search: string, lists: object[]) {
    let searchedProductLists = [...lists];
    if (search != '') {
      searchedProductLists = lists.filter(
        (list) => list.title.includes(search) === true
      );
    }
    return searchedProductLists;
  }

  function getSortedProductLists(sort, lists) {
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

  function getCategoryProductLists(category, lists) {
    if (category === '전체') {
      return lists;
    }
    return lists.filter((list) => list.category === category);
  }

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
    <div className="px-[5.31rem] pb-12 ">
      <h2 className="sr-only">상품 리스트</h2>
      <ul className="grid grid-cols-4 gap-10 relative">
        {filteredProductLists.length > 0 ? (
          filteredProductLists.map((list) => (
            <Link
              key={list.id}
              to={`/ProductDetails/${list.id}/${list.category}`}
            >
              <ListProduct list={list} />
            </Link>
          ))
        ) : (
          <div className="absolute top-0 right-1/2 translate-x-1/2 text-xl">
            상품이 없습니다
          </div>
        )}
      </ul>
    </div>
  );
}

export default ListsProduct;

import ListProduct from '@/components/02_molecules/Product/ListProduct/ListProduct';
import { Link } from 'react-router-dom';

function ListsProduct({ category, sort, productLists }) {
  let sortedProductLists = productLists;

  switch (sort) {
    case '등급별':
      sortedProductLists = productLists.sort((a, b) =>
        a.grade.localeCompare(b.grade)
      );
      break;
    case '가격별':
      sortedProductLists = productLists.sort((a, b) => a.price - b.price);
      break;
    case '최신순':
      sortedProductLists = productLists.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
      break;
    case '오래된순':
      sortedProductLists = productLists.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
      break;
    default:
      sortedProductLists = productLists;
  }

  return (
    <div className="px-[5.31rem] pb-12">
      <h2 className="sr-only">상품 리스트</h2>
      <ul className="grid grid-cols-4 gap-10">
        {sortedProductLists.map((list) => {
          if (category === '전체')
            return (
              <Link key={list.id} to={`/ProductDetails/${list.id}`}>
                <ListProduct list={list} />
              </Link>
            );
          else if (list.category === category)
            return (
              <Link key={list.id} to={`/ProductDetails/${list.id}`}>
                <ListProduct list={list} />
              </Link>
            );
        })}
      </ul>
    </div>
  );
}

export default ListsProduct;

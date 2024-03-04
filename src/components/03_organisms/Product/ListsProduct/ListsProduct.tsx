import ListProduct from '@/components/02_molecules/Product/ListProduct/ListProduct';
import { Link } from 'react-router-dom';

function ListsProduct({ category, productLists }) {
  console.log(category);
  return (
    <div className="px-[5.31rem] pb-12">
      <h2 className="sr-only">상품 리스트</h2>
      <ul className="grid grid-cols-4 gap-10">
        {productLists &&
          productLists.map((list) => {
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

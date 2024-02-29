import { pb } from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import ListProduct from '@/components/02_molecules/Product/ListProduct/ListProduct';
import { Link } from 'react-router-dom';
// import { useLoaderData, useParams } from 'react-router-dom';

function ListsProduct() {
  const [productLists, setProductLists] = useState([]);

  const getPbProductLists = async () => {
    return await pb
      .collection('product')
      .getList(1, 20, {
        sort: '-created',
      })
      .then((data) => {
        setProductLists(data.items);
      });
  };

  useEffect(() => {
    getPbProductLists();
  }, []);

  return (
    <div className="px-[5.31rem] pb-12">
      <h2 className="sr-only">상품 리스트</h2>
      <ul className="grid grid-cols-4 gap-10">
        {productLists &&
          productLists.map((list) => {
            if (list.isSale)
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

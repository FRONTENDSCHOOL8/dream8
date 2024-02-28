import { pb } from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import ListProduct from '../../molecules/ListProduct/ListProduct';
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
            if (list.isSale) return <ListProduct key={list.id} list={list} />;
          })}
      </ul>
    </div>
  );
}

export default ListsProduct;

import ArrangeProduct from '@/components/03_organisms/Product/ArrangeProduct/ArrangeProduct';
import CategoryProduct from '@/components/03_organisms/Product/CategoryProduct/CategoryProduct';
import ListsProduct from '@/components/03_organisms/Product/ListsProduct/ListsProduct';
import SearchProduct from '@/components/03_organisms/Product/SearchProduct/SearchProduct';
import { useCallback, useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';

function Product() {
  const [productLists, setProductLists] = useState([]);

  const [category, setCategory] = useState<string>('전체');
  const onSelect = useCallback((category: string) => setCategory(category), []);

  const getPbProductLists = async (): Promise<void> => {
    return await pb
      .collection('product')
      .getFullList({
        sort: '-created',
      })
      .then((data) => {
        setProductLists(data);
      });
  };

  useEffect(() => {
    getPbProductLists();
  }, []);

  return (
    <div className="flex flex-col gap-6 bg-white m-auto w-[90rem] pt-20">
      <h2 className="sr-only">판매 페이지</h2>
      <CategoryProduct onSelect={onSelect} />
      <SearchProduct />
      <ArrangeProduct />
      <ListsProduct category={category} productLists={productLists} />
    </div>
  );
}

Product.displayName = 'Product';

export default Product;

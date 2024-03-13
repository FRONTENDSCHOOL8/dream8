import Button from '@/components/01_atoms/Button/Button';
import ListProduct from '@/components/02_molecules/Product/ListProduct/ListProduct';
import { ProductListsType } from '@/types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface relativeProductsType {
  lists: ProductListsType[];
  category: string | unknown;
  currentProductId: string;
}

function RelativeProducts({
  lists,
  category,
  currentProductId,
}: relativeProductsType) {
  const withoutCurrentProductIdLists = lists.filter(
    (list) => list.id != currentProductId
  );
  const [viewNumber, setViewNumber] = useState(4);

  const handleShowMore = () => {
    if (viewNumber > lists.length) setViewNumber(4);
    else setViewNumber(viewNumber + 4);
  };
  return (
    <section className="flex flex-col text-center mb-24">
      <h2 className="text-3xl pb-14">관련 상품</h2>

      <ul className="flex flex-row gap-2 justify-center">
        {withoutCurrentProductIdLists
          .slice(viewNumber - 4, viewNumber)
          .map((list) => (
            <Link key={list.id} to={`/ProductDetails/${list.id}/${category}`}>
              <ListProduct list={list} />
            </Link>
          ))}

        <div className="flex items-center">
          <Button
            type="button"
            onClick={handleShowMore}
            className="border p-2 rounded-xl text-gray-500"
          >
            더보기
          </Button>
        </div>
      </ul>
    </section>
  );
}

export default RelativeProducts;

import ArrangeProduct from '../../organisms/ArrangeProduct/ArrangeProduct';
import CategoryProduct from '../../organisms/CategoryProduct/CategoryProduct';
import ListsProduct from '../../organisms/ListsProduct/ListsProduct';
import SearchProduct from '../../organisms/SearchProduct/SearchProduct';

function Product() {
  return (
    <div className="flex flex-col gap-6 bg-white mt-20">
      <h2 className="sr-only">판매 페이지</h2>
      <CategoryProduct />
      <SearchProduct />
      <ArrangeProduct />
      <ListsProduct />
    </div>
  );
}

Product.displayName = 'Product';

export default Product;

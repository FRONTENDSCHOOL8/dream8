import ArrangeProduct from '@/pages/Product/organisms/ArrangeProduct/ArrangeProduct';
import CategoryProduct from '@/pages/Product/organisms/CategoryProduct/CategoryProduct';
import ListsProduct from '@/pages/Product/organisms/ListsProduct/ListsProduct';
import SearchProduct from '@/pages/Product/organisms/SearchProduct/SearchProduct';

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

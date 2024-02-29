import ArrangeProduct from '@/components/03_organisms/Product/ArrangeProduct/ArrangeProduct';
import CategoryProduct from '@/components/03_organisms/Product/CategoryProduct/CategoryProduct';
import ListsProduct from '@/components/03_organisms/Product/ListsProduct/ListsProduct';
import SearchProduct from '@/components/03_organisms/Product/SearchProduct/SearchProduct';

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

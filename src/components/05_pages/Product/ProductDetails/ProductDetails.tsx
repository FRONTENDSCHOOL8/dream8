import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { pb } from '@/api/pocketbase';
import { useState } from 'react';
import SelectModal from '@/components/02_molecules/Modal/SelectModal/SelectModal';
import { Divider } from '@/components/01_atoms/Divider/Divider';
import ProductDetailsInfo from '@/components/04_templates/ProductDetails/ProductDetailsInfo/ProductDetailsInfo';
import { useQueries } from '@tanstack/react-query';
import useLoginFormStore from '@/store/useLoginFormStore';
import createMyCartData from '@/utils/createPbMyCart';
import RelativeProducts from '@/components/03_organisms/ProductDetails/RelativeProducts/RelativeProducts';

export function ProductDetails() {
  const { productId, productCategory } = useParams();
  const product = useLoaderData();
  const navigate = useNavigate();
  const [showModalMyCart, setShowModalMyCart] = useState(false);

  const results = useQueries({
    queries: [
      {
        queryKey: ['productDetail', productId],
        queryFn: () => fetchSingleProduct(productId),
        initialData: product.productDetail,
      },
      {
        queryKey: ['productCategoryLists'],
        queryFn: () => fetchFilteredCategoryProducts(productCategory),
        initialData: product.filteredCategoryProduct,
      },
    ],
  });

  const { isLoggedIn, userInfo } = useLoginFormStore();

  const handleClickPurchase = () => {
    if (isLoggedIn) {
      createMyCartData(userInfo.id, productId);
      navigate('/Payment');
    } else {
      navigate('/SignIn');
    }
  };
  const handleClickMyCart = () => {
    if (isLoggedIn) {
      createMyCartData(userInfo.id, productId);
      handleOpenModal();
    } else {
      navigate('/SignIn');
    }
  };

  const handleOpenModal = () => {
    setShowModalMyCart(true);
  };
  const handleCloseModal = () => {
    setShowModalMyCart(false);
    console.log('닫기');
  };

  const handleMoveToMyCart = () => {
    navigate('/Payment');
  };

  return (
    <div className="pt-20 w-[75rem] m-auto flex flex-col">
      <ProductDetailsInfo
        productData={results[0].data}
        onClickPurchase={handleClickPurchase}
        onClickMyCart={handleClickMyCart}
      />
      <Divider />
      <RelativeProducts
        lists={results[1].data}
        category={productCategory}
        currentProductId={productId}
      />
      {showModalMyCart && (
        <SelectModal
          title="장바구니 담기 완료"
          onClickYes={handleMoveToMyCart}
          onClickNo={handleCloseModal}
        >
          <p>구매하기 페이지로 넘어가시겠습니까?</p>
        </SelectModal>
      )}
    </div>
  );
}

async function fetchSingleProduct(productId: string) {
  return await pb.collection('product').getOne(productId);
}

async function fetchFilteredCategoryProducts(category) {
  const filter = `category = "${category}"`;
  return await pb.collection('product').getFullList({
    sort: '-created',
    filter: filter,
  });
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { productId, productCategory } = params;

    const productDetail = await queryClient.ensureQueryData({
      queryKey: ['productDetail', productId],
      queryFn: () => fetchSingleProduct(productId),
      cacheTime: 6000 * 10,
      staleTime: 1000 * 10,
    });
    const filteredCategoryProduct = await queryClient.ensureQueryData({
      queryKey: ['productCategoryLists'],
      queryFn: () => fetchFilteredCategoryProducts(productCategory),
      cacheTime: 6000 * 10,
      staleTime: 1000 * 10,
    });
    return { productDetail, filteredCategoryProduct };
  };

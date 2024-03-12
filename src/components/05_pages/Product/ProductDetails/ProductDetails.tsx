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
import { RecordModel } from 'pocketbase';
import useModal from '@/hooks/useModal';

export function ProductDetails() {
  const { productId, productCategory } = useParams();
  const product = useLoaderData();
  const navigate = useNavigate();
  const {
    isVisible: isSelectModalVisible,
    openModal: openSelectModal,
    closeModal: closeSelectModal,
  } = useModal();

  const results = useQueries({
    queries: [
      {
        queryKey: ['productDetail', productId],
        queryFn: () => productId,
        initialData: product.productDetail,
        staleTime: 1000 * 10,
      },
      {
        queryKey: ['productCategoryLists'],
        queryFn: () => fetchFilteredCategoryProducts(productCategory),
        initialData: product.filteredCategoryProduct,
        staleTime: 1000 * 10,
      },
    ],
  });

  const [productDetailData, productCategoryLists] = results;

  const { isLoggedIn, userInfo } = useLoginFormStore();

  const handleClickPurchase = () => {
    if (isLoggedIn) {
      createMyCartData(userInfo.id, productId).then(() => navigate('/Payment'));
    } else {
      navigate('/SignIn');
    }
  };
  const handleClickMyCart = () => {
    if (isLoggedIn) {
      createMyCartData(userInfo.id, productId);
      openSelectModal();
    } else {
      navigate('/SignIn');
    }
  };

  const handleMoveToMyCart = () => {
    navigate('/Payment');
  };

  return (
    <div className="pt-20 w-[75rem] m-auto flex flex-col">
      <ProductDetailsInfo
        productDetailData={productDetailData.data}
        onClickPurchase={handleClickPurchase}
        onClickMyCart={handleClickMyCart}
      />
      <Divider />
      <RelativeProducts
        lists={productCategoryLists.data}
        category={productCategory}
        currentProductId={productId}
      />
      {isSelectModalVisible && (
        <SelectModal
          title="장바구니 담기 완료"
          onClickYes={handleMoveToMyCart}
          onClickNo={closeSelectModal}
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

async function fetchFilteredCategoryProducts(category: string) {
  const filter = `category = "${category}"`;
  return await pb.collection('product').getFullList({
    sort: '-created',
    filter: filter,
  });
}

export const loader =
  (queryClient: {
    ensureQueryData: (arg0: {
      queryKey: string[] | any[];
      queryFn: (() => Promise<RecordModel>) | (() => Promise<RecordModel[]>);
    }) => any;
  }) =>
  async ({ params }: any) => {
    const { productId, productCategory } = params;

    const productDetail = await queryClient.ensureQueryData({
      queryKey: ['productDetail', productId],
      queryFn: () => fetchSingleProduct(productId),
    });
    const filteredCategoryProduct = await queryClient.ensureQueryData({
      queryKey: ['productCategoryLists'],
      queryFn: () => fetchFilteredCategoryProducts(productCategory),
    });
    return { productDetail, filteredCategoryProduct };
  };

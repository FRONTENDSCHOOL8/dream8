import { pb } from '@/api/pocketbase';
import { Divider } from '@/components/01_atoms/Divider/Divider';
import MetaTag from '@/components/01_atoms/MetaTag/MetaTag';
import SelectModal from '@/components/02_molecules/Modal/SelectModal/SelectModal';
import RelativeProducts from '@/components/03_organisms/ProductDetails/RelativeProducts/RelativeProducts';
import ProductDetailsInfo from '@/components/04_templates/ProductDetails/ProductDetailsInfo/ProductDetailsInfo';
import useModal from '@/hooks/useModal';
import useLoginFormStore from '@/store/useLoginFormStore';
import createMyCartData from '@/utils/createPbMyCart';
import { useQueries } from '@tanstack/react-query';
import { RecordModel } from 'pocketbase';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

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

  const metaTag = {
    title: '상품상세 페이지',
    pageDescription: '드림의 상품상세 페이지 입니다',
    keywords: 'dream, 판매, 헌옷, 기부, 후원, 지구사랑, 환경, 공헌',
    imgSrc: '/logoOG.png',
    path: `ProductDetails/${productId}/${productCategory}`,
  };

  return (
    <>
      <MetaTag metaTag={metaTag} />
      <div className="py-36 w-[75rem] m-auto flex flex-col">
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
    </>
  );
}

async function fetchSingleProduct(productId: string) {
  return await pb.collection('product').getOne(productId);
}

async function fetchFilteredCategoryProducts(category: string) {
  const filter = `category = "${category}" && isSale = true`;
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

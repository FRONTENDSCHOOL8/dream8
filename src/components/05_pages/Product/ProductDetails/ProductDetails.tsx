import Cautions from '@/pages/Product/atoms/Cautions';
import timerIcon from '/timer.svg';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { pb } from '@/api/pocketbase';
import { getPbImage, getPbImageURL } from '@/utils/getPbImage';
import { useEffect, useState } from 'react';

import SelectModal from '@/components/02_molecules/Modal/SelectModal/SelectModal';
import Button from '@/components/01_atoms/Button/Button';
import { Link } from 'react-router-dom';
import getDaysFromToday from '@/utils/getDaysFromToday';
import ShowProductImage from '@/components/03_organisms/ProductDetails/ShowProductImage/ShowProductImage';

function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);

  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState({
    id: '',
    collectionId: '',
    collectionName: 'product',
    created: '',
    updated: '',
    title: '',
    price: 0,
    photo: [],
    grade: '',
    description: '',
    brand_name: '',
    model_name: '',
    size: '',
    isSale: true,
    category: '',
  });

  const navigate = useNavigate();

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleMoveToMyCart = () => {
    navigate('/Payment');
  };

  // const product = useLoaderData();
  // console.log(product);

  async function fetchSingleProduct(productId: string) {
    return await pb
      .collection('product')
      .getOne(productId)
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  }

  useEffect(() => {
    fetchSingleProduct(productId);
  }, []);

  // const data = useQuery({
  //   queryKey: ['product', productId],
  //   queryFn: fetchSingleProduct,
  //   initialData: product,
  // });

  // const data = fetchSingleProduct(productId);
  // const data = useQuery({
  //   queryKey: ['product', productId],
  //   queryFn: fetchSingleProduct,
  //   initialData: product,
  // });

  // const {
  //   data: {
  //     created,
  //     title,
  //     photo,
  //     grade,
  //     description,
  //     brand_name,
  //     model_name,
  //     size,
  //     category,
  //   },
  // } = useQuery({
  //   queryKey: ['product', productId],
  //   queryFn: fetchSingleProduct,
  //   initialData: product,
  // });

  const photo = productData.photo;
  const pbUrl = getPbImage(productData.collectionId, productData.id, '');
  return (
    <div className="pt-20 w-[75rem] m-auto">
      <h2 className="sr-only">상품 디테일 페이지</h2>
      {productData && (
        <>
          <div className="flex justify-between gap-14">
            {photo.length > 1 && (
              <ShowProductImage
                photoURL={pbUrl}
                photos={photo}
                title={productData.title}
              />
            )}
            <div className="flex flex-col justify-between">
              <div role="group">
                <h3 className="text-3xl">
                  {productData.title} ({productData.size})
                </h3>
                <p className="flex gap-1 mt-5">
                  <img src={timerIcon} alt="타이머 아이콘" />
                  {getDaysFromToday(productData.created)}
                </p>
              </div>
              <div role="group" className="flex flex-col gap-4">
                <p>
                  상품상태: <span>{productData.grade}급</span>
                </p>
                <p>
                  금액: <span>{productData.price.toLocaleString()}원</span>
                </p>
                <p>
                  배송비: <span>배송비 별도</span>
                </p>
              </div>
              <Cautions />
              <div role="group" className="grid grid-cols-2 gap-5">
                <Link
                  to="/Payment"
                  className="text-2xl border-[3px] border-blue-primary font-semibold text-blue-primary rounded-md hover:text-white hover:bg-blue-primary py-2 text-center"
                >
                  구매하기
                </Link>
                <Button
                  onClick={handleOpenModal}
                  className="text-2xl border-[3px] border-blue-primary font-semibold text-blue-primary rounded-md hover:text-white hover:bg-blue-primary py-2"
                  type="button"
                >
                  장바구니
                </Button>
              </div>
            </div>
          </div>
          <div className="border-b border-[#eee] my-20"></div>
          <div className="text-center">
            <h2 className="text-3xl">상품 설명</h2>
            <figure>
              <img src="" alt="" className="w-96 h-auto border" />
            </figure>
            <div className="w-[43.75rem] text-start m-auto">
              <p>
                {productData.brand_name} {productData.model_name}
              </p>
              {productData.description.split('. ').map((line, index) => (
                <p key={`product_Description_${index}`}>{line}.</p>
              ))}
              <p>사이즈:{productData.size}</p>
            </div>
          </div>
        </>
      )}
      {showModal && (
        <>
          <SelectModal
            title="장바구니 담기 완료"
            onClose={handleCloseModal}
            onLink={handleMoveToMyCart}
          >
            <p>구매하기 페이지로 넘어가시겠습니까?</p>
          </SelectModal>
        </>
      )}
    </div>
  );
}

// async function fetchSingleProduct(productId: string) {
//   const product = await pb.collection('product').getOne(productId);
//   // product.photo = getPbImage(product);
//   return product;
// }

// export const loader =
//   (queryClient) =>
//   async ({ params }) => {
//     const { productId } = params;
//     return await queryClient.ensureQueryData({
//       queryKey: ['product', productId],
//       queryFn: () => fetchSingleProduct(productId),
//       staleTime: 1000 * 10, // 10s
//     });
//   };

export default ProductDetails;

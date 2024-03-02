import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { pb } from '@/api/pocketbase';
import { getPbImage, getPbImageURL } from '@/utils/getPbImage';
import { useEffect, useState } from 'react';
import SelectModal from '@/components/02_molecules/Modal/SelectModal/SelectModal';
import { Divider } from '@/components/01_atoms/Divider/Divider';
import ProductDetailsInfo from '@/components/04_templates/ProductDetails/ProductDetailsInfo/ProductDetailsInfo';

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

  return (
    <div className="pt-20 w-[75rem] m-auto flex flex-col">
      <ProductDetailsInfo
        productData={productData}
        onOpenModal={handleOpenModal}
      />
      <Divider />
      <section className="flex flex-col text-center">
        <h2 className="text-3xl">관련 상품</h2>
        <ul className="flex flex-row">
          <li>아이템</li>
          <li>아이템</li>
        </ul>
      </section>
      {showModal && (
        <SelectModal
          title="장바구니 담기 완료"
          onClose={handleCloseModal}
          onLink={handleMoveToMyCart}
        >
          <p>구매하기 페이지로 넘어가시겠습니까?</p>
        </SelectModal>
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

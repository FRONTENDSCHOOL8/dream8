import Cautions from '@/pages/Product/atoms/Cautions';
import timerIcon from '/timer.svg';
import { useLoaderData, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { pb } from '@/api/pocketbase';
import { getPbImage } from '@/utils/getPbImage';
import { useEffect, useState } from 'react';

function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);
  // const product = useLoaderData();
  // console.log(product);

  // async function fetchSingleProduct(productId: string) {
  //   const product = await pb.collection('product').getOne(productId);
  //   // product.photo = getPbImage(product);
  //   return product;
  // }

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
    <div className="pt-20 w-[75rem] m-auto">
      <h2 className="sr-only">상품 디테일 페이지</h2>
      <div className="flex justify-between gap-14">
        <figure className="flex flex-col border m-0">
          <img src="" alt="" className="w-96 h-[31.25rem] border" />
          <div aria-label="썸네일 버튼">
            <ul>
              <li>
                <button>
                  <img src="" alt="" className="w-12 h-12" />
                </button>
              </li>
            </ul>
          </div>
        </figure>
        <div className="flex flex-col justify-between">
          <div role="group">
            <h3 className="text-3xl">주머니 포인트 청바지 (M)</h3>
            <p className="flex gap-1 mt-5">
              <img src={timerIcon} alt="타이머 아이콘" /> 2달전
            </p>
          </div>
          <div role="group" className="flex flex-col gap-4">
            <p>
              상품상태: <span>A급</span>
            </p>
            <p>
              금액: <span>12,000원</span>
            </p>
            <p>
              배송비: <span>배송비 별도</span>
            </p>
          </div>
          <Cautions />
          <div role="group" className="grid grid-cols-2 gap-5">
            <button className="text-2xl border-[3px] border-blue-primary font-semibold text-blue-primary rounded-md hover:text-white hover:bg-blue-primary py-2">
              구매하기
            </button>
            <button
              onClick={}
              className="text-2xl border-[3px] border-blue-primary font-semibold text-blue-primary rounded-md hover:text-white hover:bg-blue-primary py-2"
            >
              장바구니
            </button>
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
          <p>(새상품) 키치워크 와이드 데님팬츠 연청 M</p>
          <p>
            키치워크 와이드 데님팬츠 연청 17000원에 판매합니다.(정가
            95000원)미착용 새상품이고 짐 정리하면서 저렴하게 판매합니다. 가격
            대비 만족하실 거에요.와이드핏이며 사이즈 M(27)입니다.바지 핏은
            마지막컷 참고해주세요.
          </p>
          <p>사이즈:M</p>
        </div>
      </div>
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

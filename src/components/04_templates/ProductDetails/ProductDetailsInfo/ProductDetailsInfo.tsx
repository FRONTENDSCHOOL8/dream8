import ShowProductImage from '@/components/03_organisms/ProductDetails/ShowProductImage/ShowProductImage';
import getDaysFromToday from '@/utils/getDaysFromToday';
import { getPbImage } from '@/utils/getPbImage';
import timerIcon from '/timer.svg';
import Cautions from '@/components/01_atoms/Product/Cautions';
import Button from '@/components/01_atoms/Button/Button';
import { Divider } from '@/components/01_atoms/Divider/Divider';

interface ProductDetailsInfoType {
  productData: object;
  onClickPurchase: () => void;
  onClickMyCart: () => void;
}
function ProductDetailsInfo({
  productData,
  onClickPurchase,
  onClickMyCart,
}: ProductDetailsInfoType) {
  const photo = productData.photo;
  const pbUrl = getPbImage(productData.collectionId, productData.id, '');

  return (
    <section>
      <h2 className="sr-only">상품 디테일 페이지</h2>
      {
        <>
          <div className="flex justify-between gap-14">
            {photo.length > 0 && (
              <ShowProductImage
                photoURL={pbUrl}
                photos={photo}
                title={productData.title}
              />
            )}
            <div className="flex flex-col justify-between">
              <div role="group">
                <h3 className="text-3xl">{productData.title}</h3>
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
                  사이즈: <span>{productData.size}</span>
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
                <Button
                  onClick={onClickPurchase}
                  className="text-2xl border-[3px] border-blue-primary font-semibold text-blue-primary rounded-md hover:text-white hover:bg-blue-primary py-2 text-center"
                  type="button"
                >
                  구매하기
                </Button>
                <Button
                  onClick={onClickMyCart}
                  className="text-2xl border-[3px] border-blue-primary font-semibold text-blue-primary rounded-md hover:text-white hover:bg-blue-primary py-2"
                  type="button"
                >
                  장바구니
                </Button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="text-center">
            <h2 className="text-3xl mb-10">상품 설명</h2>

            <figure className="flex flex-col justify-center items-center gap-8">
              {photo &&
                photo.map((item, index) => (
                  <img
                    src={`${pbUrl}${item}`}
                    alt={`${productData.title}_${index + 1}`}
                    className="w-[60rem] h-auto border"
                    key={`${productData.title}_${index + 1}`}
                  />
                ))}
            </figure>
            <div className="w-[43.75rem] text-start m-auto py-10 text-xl">
              <p>
                {productData.brand_name} {productData.model_name}
              </p>
              {productData.description.split('. ').map((line, index) => (
                <p key={`product_Description_${index}`} className="my-4">
                  {line}
                </p>
              ))}
              <p>사이즈:{productData.size}</p>
            </div>
          </div>
        </>
      }
    </section>
  );
}

export default ProductDetailsInfo;

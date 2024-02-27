import { useParams } from 'react-router-dom';
import { useExchangeStore } from '@/pages/Exchange/page/Exchange/Exchange';
import ExchangeBox from '../../atom/ExchangeBox';
import { getPbImageURL } from '@/utils/getPbImage';
import Profile from '@/components/Profile/Profile';
import ExchangeModify from '@/pages/Exchange/molecules/ExchangeModify';

function ExchangeDetail() {
  const { id } = useParams();
  const { exchangeData } = useExchangeStore();

  const selectedItem = exchangeData.find((item) => item.id === id);
  console.log(selectedItem);

  if (!selectedItem) {
    return <div>해당 아이템을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="pl-20">
      <div className="pt-5 flex">
        <img
          src={getPbImageURL(selectedItem, 'product_img')}
          className="w-[19.5rem] border rounded-xl"
        />
        <div className="flex flex-col pl-14 gap-6">
          <p>{selectedItem.type}</p>
          <h2 className="text-2xl">{selectedItem.title}</h2>
          <ExchangeBox name="교환가능"></ExchangeBox>
          <div className="border border-gray-200 p-2">
            <Profile />
          </div>
          <p className="text-gray-100 text-xs">
            중고 물품 물물 거래만 가능합니다. <br />
            금전 거래를 자제해주세요.
          </p>
          <ExchangeModify />
        </div>
      </div>
      <div className="pt-10 flex flex-col">
        <h1 className="text0">상품정보</h1>
        <p className="w-11/12 border h-52 p-4">{selectedItem.product_detail}</p>
      </div>
    </div>
  );
}

export default ExchangeDetail;

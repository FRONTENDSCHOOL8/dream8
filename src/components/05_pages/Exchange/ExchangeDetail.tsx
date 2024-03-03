import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils/getPbImage';
import Profile from '@/components/Profile/Profile';
import ExchangeModify from '@/pages/Exchange/molecules/ExchangeModify';
import Exchangeable from '@/components/01_atoms/StateBox/StateBox';
import { useListStore } from '@/store/useListStore';

function ExchangeDetail() {
  const { id } = useParams();
  const { Data } = useListStore();

  const selectedItem = Data.find((item) => item.id === id);
  console.log(selectedItem);

  if (!selectedItem) {
    return <div>해당 아이템을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="pl-20" style={{ height: `calc(100vh - 82px - 156px)` }}>
      <div className="pt-10 flex">
        <img
          src={getPbImageURL(selectedItem, 'product_img')}
          className="w-[18.75rem] h-[18.75rem] rounded-xl"
        />
        <div className="flex flex-col pl-14 gap-6 ">
          <p>{selectedItem.type}</p>
          <h2 className="text-2xl">{selectedItem.title}</h2>
          <Exchangeable
            className="bg-orange-primary text-white w-14 text-[0.875rem] flex justify-center items-center rounded-[0.3125rem]"
            name="교환가능"
          ></Exchangeable>
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
        <h1>상품정보</h1>
        <p className="w-11/12 border rounded-md h-52 p-4">
          {selectedItem.product_detail}
        </p>
      </div>
    </div>
  );
}

export default ExchangeDetail;
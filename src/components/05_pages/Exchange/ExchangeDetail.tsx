import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils/getPbImage';
import { useListStore } from '@/store/useListStore';
import StateBox from '@/components/StateBox/StateBox';
import User from '@/components/02_molecules/Exchange/User/User';
import useLoginFormStore from '@/store/useLoginFormStore';
import Chat_Modify from '@/components/02_molecules/Exchange/Button/Chat_Modify';

function ExchangeDetail() {
  const { id } = useParams();
  const { Data } = useListStore();
  const { isLoggedIn, userInfo } = useLoginFormStore();

  const selectedItem = Data.find((item) => item.id === id);
  const userData = selectedItem?.expand.field[0]?.id;

  const userName = selectedItem?.expand.field[0]?.user_name;
  const Edit = userData === userInfo.id;

  if (!selectedItem) {
    return <div>해당 아이템을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-10">
      <div className=" flex">
        <img
          src={getPbImageURL(selectedItem, 'product_img')}
          className="w-[18.75rem] h-[18.75rem] rounded-xl"
        />
        <div className="flex flex-col pl-14 gap-6 ">
          <p>{selectedItem.type}</p>
          <h2 className="text-2xl">{selectedItem.title}</h2>
          <StateBox
            className="bg-orange-primary text-white w-14 text-[0.875rem] flex justify-center items-center rounded-[0.3125rem]"
            name="교환가능"
          ></StateBox>
          <div className="border border-gray-200 p-2">
            <User userName={userName} />
          </div>
          <p className="text-gray-100 text-xs">
            중고 물품 물물 거래만 가능합니다. <br />
            금전 거래를 자제해주세요.
          </p>
          <Chat_Modify Edit={Edit} id={id} />
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

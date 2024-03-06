import Button01 from '@/components/01_atoms/Button/Button01';
import Trash from '/Trash.svg';

interface EditProp {
  Edit: boolean;
}

function ExchangeModify({ Edit }: EditProp) {
  return Edit ? (
    <div className="flex items-center gap-4">
      <Button01
        type="button"
        className="p-0 w-80 h-10 hover:bg-blue-primary hover:text-white"
      >
        게시글 수정하기
      </Button01>
      <Button01 className="p-0 border-none" type="button">
        <img src={Trash} />
      </Button01>
    </div>
  ) : (
    <Button01
      type="button"
      className="p-0 w-80 h-10 hover:bg-blue-primary hover:text-white"
    >
      채팅하기
    </Button01> // Edit이 false일 때 아무것도 렌더링하지 않음
  );
}

export default ExchangeModify;

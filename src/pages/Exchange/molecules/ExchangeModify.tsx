import DeleteButton from '@/components/Button/DeleteButton';
import ExchangeModifyButton from '@/pages/Exchange/atom/ExchangeModifyButton';

function ExchangeModify() {
  return (
    <div className="flex items-center gap-4">
      <ExchangeModifyButton name="게시글 작성" />
      <DeleteButton />
    </div>
  );
}

export default ExchangeModify;

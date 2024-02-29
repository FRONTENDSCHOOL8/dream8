import MoreButton from '@/components/Button/MoreButton';
import ExchangeLogin from '../atom/ExchangeLogin';
import ExchangeLoginText from '../atom/ExchangeLoginText';

function ExchangeMore() {
  return (
    <div className="pt-2 flex flex-col justify-center items-center gap-3">
      <MoreButton />
      <ExchangeLoginText />
      <ExchangeLogin />
    </div>
  );
}

export default ExchangeMore;

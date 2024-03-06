import Button from '@/components/01_atoms/Button/Button';
import Image from '@/components/01_atoms/Image/Image';
import cap from '/cap.svg';
import Button01 from '@/components/01_atoms/Button/Button01';

interface TransactionListCardProps {
  alt: string;
  src: string;
  resultValue: string;
  content: string | Array<string>;
}
const TransactionListCard: React.FC<TransactionListCardProps> = ({
  alt,
  src,
  resultValue,
  content,
}) => {
  const defaultImageSrc = cap;

  const handleClick = () => {
    console.log('이동화면은 아직 미구현입니다');
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="transactionListCard-molecules"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
    >
      <div className="flex-2 bg-gray-300 rounded-l-[2rem] w-[15%] h-full overflow-hidden">
        <Image
          src={src || defaultImageSrc}
          alt={alt}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="flex-1">{content}</div>
      <Button01 type="button" className="bg-blue-primary text-white mr-10 ">
        {resultValue}
      </Button01>
    </div>
  );
};

export default TransactionListCard;

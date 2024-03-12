import React from 'react';
import Button01 from '@/components/01_atoms/Button/Button01';
import Logo from '/logo.svg';
import { useNavigate } from 'react-router-dom';
import usePhotoGridLayout from '@/hooks/usePhotoGridLayout';

interface TransactionListCardProps {
  src: Array<string>;
  content: string | Array<string>;
  isPayed: boolean;
  className?: string;
  type: string;
}

const TransactionListCard: React.FC<TransactionListCardProps> = ({
  src,
  content,
  isPayed,
  className,
  type,
}) => {
  const [rows, setRows] = usePhotoGridLayout(src);
  const navigate = useNavigate();
  const defaultImage = Logo;

  const handleClick = () => {
    if (type === 'mycart') {
      navigate('/Payment');
    } else if (type === 'sponsorship') {
    } else if (type === 'exchange') {
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`transactionListCard-molecules ${className} w-full justify-between`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
    >
      <div className="grid gap-1">
        {rows.length > 0 ? (
          rows.map((row, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[6.25rem] max-w-[60%]"
            >
              {row.map((image, idx) => (
                <div key={idx}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full max-w-[200px] h-auto"
                  />
                </div>
              ))}
            </div>
          ))
        ) : (
          <img
            src={defaultImage}
            alt={'기본 이미지'}
            className="w-full max-w-[200px] h-auto"
          />
        )}
      </div>

      <div className="flex-1 ml-4 max-w-[60%] overflow-wrap break-words text-xl font-semibol">
        {content}
      </div>
      {isPayed && (
        <Button01 type="button" className="bg-blue-primary text-white text-lg">
          {' 완료 '}
        </Button01>
      )}
    </div>
  );
};

export default TransactionListCard;

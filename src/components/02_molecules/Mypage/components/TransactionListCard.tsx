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
      className={`transactionListCard-molecules ${className}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
    >
      <div>
        {rows.length > 0 ? (
          rows.map((row, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] rounded-[20px] shadow-root flex justify-center items-center overflow-hidden"
            >
              {row.map((image, idx) => (
                <div key={idx} className="w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))
        ) : (
          <img
            src={defaultImage}
            alt={'드림로고'}
            className="w-[70px] h-[70px]"
          />
        )}
      </div>

      <div className="w-[50%] truncate break-words text-xl font-semibol">
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

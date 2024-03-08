import React, { useState } from 'react';
import Button01 from '@/components/01_atoms/Button/Button01';
import Logo from '/logo.svg';
import { useNavigate } from 'react-router-dom';

interface TransactionListCardProps {
  src: Array<string>;
  content: string | Array<string>;
  isPayed: boolean;
  className: string;
}

const TransactionListCard: React.FC<TransactionListCardProps> = ({
  src,
  content,
  isPayed,
  className,
}) => {
  const [rows, setRows] = useState<Array<Array<{ src: string; alt: string }>>>(
    []
  );
  const [images, setImages] = useState<Array<{ src: string; alt: string }>>([]);
  const navigate = useNavigate();
  const defaultImage = Logo;

  // 컴포넌트가 마운트될 때 이미지 상태를 업데이트합니다.
  useState(() => {
    const newImages = src.map((item, index) => ({
      src: item,
      alt: `Image ${index + 1}`,
    }));
    setImages(newImages);

    const newRows = [];
    for (let i = 0; i < newImages.length; i += 2) {
      newRows.push(newImages.slice(i, i + 2));
    }
    setRows(newRows);
  }, [src]);

  const handleClick = () => {
    navigate('/Payment');
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`transactionListCard-molecules ${className} `}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
    >
      <div className="grid gap-1 ">
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
        <Button01
          type="button"
          className="bg-blue-primary text-white mr-10 text-xl"
        >
          {' 완료 '}
        </Button01>
      )}
    </div>
  );
};

export default TransactionListCard;

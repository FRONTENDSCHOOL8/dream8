import Button from '@/components/01_atoms/Button/Button';
import { useState } from 'react';

interface ShowProductImageProps {
  photoURL: string;
  photos: string[];
  title: string;
}

function ShowProductImage({ photoURL, photos, title }: ShowProductImageProps) {
  const [mainImageSrc, setMainImageSrc] = useState(`${photoURL}${photos[0]}`);
  const [mainImageAlt, setMainImageAlt] = useState(`${title}_1`);
  const handleShowThumbnailImage = (image: string, index: number) => {
    setMainImageSrc(`${photoURL}${image}`);
    setMainImageAlt(`${title}_${index}`);
  };

  return (
    <figure className="flex flex-col m-0">
      <div className="min-h-[28rem]">
        <img
          src={mainImageSrc}
          alt={mainImageAlt}
          className="w-96 h-auto border"
        />
      </div>
      <ul aria-label="썸네일 버튼" className="flex mt-4 gap-3">
        {photos.map((item, index) => (
          <li key={`product_Photo_${index + 1}`}>
            <Button
              onClick={() => handleShowThumbnailImage(item, index + 1)}
              className=""
              type="button"
            >
              <img
                src={`${photoURL}${photos[index]}`}
                alt={`${title}_${index + 1}`}
                className="w-12 h-12"
              />
            </Button>
          </li>
        ))}
      </ul>
    </figure>
  );
}

export default ShowProductImage;

import React from 'react';
import profilephoto from 'public/profile.svg';

interface ImageWithCaptionProps {
  src?: string;
  alt: string;
  caption?: string;
  width?: string;
  height?: string;
  className?: string;
}

const defaultImageSrc = profilephoto; // 기본 이미지 경로

function Image({
  src,
  alt,
  caption,
  width,
  height,
  className,
  ...restProps
}: ImageWithCaptionProps) {
  return (
    <figure className={className}>
      <img
        src={src || defaultImageSrc} // src가 없을 경우 기본 이미지 경로를 사용
        alt={alt}
        width={width}
        height={height}
        {...restProps}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default Image;

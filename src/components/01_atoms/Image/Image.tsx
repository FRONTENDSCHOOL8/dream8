interface ImageProps {
  url: string;
  alt: string;
  width: string;
  height: string;
}

function Image({ url, alt, width, height }: ImageProps) {
  <figure>
    <img src={url} alt={alt} width={width} height={height} />
  </figure>;
}

export default Image;

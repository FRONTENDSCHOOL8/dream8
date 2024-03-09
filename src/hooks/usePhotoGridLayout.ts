import { useState, useEffect } from 'react';

type Image = {
  src: string;
  alt: string;
};

const usePhotoGridLayout = (initialImages: string[]) => {
  const [rows, setRows] = useState<Image[][]>([]);

  useEffect(() => {
    const newImages = initialImages.map((item, index) => ({
      src: item,
      alt: `Image ${index + 1}`,
    }));

    const newRows = [];
    for (let i = 0; i < newImages.length; i += 2) {
      newRows.push(newImages.slice(i, i + 2));
    }
    setRows(newRows);
  }, [initialImages]);

  return [rows, setRows] as const;
};

export default usePhotoGridLayout;

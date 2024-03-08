import SubmitButton from '@/components/Button/SubmitButton';
import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import { pb } from '@/api/pocketbase';
import { useListStore } from '@/store/useListStore';
import { useParams } from 'react-router-dom';
import ConfirmModal from '@/components/02_molecules/Modal/ConfirmModal/ConfirmModal';
import { useQuery } from '@tanstack/react-query';
import useGetOneUser from '@/hooks/useGetOneUser';
import { getPbImageURL } from '@/utils/getPbImage';

interface InputItem {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

interface InputData {
  title: string;
  type: string;
  brand: string;
  model_name: string;
  grade: string;
  trade_method: string;
  product_detail: string;
  product_img: File | string;
}

export function ExchangeModify() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['exchangeModify'],
    queryFn: () => useGetOneUser(id),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState({ title: '', message: '' });
  const [inputData, setInputData] = useState<InputData>({
    title: '',
    type: '',
    brand: '',
    model_name: '',
    grade: '',
    trade_method: '',
    product_detail: '',
    product_img: '',
  });

  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    ''
  );

  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedItem = data?.id === id;

  useEffect(() => {
    if (selectedItem && data) {
      setInputData({
        title: data.title,
        type: data.type,
        brand: data.brand,
        model_name: data.model_name,
        grade: data.grade,
        trade_method: data.trade_method,
        product_detail: data.product_detail,
        product_img: data.product_img,
      });
    }
  }, [data, selectedItem]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_img', inputData.product_img as File);

    try {
      await pb.collection('exchange').update(id, inputData, formData);
      setIsOpen(true);
      setText({ title: '성공', message: '데이터 변경에 성공했습니다' });
    } catch (error) {
      setIsOpen(true);
      setText({ title: '실패', message: '데이터 변경에 실패했습니다' });
    }
  };
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];

      setInputData({ ...inputData, product_img: selectedImage });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    label: string
  ) => {
    const { value } = e.target;
    setInputData({ ...inputData, [label]: value });
  };

  if (!selectedItem) {
    return '로딩중입니다...';
  }

  const inputList: InputItem[] = [
    { name: '제목', label: 'title', type: 'text' },
    {
      name: '종류',
      label: 'type',
      type: 'text',
      options: ['옷', '잡화', '기타'],
    },
    { name: '브랜드', label: 'brand', type: 'text' },
    { name: '모델명', label: 'model_name', type: 'text' },
    {
      name: '상태등급',
      label: 'grade',
      type: 'text',
      options: ['A', 'B', 'C'],
    },
    { name: '거래 방법', label: 'trade_method', type: 'text' },
  ];

  return (
    <div className="pb-10">
      <h1 className="flex items-center justify-center text-[1.875rem] p-10">
        교환 게시글 수정하기
      </h1>
      <div className="flex flex-col m-auto justify-center items-center w-6/12 gap-4 pt-10 border rounded-xl pb-10">
        <form className="flex flex-col gap-10 w-80" onSubmit={handleSubmit}>
          {inputList.map((item, index) => (
            <div
              key={index}
              className="flex justify-end items-center gap-3 pr-2"
            >
              <label className="text-right">{item.name}</label>
              {item.options ? (
                <select
                  className="bg-gray-300 h-8 w-60"
                  onChange={(e) => handleChange(e, item.label)}
                  value={inputData[item.label]}
                >
                  {item.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="bg-gray-300 h-8 w-60"
                  value={inputData[item.label]}
                  onChange={(e) => handleChange(e, item.label)}
                />
              )}
            </div>
          ))}
          <div className="flex flex-col items-center gap-3">
            <label>상세 설명</label>
            <textarea
              className="h-36 w-full p-2 bg-gray-300"
              value={inputData.product_detail}
              onChange={(e) => handleChange(e, 'product_detail')}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-20">사진 업로드</label>
            <button
              type="button"
              className="w-24 rounded-md text-blue-primary border-blue-primary border-2"
              onClick={handleUploadButtonClick}
            >
              파일선택
            </button>
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
          </div>
          <div className="rounded-md">
            <img
              src={
                previewImage
                  ? previewImage.toString()
                  : getPbImageURL(data, 'product_img')
              }
              alt="Uploaded preview"
              className="object-cover h-44 w-full"
            />
          </div>
          <SubmitButton name="제출하기" />
        </form>
      </div>
      {isOpen && (
        <ConfirmModal title={text.title} onClose={() => setIsOpen(false)}>
          {text.message}
        </ConfirmModal>
      )}
    </div>
  );
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    return await queryClient.ensureQueryData({
      queryKey: ['exchangeModify', id],
      queryFn: () => useGetOneUser(id),
      cacheTime: 6000 * 10,
      staleTime: 1000 * 10,
    });
  };

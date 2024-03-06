import SubmitButton from '@/components/Button/SubmitButton';
import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { pb } from '@/api/pocketbase';
import Input from '@/components/01_atoms/Input/Input';
import TextArea from '@/components/01_atoms/TextArea/TextArea';
import Button from '@/components/01_atoms/Button/Button';
import useLoginFormStore from '@/store/useLoginFormStore';
import ConfirmModal from '@/components/02_molecules/Modal/ConfirmModal/ConfirmModal';

interface InputItem {
  name: string;
  label: string;
  type: string;
  options?: string[];
}

function ExchangeWrite() {
  const { isLoggedIn, userInfo } = useLoginFormStore();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState({
    title: '',
    message: '',
  });

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

  const [inputData, setInputData] = useState({
    title: '',
    type: '옷',
    brand: '',
    model_name: '',
    grade: 'A',
    trade_method: '',
    product_detail: '',
    product_img: '',
    field: '',
  });

  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    ''
  );

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setOpen(true);
      setText({
        title: '실패',
        message: '로그인이 필요합니다.',
      });
      return;
    }

    if (
      !inputData.title ||
      !inputData.brand ||
      !inputData.model_name ||
      !inputData.trade_method ||
      !inputData.product_img
    ) {
      setOpen(true);
      setText({
        title: '실패',
        message: '빈 값을 입력했습니다 모두 입력해주세요.',
      });
      return;
    }

    if (inputData.product_detail.length >= 500) {
      setOpen(true);
      setText({
        title: '실패',
        message: '상세 설명은 500글자 아래로 작성해주세요!',
      });
      return;
    }

    const formData = new FormData();
    formData.append('product_img', inputData.product_img);

    try {
      await pb.collection('exchange').create(
        {
          ...inputData,
          field: userInfo.id,
        },
        formData
      );
      setOpen(true);
      setText({
        title: '성공',
        message: '데이터 저장에 성공했습니다.',
      });
      setInputData({
        title: '',
        type: '옷',
        brand: '',
        model_name: '',
        grade: 'A',
        trade_method: '',
        product_detail: '',
        product_img: '',
        field: '',
      });
      setPreviewImage('');
    } catch (error) {
      setOpen(true);
      setText({
        title: '실패',
        message: '데이터 저장에 실패했습니다. 다시 시도해주세요.',
      });
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setInputData({ ...inputData, product_img: e.target.files[0] });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
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

  return (
    <div className="pb-10">
      <h1 className="flex items-center justify-center text-[1.875rem] p-10">
        교환 게시글 작성
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
                  value={inputData[item.label] || item.options[0]}
                >
                  {item.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <Input
                  id=""
                  type={item.type}
                  className="bg-gray-300 h-8 w-60"
                  value={inputData[item.label] || ''}
                  onChange={(e) => handleChange(e, item.label)}
                />
              )}
            </div>
          ))}
          <div className="flex flex-col items-center gap-3">
            <label>상세 설명</label>
            <TextArea
              name="상세설명"
              className="h-36 w-full p-2 bg-gray-300"
              value={inputData.product_detail}
              onChange={(e) => handleChange(e, 'product_detail')}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-20">사진 업로드</label>
            <Button
              type="button"
              className="w-24 rounded-md text-blue-primary border-blue-primary border-2"
              onClick={handleUploadButtonClick}
            >
              파일선택
            </Button>
            <input
              id=""
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
          </div>
          <div className="rounded-md bg-gray-300">
            <img
              src={previewImage?.toString()}
              alt=""
              className="object-cover h-36 w-full"
            />
          </div>
          <SubmitButton name="제출하기" />
          {open && (
            <ConfirmModal title={text.title} onClose={() => setOpen(false)}>
              {text.message}
            </ConfirmModal>
          )}
        </form>
      </div>
    </div>
  );
}

export default ExchangeWrite;

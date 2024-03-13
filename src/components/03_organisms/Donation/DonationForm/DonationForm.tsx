import Input from '@/components/01_atoms/Input/Input';
import TextArea from '@/components/01_atoms/TextArea/TextArea';
import { useId, useState } from 'react';

interface OptionItem {
  label: string;
  value: string;
}
interface InputItem {
  name: string;
  label: string;
  type: string;
  placeholder?: string; 
  value?: string;
  options?: OptionItem[];
}

function DonationForm({ onAddDonation }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
  });
  const id = useId();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDonation(formData);
    setFormData({
      name: '',
      category: '',
      description: '',
    });
  };

  const inputList: InputItem[] = [
    {
      label: '후원자 이름',
      name: 'name',
      type: 'text',
      placeholder: '후원자 이름을 입력하세요',
      value: formData.name,
    },
    {
      label: '물품 종류',
      name: 'category',
      type: 'select',
      options: [
        { label: '의류', value: 'clothes' },
        { label: '신발', value: 'shoes' },
        { label: '잡화', value: 'etc' },
      ],
      placeholder: '물품의 종류를 선택하세요',
      value: formData.category,
    }
  ];

  return (
    <form className="w-[600px] flex flex-col gap-8" onSubmit={handleSubmit}>
      {inputList.map((input, index) => (
        <div key={`${id}-${index}`} className='flex justify-between items-center gap-3'>
          <label htmlFor={`${id}-${input.name}`}>{input.label}</label>
          {input.type === 'select' ? (
            <select
              name={input.name}
              id={`${id}-${input.name}`}
              className="w-[457px] h-[50px] p-2 rounded-[5px] bg-gray-300"
              value={input.value}
              onChange={handleChange}
              required
            >
              <option value="">{input.placeholder}</option>
              {input.options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          ): (
            <Input
              type={input.type}
              name={input.name}
              id={`${id}-${input.name}`}
              placeholder={input.placeholder}
              className="w-[457px] h-[50px] p-2 rounded-[5px] bg-gray-300"
              value={input.value}
              onChange={handleChange}
              required
            />
          )}
        </div>
      ))}
      <div className='flex flex-col gap-3 m-auto items-center'>
        <label htmlFor="description" className="text-lg">
          물품 설명
        </label>
        <TextArea
          name="description"
          placeHolder="물품 설명을 입력하세요"
          className="w-[600px] h-[200px] p-2 bg-gray-300"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button 
        type="submit"
        className="font-bold text-blue-primary border-2 border-blue-primary rounded-[3px] py-2 w-[130px] m-auto hover:bg-blue-primary hover:text-white transition-all"
      >
        추가하기
      </button>
    </form>
  );
}

export default DonationForm;
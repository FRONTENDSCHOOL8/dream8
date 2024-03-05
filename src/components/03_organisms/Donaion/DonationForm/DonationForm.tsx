import { useId } from 'react';


function DonationForm({ onAddDonation }) {
  const id = useId();

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const donation = {
      name: event.target.name.value,
      category: event.target.category.value,
      description: event.target.description.value,
    };

    onAddDonation(donation); 

    event.target.reset(); 
  }

  return (
    <form className="w-[600px] flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className='flex items-center justify-between'>
        <label htmlFor={`${id}-name`}>후원자 이름</label>
        <input
          type="text"
          name="name"
          id={`${id}-name`}
          className="w-[457px] h-[50px] p-2 rounded-[5px] bg-gray-300"
          placeholder="후원자 이름을 입력하세요"
          required 
        />
      </div>
      <div className='flex items-center justify-between'>
        <label htmlFor={`${id}-category`}>물품 종류</label>
        <select
          name="category"
          id={`${id}-category`}
          className="w-[457px] h-[50px] p-2 rounded-[5px] bg-gray-300"
          required 
        >
          <option value="choice">물품의 종류를 선택하세요</option>
          <option value="clothes">의류</option>
          <option value="shoes">신발</option>
          <option value="miscellaneous">잡화</option>
        </select>
      </div>
      <div className='flex flex-col gap-3 m-auto items-center'>
        <label htmlFor={`${id}-description`}>물품 설명</label>
        <textarea
          name="description"
          id={`${id}-description`}
          placeholder="물품 설명을 입력하세요"
          className="w-[600px] h-[200px] p-2 bg-gray-300"
          required 
        />
      </div>
      <button 
        type="submit"
        className="font-bold text-blue-primary border-2 border-blue-primary rounded-[3px] py-2 w-[130px] m-auto hover:bg-blue-primary hover:text-white"
      >
        추가하기
      </button>
    </form>
  );
}

export default DonationForm;

import { useId } from 'react';

function DonationSubmission() {
  const id = useId();

  return (

    <form className="w-[600px] flex flex-col gap-8">
      <div className='flex items-center justify-between'>
        <label htmlFor={id}>
          후원자 이름
        </label>
        <input
          type="text"
          name="name"
          id={id}
          className="w-[457px] h-[50px] p-2 rounded-[5px] bg-gray-300"
          placeholder="후원자 이름을 입력하세요"
        />
      </div>
      <div className='flex items-center justify-between'>
        <label htmlFor="kind">
          물품 종류
        </label>
        <select name="kind" id="kind" className="w-[457px] h-[50px] p-2 rounded-[5px] bg-gray-300">
          <option value="clothes">의류</option>
          <option value="shoes">신발</option>
          <option value="miscellaneous">잡화</option>
        </select>
      </div>
      <div className='flex flex-col gap-3 m-auto items-center'>
        <label htmlFor="description" className="text-lg">
          물품 설명
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="물품 설명을 입력하세요"
          className="w-[600px] h-[200px] p-2 bg-gray-300"
        />
      </div>
      <button 
        type="submit"
        className="font-bold text-blue-primary border-2 border-blue-primary rounded-[3px] py-2 w-[130px] m-auto hover:bg-blue-primary hover:text-white"
      >
        추가하기
      </button>
    </form>
  )
}

export default DonationSubmission
import Delete from '../../assets/images/donation/delet-button.svg'

import { useId } from 'react';

function DonationForm() {
  const id = useId();

  return (
    <div className="py-20">
      <div className="flex flex-col gap-8 items-center justify-center w-[1024px] h-[1119px] m-auto border border-gray-200 rounded-[50px]">
        <h2 className="text-4xl">후원 신청</h2>

        <div className='max-w-[595px] flex flex-col gap-10 items-center'>
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
                cols="30"
                rows="10"
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
  
          <div className="w-full h-[1px] bg-gray-200"></div>

          <div className='w-full h-[138px] border-2 border-gray-200 rounded-[4px]'>
            <table className='w-full table-fixed'>
              <thead>
                <tr className='border-b border-gray-200'>
                  <th className='w-[10%] p-2'>No.</th>
                  <th className='w-[30%] p-2'>종류</th>
                  <th className='w-[40%] p-2'>설명</th>
                  <th className='w-[20%] p-2'>삭제</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr className='border-b border-gray-200'>
                  <td>1</td>
                  <td>의류</td>
                  <td className='truncate'>사이즈 M, 정가 37,000원, 한 번 입고 못 입은 옷이라 오염 없이 깨끗해요.</td>
                  <th>
                    <button type="button">
                      <img src={Delete} alt="삭제하기" className='w-[20px] h-[20px]' />
                    </button>
                  </th>
                </tr>
                <tr className='border-b border-gray-200'>
                  <td>2</td>
                  <td>의류</td>
                  <td className='truncate'>사이즈 M, 한 번 입고 못 입은 옷이라 오염 없이 깨끗해요.</td>
                  <th>
                    <button type="button">
                      <img src={Delete} alt="삭제하기" className='w-[20px] h-[20px]' />
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <p>⚠️신청서 제출 후 취소 불가</p>

          <button 
            type="submit"
            className="font-bold text-blue-primary border-2 border-blue-primary rounded-[3px] py-2 w-full m-auto hover:bg-blue-primary hover:text-white"
          >
            제출하기
          </button>
        </div>

      </div>
    </div>
  );
}

export default DonationForm;

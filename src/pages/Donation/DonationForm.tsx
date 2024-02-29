// import { useId } from 'react';
import DonationTable from './atoms/DonationTable';
import DonationSubmission from './atoms/DonationSubmission';

function DonationForm() {
  // const id = useId();

  return (
    <div className="py-20">
      <div className="flex flex-col gap-8 items-center justify-center w-[1024px] h-[1119px] m-auto border border-gray-200 rounded-[50px]">
        <h2 className="text-4xl">후원 신청</h2>

        <div className='max-w-[595px] flex flex-col gap-10 items-center'>
          <DonationSubmission />
  
          <div className="w-full h-[1px] bg-gray-200"></div>

          <DonationTable />

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

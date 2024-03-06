import DonationTable from '../../../03_organisms/Donaion/Donationtable/DonationTable';
import DonationForm from '../../../03_organisms/Donaion/DonationForm/DonationForm';
import { useEffect, useState } from 'react';
import { pb } from '@/api/pocketbase';

function DonationSubmission() {
  const [donations, setDonations] = useState([]);

  const handleAddDonation = (donation) => {
    setDonations((prevDonations) => {
      const updatedDonations = [...prevDonations, donation];
      localStorage.setItem('donations', JSON.stringify(updatedDonations));
      return updatedDonations;
    });
  };
  
  const handleDeleteDonation = (id) => {
    setDonations((prevDonations) => {
      const updatedDonations = prevDonations.filter(donation => donation.id !== id);
      localStorage.setItem('donations', JSON.stringify(updatedDonations));
      return updatedDonations;
    });
  };

  const handleSubmit = async () => {
    try {
      for (const donation of donations) { 
        const record = await pb.collection('donation').create(donation);
        console.log('Saved record:', record);
      }
      setDonations([]);
      alert('모든 후원 데이터가 성공적으로 저장되었습니다.');
    } catch (error) {
      console.error('데이터 저장 실패:', error);
    }
  };

  useEffect(() => {
    const storedDonations = localStorage.getItem('donations');
    if (storedDonations) {
      setDonations(JSON.parse(storedDonations));
    }
  }, []);

  return (
    <div className="py-20">
      <div className="flex flex-col gap-8 items-center justify-center w-[1024px] m-auto py-20 border border-gray-200 rounded-[50px]">
        <h2 className="text-4xl">후원 신청</h2>

        <div className='max-w-[595px] flex flex-col gap-10 items-center'>
          <DonationForm onAddDonation={handleAddDonation}/>
  
          <div className="w-full h-[1px] bg-gray-200"></div>

          <DonationTable donations={donations} onDeleteDonation={handleDeleteDonation} />

          <p>⚠️신청서 제출 후 취소 불가</p>

          <button 
            type="button" // 'submit'이 아닌 'button' 타입으로 변경, 폼 제출 대신 onClick 이벤트를 사용
            onClick={handleSubmit}
            className="font-bold text-blue-primary border-2 border-blue-primary rounded-[3px] py-2 w-full m-auto hover:bg-blue-primary hover:text-white"
          >
            제출하기
          </button>
        </div>

      </div>
    </div>
  );
}

export default DonationSubmission;

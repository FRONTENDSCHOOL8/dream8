import React from 'react';
import Delete from '/delete-button.svg';

interface Donation {
  id: number;
  category: 'clothes' | 'shoes' | 'miscellaneous';
  description: string;
}

// 컴포넌트 props 인터페이스 
interface DonationTableProps {
  donations: Donation[];
  onDeleteDonation: (id: number) => void;
}

// 카테고리 라벨
const categoryLabels: { [key: string]: string } = {
  clothes: '의류',
  shoes: '신발',
  miscellaneous: '잡화',
};

const DonationTable: React.FC<DonationTableProps> = ({ donations, onDeleteDonation }) => {
  return (
    <div className='w-full border border-gray-200 rounded-[4px]'>
      <table className='w-full table-fixed'>
        <thead>
          <tr className="bg-gray-300">
            <th className='w-[10%] py-3'>No.</th>
            <th className='w-[20%] py-3'>종류</th>
            <th className='w-[50%] py-3'>설명</th>
            <th className='w-[20%] py-3'>삭제</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((item, index) => (
            <tr key={item.id} className='text-center border-t border-gray-200'>
              <td>{index + 1}</td>
              <td>{categoryLabels[item.category]}</td>
              <td className='truncate'>{item.description}</td>
              <td>
                <button type="button" onClick={() => onDeleteDonation(item.id)}>
                  <img src={Delete} alt="삭제하기" className='w-[20px] h-[20px] mt-2' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationTable;

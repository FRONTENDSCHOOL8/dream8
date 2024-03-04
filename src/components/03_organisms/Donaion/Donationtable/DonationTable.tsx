import Delete from '/delet-button.svg'
import { useState } from 'react';


function DonationTable () {

  // delete 버튼 작용 확인용 임시 데이터
  const [items, setItems] = useState([
    { id: 1, category: '의류', description: '사이즈 M, 정가 37,000원, 한 번 입고 못 입은 옷이라 오염 없이 깨끗해요.' },
    // 기타 아이템들...
  ]);

  const handleDelete = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

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
        {items.map((item) => (
          <tr key={item.id} className='text-center border-t border-gray-200'>
            <td>{item.id}</td>
            <td>{item.category}</td>
            <td className='truncate'>{item.description}</td>
            <th>
              <button type="button" onClick={() => handleDelete(item.id)}>
                <img src={Delete} alt="삭제하기" className='w-[20px] h-[20px] mt-2' />
              </button>
            </th>
          </tr>
        ))}
      </tbody>
          
          {/* -> 뿌려줄 데이터
            <tr className='border-t border-gray-200'>
              <td>2</td>
              <td>의류</td>
              <td className='truncate'>사이즈 M, 한 번 입고 못 입은 옷이라 오염 없이 깨끗해요.</td>
              <th>
                <button type="button">
                  <img src={Delete} alt="삭제하기" className='w-[20px] h-[20px] mt-2' />
                </button>
              </th>
            </tr> */}
      </table>
    </div>
  )
}

export default DonationTable;
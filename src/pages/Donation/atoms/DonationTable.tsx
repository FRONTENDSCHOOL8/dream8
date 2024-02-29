import DeleteButton from "../organisms/DeleteButton";
import DeletButton from "../organisms/DeleteButton";


function DonationTable () {
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
        <tbody className='text-center'>
          <tr className='border-t border-gray-200'>
            <td>1</td>
            <td>의류</td>
            <td className='truncate'>사이즈 M, 정가 37,000원, 한 번 입고 못 입은 옷이라 오염 없이 깨끗해요.</td>
            <th>
              <DeleteButton />
            </th>
          </tr>
          <tr className='border-t border-gray-200'>
            <td>2</td>
            <td>의류</td>
            <td className='truncate'>사이즈 M, 한 번 입고 못 입은 옷이라 오염 없이 깨끗해요.</td>
            <th>
              <DeletButton/>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DonationTable;
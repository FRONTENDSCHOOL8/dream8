import Delete from '../../../assets/images/donation/delet-button.svg'

function DeleteButton() {
  return (
    <button type="button">
      <img src={Delete} alt="삭제하기" className='w-[20px] h-[20px] mt-2' />
    </button>
  )
}

export default DeleteButton;
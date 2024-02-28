import Button from  "../../../assets/images/home/plus-button.svg"

function PlusButton () {

  return (
    <button type="button" className="absolute bottom-8 right-8">
      <img src={Button} alt="소식 페이지로 이동" />
    </button>
  )
}

export default PlusButton
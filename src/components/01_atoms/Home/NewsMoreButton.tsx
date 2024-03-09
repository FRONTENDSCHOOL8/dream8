import Button from  "/plus-button.svg"

function NewsMoreButton () {

  return (
    <button 
      type="button"
      className="hover:scale-110 transition-all"
      >
      <img src={Button} alt="소식 페이지로 이동" />
    </button>
  )
}

export default NewsMoreButton
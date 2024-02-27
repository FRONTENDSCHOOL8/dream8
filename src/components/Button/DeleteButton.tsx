import Trash from 'public/Trash.svg';

function DeleteButton() {
  return (
    <>
      <button>
        <img src={Trash} />
      </button>
    </>
  );
}

export default DeleteButton;

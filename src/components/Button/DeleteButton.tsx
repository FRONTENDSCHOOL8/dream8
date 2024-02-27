import Trash from 'public/Trash.svg';

function DeleteButton() {
  return (
    <>
      <button className="text-blue-primary ">
        <img src={Trash} />
      </button>
    </>
  );
}

export default DeleteButton;

interface nameProp {
  name: string;
}

function SubmitButton({ name }: nameProp) {
  return (
    <button className="text-blue-primary text-[1.1rem] rounded-[0.3125rem] flex justify-center items-center border-2 px-2 border-blue-primary hover:bg-blue-primary hover:text-white">
      {name}
    </button>
  );
}

export default SubmitButton;

interface nameProp {
  name: string;
}

function SubmitButton({ name }: nameProp) {
  return (
    <button className="font-bold text-blue-primary border-2 border-blue-primary rounded-[3px] py-2 w-full m-auto hover:bg-blue-primary hover:text-white transition-all">
      {name}
    </button>
  );
}

export default SubmitButton;

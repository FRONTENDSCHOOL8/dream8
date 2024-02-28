interface NameProp {
  name: string;
}

function ExchangeModifyButton({ name }: NameProp) {
  return (
    <div className="">
      <button className="text-blue-primary border-blue-primary border-2 px-20 py-1">
        {name}
      </button>
    </div>
  );
}

export default ExchangeModifyButton;

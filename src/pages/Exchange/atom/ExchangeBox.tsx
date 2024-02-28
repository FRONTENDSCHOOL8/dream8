interface ExchangeProps {
  name: string;
}

function ExchangeBox({ name }: ExchangeProps) {
  return (
    <span className="bg-orange-primary text-white w-14 text-[0.875rem] flex justify-center items-center rounded-[0.3125rem]">
      {name}
    </span>
  );
}

export default ExchangeBox;

interface nameProp {
  name: string;
  className: string;
}

function Exchangeable({ name, className }: nameProp) {
  return <div className={className}>{name}</div>;
}

export default Exchangeable;

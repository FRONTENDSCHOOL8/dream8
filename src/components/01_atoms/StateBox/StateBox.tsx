interface nameProp {
  name: string;
  className: string;
}

function StateBox({ name, className }: nameProp) {
  return <div className={className}>{name}</div>;
}

export default StateBox;

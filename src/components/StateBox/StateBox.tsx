interface StateBoxProp {
  name: string;
  className: string;
}

function StateBox({ name, className }: StateBoxProp) {
  return <span className={className}>{name}</span>;
}

export default StateBox;

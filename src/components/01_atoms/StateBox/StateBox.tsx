interface StateBoxProps {
  className: string;
  isComplete: boolean;
}

function StateBox({ className, isComplete }: StateBoxProps) {
  console.log(isComplete);
  return <div className={className}>{isComplete}</div>;
}

export default StateBox;

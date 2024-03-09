interface StateBoxProps {
  className: string;
  isComplete: boolean;
}

function StateBox({ className, isComplete }: StateBoxProps) {
  console.log(isComplete);
  return (
    <div className={className}>{isComplete ? '교환불가' : '교환가능'}</div>
  );
}

export default StateBox;

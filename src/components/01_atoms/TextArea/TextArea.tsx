interface TextAreaProp {
  className: string;
  labelName?: string;
  placeHolder?: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({
  className,
  labelName,
  placeHolder,
  name,
  value,
  onChange,
}: TextAreaProp) {
  return (
    <>
      <label>{labelName}</label>
      <textarea
        className={className}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
}

export default TextArea;

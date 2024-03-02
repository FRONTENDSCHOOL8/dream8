interface TextAreaProp {
  className: string;
  labelName: string;
  placeHolder: string;
  name: string;
}

function TextArea({ className, labelName, placeHolder, name }: TextAreaProp) {
  return (
    <>
      <label>{labelName}</label>
      <textarea
        className={className}
        placeholder={placeHolder}
        name={name}
      ></textarea>
    </>
  );
}

export default TextArea;

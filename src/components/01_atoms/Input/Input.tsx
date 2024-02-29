import React from 'react';

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  ariaRequired: boolean;
  required?: boolean;
  className: string;
  inputProps: {};
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  value,
  onChange,
  labelText,
  ariaRequired,
  required,
  className,
  inputProps = {},
}) => {
  return (
    <>
      <div>
        <label htmlFor={value}>{labelText}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          aria-required={ariaRequired}
          className={className}
          {...inputProps}
        />
      </div>
    </>
  );
};

export default Input;
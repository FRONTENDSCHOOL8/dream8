import React from 'react';

interface SignInFormInputProps {
  dynamicId: string;
  dynamicInputType: string;
  dynamicvalue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  ariaRequired: boolean;
  required?: boolean;
  className: string;
}

/**
 *
 * @param {{
 * email: string
 * }}props
 * @returns
 */
const SignInFormInputAtoms: React.FC<SignInFormInputProps> = (
  props,
  {
    dynamicId,
    dynamicInputType,
    dynamicvalue,
    onChange,
    labelText,
    ariaRequired,

    required,
    className,
  }
) => {
  return (
    <>
      <div>
        <label htmlFor={dynamicvalue}>{labelText}</label>
        <input
          type={dynamicInputType}
          id={dynamicId}
          value={dynamicvalue}
          onChange={onChange}
          required={required}
          aria-required={ariaRequired}
          className={className}
        />
      </div>
    </>
  );
};

export default SignInFormInputAtoms;

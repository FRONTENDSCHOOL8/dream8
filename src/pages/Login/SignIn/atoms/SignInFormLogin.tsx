import React from 'react';

interface SignInLoginButtonProps {
  dynamicStyle: string;
  buttonText: string;
  dynamicType: 'submit' | 'reset' | 'button' | undefined;
}

const SignInLoginButtonAtoms: React.FC<SignInLoginButtonProps> = ({
  dynamicType,
  dynamicStyle,
  buttonText,
}) => {
  return (
    <button type={dynamicType} className={dynamicStyle}>
      {buttonText}
    </button>
  );
};

export default SignInLoginButtonAtoms;

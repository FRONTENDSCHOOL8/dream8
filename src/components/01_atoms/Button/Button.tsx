import React from 'react';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className: string;
  'aria-label'?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
  ...restProps
}) => {
  return (
    <button className={className} onClick={onClick} type={type} {...restProps}>
      {children}
    </button>
  );
};

export default Button;

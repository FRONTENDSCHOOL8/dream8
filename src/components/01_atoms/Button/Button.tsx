import React, { CSSProperties } from 'react';

interface ButtonProps {
  id?: string;
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
  ariaLabel,
  style,
  ...restProps
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      style={style}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;

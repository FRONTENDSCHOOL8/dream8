import React, { CSSProperties } from 'react';

interface Button01Props {
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  style?: CSSProperties;
}

const Button01: React.FC<Button01Props> = ({
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
      className={`button-atom  ${className} `}
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

export default Button01;

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  children?: React.ReactNode;
  className: string;
  // aria-label을 추가하고 옵셔널로 설정합니다.
  'aria-label'?: string;
  type: 'submit' | 'reset' | 'button' | undefined;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  children,
  className,
  type,
  ...restProps
}) => {
  return (
    <button
      aria-label={restProps['aria-label']} // rest 파라미터로부터 aria-label을 가져옵니다.
      className={className}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';

interface SocialLoginButtonProps {
  label: string;
  onClick: () => void;
  children?: React.ReactNode;
  className: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  label,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      aria-label={`${label} 로그인 버튼`}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SocialLoginButton;

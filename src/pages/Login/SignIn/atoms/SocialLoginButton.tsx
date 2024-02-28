import React from 'react';

interface SocialLoginButtonProps {
  label: string;
  icon: string;
  onClick: () => void;
  className: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  label,
  icon,
  onClick,
  className,
}) => {
  return (
    <button
      aria-label={`${label} 로그인 버튼`}
      className={className}
      onClick={onClick}
    >
      <img
        src={icon}
        alt={`${label} 로그인 아이콘`}
        className="absolute top-3 left-3"
      />
      <span className="m-auto text-2xl">{label} 로그인</span>
    </button>
  );
};

export default SocialLoginButton;

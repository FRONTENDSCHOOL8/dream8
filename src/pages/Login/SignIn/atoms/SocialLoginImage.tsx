import React from 'react';
interface SocialLoginIamgeProps {
  label: string;
  icon: string;
  dynamicStyle: string;
}

const SocialLoginImage: React.FC<SocialLoginIamgeProps> = ({
  label,
  icon,
  dynamicStyle,
}) => {
  return (
    <img src={icon} alt={`${label} 로그인 아이콘`} className={dynamicStyle} />
  );
};

export default SocialLoginImage;

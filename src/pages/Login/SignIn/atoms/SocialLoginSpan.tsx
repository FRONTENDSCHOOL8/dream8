import React from 'react';

interface SocialLoginProps {
  label: string;
  dynamicStyle: string;
}

const SocialLoginSpan: React.FC<SocialLoginProps> = ({
  label,
  dynamicStyle,
}) => {
  return <span className={dynamicStyle}>{label} 로그인</span>;
};

export default SocialLoginSpan;

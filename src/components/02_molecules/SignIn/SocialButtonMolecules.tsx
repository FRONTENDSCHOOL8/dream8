import React from 'react';
import SocialLoginImage from '@/pages/Login/SignIn/atoms/SocialLoginImage';
import SocialLoginButton from '@/pages/Login/SignIn/atoms/SocialLoginButton';
import SocialLoginSpan from '@/pages/Login/SignIn/atoms/SocialLoginSpan';
import Button from '@/components/01_atoms/Button/Button';
import Image from '@/components/01_atoms/Image/Image';

interface SocailMoleculesProps {
  label: string;
  icon: string;
  onClick: () => void;
  className: string;
}

const SocialButtonMolecules: React.FC<SocailMoleculesProps> = ({
  label,
  icon,
  onClick,
  className,
}) => {
  return (
    <Button
      label={`${label} 로그인 버튼`}
      className={className}
      onClick={onClick}
      type="button"
    >
      <img src={icon} alt={label} className="absolute top-3 left-3" />
      <div className="m-auto text-2xl">로그인</div>
    </Button>
  );
};

export default SocialButtonMolecules;

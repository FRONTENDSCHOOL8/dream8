import React from 'react';
import SocialLoginImage from '@/pages/Login/SignIn/atoms/SocialLoginImage';
import SocialLoginButton from '@/pages/Login/SignIn/atoms/SocialLoginButton';
import SocialLoginSpan from '@/pages/Login/SignIn/atoms/SocialLoginSpan';

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
    <SocialLoginButton label={label} className={className} onClick={onClick}>
      <SocialLoginImage
        icon={icon}
        label={label}
        dynamicStyle="absolute top-3 left-3"
      />
      <SocialLoginSpan dynamicStyle="m-auto text-2xl" label={label} />
    </SocialLoginButton>
  );
};

export default SocialButtonMolecules;

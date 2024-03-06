import React, { CSSProperties } from 'react';
import Button from '@/components/01_atoms/Button/Button';

interface SocailMoleculesProps {
  label: string;
  icon: string;
  onClick: () => void;
  className: string;
  style?: CSSProperties;
}

const SocialButtonMolecules: React.FC<SocailMoleculesProps> = ({
  label,
  icon,
  onClick,
  className,
  style,
}) => {
  return (
    <Button
      label={`${label} 로그인 버튼`}
      className={className}
      onClick={onClick}
      type="button"
      style={style}
    >
      <img src={icon} alt={label} className="absolute top-3 left-3" />
      <div className="m-auto text-2xl">{label}로그인</div>
    </Button>
  );
};

export default SocialButtonMolecules;

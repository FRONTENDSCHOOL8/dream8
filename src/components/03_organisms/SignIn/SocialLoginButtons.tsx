import React, { CSSProperties } from 'react';
import facebook from 'public/facebook-icon.svg';
import kakao from 'public/kakao-icon.svg';
import google from 'public/google-icon.svg';
import { kakaoURL } from '@/api/SocialKakao';

import SocialButtonMolecules from '../../02_molecules/SignIn/SocialButtonMolecules';

interface SocialLoginButtonsProps {
  className?: string;
  fristBgColor?: string;
  secondBgColor?: string;
  thirdColor?: string;
  fontSize?: string;
  style?: CSSProperties;
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({
  className,
  fristBgColor,
  secondBgColor,
  thirdColor,
  fontSize,
}) => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className=" flex flex-col gap-4">
      <SocialButtonMolecules
        label="Google"
        icon={google}
        onClick={() => {}}
        className={
          className
            ? className
            : 'relative flex text-center rounded-xl border w-[28.625rem] h-[3.79rem]'
        }
        style={{ background: fristBgColor, fontSize }}
      />
      <SocialButtonMolecules
        label="Kakao"
        icon={kakao}
        onClick={handleKakaoLogin}
        className={
          className
            ? className
            : 'relative flex text-center bg-yellow-300 rounded-xl w-[28.625rem] h-[3.79rem]'
        }
        style={{ background: secondBgColor, fontSize }}
      />
      <SocialButtonMolecules
        label="페이스북"
        icon={facebook}
        onClick={() => {}}
        className={
          className
            ? className
            : 'relative flex text-center bg-blue-600 rounded-xl w-[28.625rem] h-[3.79rem]'
        }
        style={{ background: thirdColor, fontSize }}
      />
    </div>
  );
};

export default SocialLoginButtons;

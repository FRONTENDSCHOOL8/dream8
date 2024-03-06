import Image from '@/components/01_atoms/Image/Image';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useEffect } from 'react';

interface MypageInfoUserCardProps {
  fontSize?: string;
  fontColor?: string;
  ImageSize?: string;
}

const MypageInfoUserCard: React.FC<MypageInfoUserCardProps> = ({
  fontSize,
  fontColor,
  ImageSize = '140px',
}) => {
  const profileStyle: React.CSSProperties = {
    fontSize: fontSize,
    color: fontColor,
  };

  const { userInfo } = useLoginFormStore();

  return (
    <div className="flex gap-20 rounded-3xl  border  border-gray-300 font-semibold p-12 ">
      <Image
        width={ImageSize}
        height={ImageSize}
        className="min-w-[140px]"
        alt="기본프로필사진"
      ></Image>

      <div className="flex flex-col justify-center gap-3">
        <span className="mb-3 text-3xl" style={profileStyle}>
          {userInfo.nickName}
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-2xl" style={profileStyle}>
            dream
          </span>
          <span className="text-2xl" style={profileStyle}>
            {userInfo.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MypageInfoUserCard;

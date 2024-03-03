import Image from '@/components/01_atoms/Image/Image';

interface MypageInfoUserCardProps {
  fontSize?: string;
  fontColor?: string;
  ImageSize?: string;
}

const MypageInfoUserCard: React.FC<MypageInfoUserCardProps> = ({
  fontSize,
  fontColor,
  ImageSize = '145px',
}) => {
  const profileStyle: React.CSSProperties = {
    fontSize: fontSize,
    color: fontColor,
  };

  return (
    <div className="flex gap-[121px] w-[53.75rem] border h-[15.62rem] border-gray-300 font-semibold p-12">
      <Image
        width={ImageSize}
        height={ImageSize}
        className="min-w-[145px]"
        alt="기본프로필사진"
      ></Image>

      <div className="flex flex-col ">
        <span className="mb-3 text-4xl" style={profileStyle}>
          드림님
        </span>
        <span className="text-[1.87rem]" style={profileStyle}>
          dream
        </span>
        <span className="text-[1.87rem]" style={profileStyle}>
          dream99@gmail.com
        </span>
      </div>
    </div>
  );
};

export default MypageInfoUserCard;

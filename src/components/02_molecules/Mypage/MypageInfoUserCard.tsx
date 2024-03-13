import { pb } from '@/api/pocketbase';
import Image from '@/components/01_atoms/Image/Image';
import useLoginFormStore from '@/store/useLoginFormStore';
import { getPbImage } from '@/utils/getPbImage';
import { useEffect, useState } from 'react';

interface MypageInfoUserCardProps {
  fontSize?: string;
  fontColor?: string;
  ImageSize?: string;
  iconImageSize?: string;
}

const MypageInfoUserCard: React.FC<MypageInfoUserCardProps> = ({
  fontSize,
  fontColor,
  ImageSize = '140px',
  iconImageSize = '40px',
}) => {
  const profileStyle: React.CSSProperties = {
    fontSize: fontSize,
    color: fontColor,
  };

  const { userInfo, setUserInfo } = useLoginFormStore();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setSelectedImage(imageDataUrl);

        const formData = new FormData();
        formData.append('photo', file);
        console.log('formData   ', formData);
        try {
          pb.collection('users')
            .update(userInfo.id, formData)
            .then((response) => {
              setUserInfo(response);
            });
        } catch (error) {
          console.error('Error updating user photo:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-start gap-20 rounded-3xl font-semibold p-12 shadow-root">
      <div className="relative">
        <div className="rounded-full w-[150px] h-[150px] overflow-hidden border-2 border-gray-300">
          <Image
            width={ImageSize}
            height={ImageSize}
            className="w-full h-full object-cover cursor-pointer flex items-center scale-150"
            alt="프로필 사진"
            src={
              selectedImage ||
              getPbImage(userInfo?.collectionId, userInfo.id, userInfo.photo)
            }
            onClick={() => document.getElementById('file-input')?.click()}
          />
          <input
            type="file"
            id="file-input"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <Image
          width={iconImageSize}
          height={iconImageSize}
          className="min-w-[8.75rem] cursor-pointer absolute bottom-0"
          alt="프로필 사진 수정 아이콘"
          src={'/gear.svg'}
        />
      </div>

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

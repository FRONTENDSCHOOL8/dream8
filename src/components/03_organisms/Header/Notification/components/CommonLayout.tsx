import Image from '@/components/01_atoms/Image/Image';
import closeButton from '/close_noti.svg';
import Button from '@/components/01_atoms/Button/Button';
import { pb } from '@/api/pocketbase';
import useNoticeList from '@/store/useNoticeList';

interface CommponLayoutProps {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  isComplete: boolean;
  type: string;
  onDelete: (id: string) => void; // 삭제 이벤트 핸들러 prop 추가
}

const CommonLayout = ({
  id,
  src,
  alt,
  title,
  description,
  isComplete,
  type,
  onDelete, // 삭제 이벤트 핸들러 prop 추가
}: CommponLayoutProps) => {
  const handleDelete = async (id: string) => {
    try {
      await pb.collection('notification').delete(id);
      onDelete(id); // 삭제 후 onDelete 함수 호출하여 다시 렌더링되도록 함
      // alert('삭제되었습니다.');
    } catch (error) {
      console.log('error ', error);
    }
  };
  return (
    <section className="flex justify-between items-center  w-full relative bg-white p-5 pr-10 rounded-lg gap-10">
      <div className="flex flex-col gap-10">
        <h2 className="text-blue-primary text-lg">
          {isComplete && type === 'donation'
            ? '후원완료'
            : type === 'product'
            ? '구입완료'
            : ''}
        </h2>
        <span className="text-base"> {title || description} </span>
      </div>

      <Image
        src={src}
        alt={alt}
        className="w-20 h-20 flex justify-center items-center"
      />

      <Button
        type="button"
        onClick={() => {
          handleDelete(id);
        }}
        className="absolute top-0 right-0 mt-2 mr-2"
      >
        <Image src={closeButton} alt={'알림 1개 삭제하기 버튼 '} />
      </Button>
    </section>
  );
};

export default CommonLayout;

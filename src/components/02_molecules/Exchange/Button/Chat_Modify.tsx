import Button01 from '@/components/01_atoms/Button/Button01';
import Trash from '/Trash.svg';
import { useNavigate } from 'react-router-dom';
import useDelete from '@/hooks/useDelete';
import { useEffect, useState } from 'react';
import SelectModal from '@/components/02_molecules/Modal/SelectModal/SelectModal';
import ConfirmModal from '../../Modal/ConfirmModal/ConfirmModal';

interface EditProp {
  Edit: boolean;
  id: string;
}

function ExchangeModify({ Edit, id }: EditProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const text = {
    title: '경고',
    message: '진짜로 삭제하실건가요?',
  };

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isSuccessModalOpen) {
      const timeoutId = setTimeout(() => {
        setIsSuccessModalOpen(false);
        setIsOpen(false);
        navigate('/Exchange');
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isSuccessModalOpen]);

  const handleDelete = () => {
    useDelete(id);
    setIsSuccessModalOpen(true);
  };

  return Edit ? (
    <div className="flex items-center gap-4">
      <Button01
        type="button"
        className="p-0 w-80 h-10 hover:bg-blue-primary hover:text-white"
        onClick={() => navigate(`/ExchangeModify/${id}`)}
      >
        게시글 수정하기
      </Button01>
      <Button01
        className="p-0 border-none"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <img src={Trash} alt="삭제버튼" />
      </Button01>
      {isOpen && (
        <SelectModal
          title={text.title}
          onClickNo={handleCloseModal}
          onClickYes={handleDelete}
        >
          {text.message}
        </SelectModal>
      )}
      {isSuccessModalOpen && (
        <ConfirmModal title="성공">데이터 삭제를 성공했습니다</ConfirmModal>
      )}
    </div>
  ) : (
    <Button01
      type="button"
      className="p-0 w-80 h-10 hover:bg-blue-primary hover:text-white"
      onClick={() => navigate(`/Chat/${id}`)}
    >
      채팅하기
    </Button01>
  );
}

export default ExchangeModify;

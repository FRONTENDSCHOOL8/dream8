import Cautions from '@/components/Cautions/Cautions';
import ConfirmModal from '@/components/Modal/ConfirmModal/ConfirmModal';

type CautionModalPropsType = {
  onClose: () => void;
};

function CautionModal({ onClose }: CautionModalPropsType) {
  return (
    <ConfirmModal
      title={
        <>
          <span className="text-red-600">구매</span>하기 전 주의사항
        </>
      }
      onClose={onClose}
    >
      <div className="bg-[#f3f3f3] p-14">
        <Cautions />
      </div>
      <p className="mt-5 font-medium">주의사항을 모두 확인하셨습니까?</p>
    </ConfirmModal>
  );
}

export default CautionModal;

import Button from '@/components/01_atoms/Button/Button';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

type ConfirmModalPropsType = {
  title: React.ReactNode | string;
  children: React.ReactNode;
  onClose?: () => void;
};

function ConfirmModal({ title, children, onClose }: ConfirmModalPropsType) {
  return createPortal(
    <FocusLock>
      <div className="w-full h-full fixed top-0 left-0 bg-black-100 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white px-10 py-12 rounded-[50px] min-w-[31.25rem] flex flex-col justify-between gap-9">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="text-xl font-medium">{children}</div>
          <Button
            className="w-28 bg-blue-primary text-white mt-[10px] px-7 py-2 rounded self-end"
            onClick={onClose}
            type="button"
          >
            확인
          </Button>
        </div>
      </div>
    </FocusLock>,
    document.body
  );
}

export default ConfirmModal;

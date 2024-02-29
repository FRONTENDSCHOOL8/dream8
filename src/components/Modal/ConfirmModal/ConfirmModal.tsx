import { createPortal } from 'react-dom';

type ConfirmModalPropsType = {
  title: React.ReactNode | string;
  children: React.ReactNode;
  onClose: () => void;
};

function ConfirmModal({ title, children, onClose }: ConfirmModalPropsType) {
  return createPortal(
    <div className="w-full h-full fixed top-0 left-0 bg-black-100 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white px-10 py-12 rounded-[50px] min-w-[31.25rem] flex flex-col justify-between gap-9">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="text-xl font-medium">{children}</div>
        <button
          className="w-28 bg-blue-primary text-white mt-[10px] px-7 py-2 rounded self-end"
          onClick={onClose}
        >
          확인
        </button>
      </div>
    </div>,
    document.body
  );
}

export default ConfirmModal;

import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

type SelectModalPropsType = {
  title: React.ReactNode | string;
  children: React.ReactNode;
  onClickYes: () => void;
  onClickNo: () => void;
};

function SelectModal({
  title,
  children,
  onClickYes,
  onClickNo,
}: SelectModalPropsType) {
  return createPortal(
    <FocusLock>
      <div className="w-full h-full fixed top-0 left-0 bg-black-100 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-10 rounded-[50px] min-w-[31.25rem] flex flex-col justify-between gap-9">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="text-xl font-medium">{children}</div>
          <div className="flex gap-2 justify-end">
            <button
              className="w-28 bg-blue-primary text-white mt-[10px] px-7 py-2 rounded"
              onClick={onClickNo}
            >
              아니요
            </button>
            <button
              className="w-28 bg-blue-primary text-white mt-[10px] px-7 py-2 rounded"
              onClick={onClickYes}
            >
              네
            </button>
          </div>
        </div>
      </div>
    </FocusLock>,
    document.body
  );
}

export default SelectModal;

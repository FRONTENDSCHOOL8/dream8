import { createPortal } from 'react-dom';

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
    <div className="w-full h-full fixed top-0 left-0 bg-black-100 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-[50px] min-w-[31.25rem] flex flex-col justify-between gap-9">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="text-xl font-medium">{children}</div>
        <div className="flex justify-between">
          <button
            className="w-28 bg-blue-primary text-white mt-[10px] px-7 py-2 rounded self-start"
            onClick={onClickNo}
          >
            아니요
          </button>
          <button
            className="w-28 bg-blue-primary text-white mt-[10px] px-7 py-2 rounded self-end"
            onClick={onClickYes}
          >
            네
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default SelectModal;

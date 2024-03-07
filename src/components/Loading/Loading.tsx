import { BeatLoader } from 'react-spinners';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BeatLoader color="#224b8f" loading={true} />
    </div>
  );
}

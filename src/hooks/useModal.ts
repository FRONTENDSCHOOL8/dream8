import { useState } from 'react';

function useModal() {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => setIsVisible(true);

  const closeModal = () => setIsVisible(false);

  return {
    isVisible,
    openModal,
    closeModal,
  };
}

export default useModal;

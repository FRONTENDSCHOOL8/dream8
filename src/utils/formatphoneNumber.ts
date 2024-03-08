export const formatPhoneNumber = (phoneNumber: string) => {
  // phoneNumber 변수가 정의되어 있는지 확인
  if (phoneNumber) {
    // 숫자만 추출하여 000-0000-0000 형식으로 변환
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);

    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  }

  // phoneNumber 변수가 정의되어 있지 않거나 변환이 실패한 경우 기존 phoneNumber 반환
  return phoneNumber;
};
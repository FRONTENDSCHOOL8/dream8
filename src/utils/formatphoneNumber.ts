// 폰 번호를 원하는 형식으로 변경하는 함수
export const formatPhoneNumber = (phoneNumber: string) => {
  // 숫자만 추출하여 000-0000-0000 형식으로 변환
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);

  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  return formatPhoneNumber;
};

import React, { useCallback, useEffect, useState } from 'react';
import Input from '@/components/01_atoms/Input/Input';
import Button from '@/components/01_atoms/Button/Button';
import Button01 from '@/components/01_atoms/Button/Button01';
import useLoginFormStore from '@/store/useLoginFormStore';
import { pb } from '@/api/pocketbase';
import SelectModal from '../Modal/SelectModal/SelectModal';
import { useNavigate } from 'react-router-dom';
import { formatPhoneNumber } from '@/utils/formatphoneNumber';

export interface MypageUserSettingProps {
  fontColor?: string;
  fontSize?: string;
}

interface EditModeState {
  name: boolean;
  id: boolean;
  email: boolean;
  phone: boolean;
  address: boolean;
}

interface FieldsState {
  user_name: string;
  nickName: string;
  email: string;
  phone_number: string;
  address: string;
}

export const Component: React.FC<MypageUserSettingProps> = ({
  fontColor,
  fontSize,
}) => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo, clearUser, setIsLoggedIn } =
    useLoginFormStore();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [fields, setFields] = useState<FieldsState>({
    email: userInfo?.email,
    user_name: userInfo?.user_name,
    nickName: userInfo?.nickName,
    phone_number: userInfo?.phone_number,
    address: userInfo?.address,
  });

  const [editMode, setEditMode] = useState<EditModeState>({
    email: false,
    name: false,
    id: false,
    phone: false,
    address: false,
  });

  const handleEditToggle = (field: keyof EditModeState) => {
    setEditMode((prevState: EditModeState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FieldsState
  ) => {
    const { value } = e.target;
    setFields((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSave = async (field: keyof FieldsState) => {
    if (fields[field].trim() === '') {
      alert(`${getFieldLabel(field)}을(를) 입력해주세요.`);
      return;
    }

    setEditMode((prevState) => ({
      ...prevState,
      [field]: false,
    }));

    try {
      const updateData = await pb
        .collection('users')
        .update(userInfo.id, { [field]: fields[field] });

      setUserInfo(updateData);
    } catch (error) {
      console.error('Error :', error);
      // 에러 메시지에 따른 처리 추가
    }
  };

  const getFieldLabel = (field: string) => {
    switch (field) {
      case 'email':
        return '이메일';
      case 'nickName':
        return '아이디';
      case 'user_name':
        return '이름';
      case 'phone_number':
        return '핸드폰번호';
      case 'address':
        return '주소';
      default:
        return field;
    }
  };

  const inputType = (field: string) => {
    if (field === 'email') {
      return 'email';
    } else if (field === 'phone_number') {
      return 'tel';
    } else {
      return 'text';
    }
  };

  const inputValue = (field: string, value: string) => {
    if (field === 'phone_number') {
      return formatPhoneNumber(value);
    } else {
      return value;
    }
  };

  const handleDeleteID = useCallback(() => {
    setShowModal(true); // 모달 표시
  }, [setShowModal]);

  const handleConfirmDelete = useCallback(async () => {
    try {
      await pb.collection('users').delete(userInfo.id);
      setShowModal(false);
      clearUser();
      setIsLoggedIn(false);
      navigate('/'); // 예시로 '/' 페이지로 이동하도록 설정되어 있습니다.
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  }, [navigate]);

  return (
    <section className="w-full flex flex-col gap-10">
      {/* 모달 렌더링 */}
      {showModal && (
        <SelectModal
          title={'회원탈퇴'}
          children={
            <>
              탈퇴하시면 복구 할 수 없습니다.
              <br />
              정말로 탈퇴하시겠습니까
            </>
          }
          onClickYes={() => {
            handleConfirmDelete();
            console.log('확인버튼');
            setShowModal(false); // 모달 닫기
          }}
          onClickNo={() => {
            console.log('취소버튼');
            setShowModal(false); // 모달 닫기
          }}
        />
      )}
      <h2 className="text-2xl font-semibold">회원 정보 (필수)</h2>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <ul className="flex flex-col gap-10">
        {Object.entries(fields).map(([field, value]) => (
          <li key={field} className="flex items-center justify-start gap-10 py-1 text-xl font-semibold">
            <span className="w-[11rem]">{getFieldLabel(field)}</span>
            {editMode[field as keyof EditModeState] ? (
              <Input
                id={field}
                type={inputType(field)}
                value={inputValue(field, value)}
                onChange={(e) => handleChange(e, field as keyof FieldsState)}
                required
                className={`border border-gray-300 p-1 focus:outline-none rounded-lg ${
                  fields[field].trim() === ''
                    ? 'border-red-500'
                    : 'border-gray-400'
                  // 빈 값일 때 빨간색 테두리로 변경
                }`}
              />
            ) : (
              <div>
                {field === 'phone_number' ? formatPhoneNumber(value) : value}
              </div>
            )}
            {field !== 'email' && (
              <div className='ml-auto'>
                {editMode[field as keyof EditModeState] ? (
                  <Button01
                    type="button"
                    onClick={() => handleSave(field as keyof FieldsState)}
                  >
                    저장
                  </Button01>
                ) : (
                  <Button01
                    type="button"
                    onClick={() =>
                      handleEditToggle(field as keyof EditModeState)
                    }
                  >
                    수정
                  </Button01>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-end gap-10 text-xl">
        <Button className="text-red-600" onClick={handleDeleteID} type="button">
          <span style={{ color: fontColor, fontSize: fontSize }}>회원탈퇴</span>
        </Button>
      </div>
    </section>
  );
};

Component.displayName = 'MypageSetting';

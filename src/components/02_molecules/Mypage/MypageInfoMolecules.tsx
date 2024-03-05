import React, { useEffect, useState } from 'react';
import Input from '@/components/01_atoms/Input/Input';
import Button from '@/components/01_atoms/Button/Button';
import Button01 from '@/components/01_atoms/Button/Button01';
import useLoginFormStore from '@/store/useLoginFormStore';
import { pb } from '@/api/pocketbase';

export interface MypageInfoMoleculesProps {
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

const MypageInfoMolecules: React.FC<MypageInfoMoleculesProps> = ({
  fontColor,
  fontSize,
}) => {
  const { userInfo, setUserInfo } = useLoginFormStore();

  const [fields, setFields] = useState<FieldsState>({
    email: userInfo.email,
    user_name: userInfo.user_name,
    nickName: userInfo.nickName,
    phone_number: userInfo.phone_number,
    address: userInfo.address,
  });

  const [editMode, setEditMode] = useState<EditModeState>({
    email: false,
    name: false,
    id: false,
    phone: false,
    address: false,
  });

  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem('userInfo');
  //   if (storedUserInfo) {
  //     setUserInfo(JSON.parse(storedUserInfo));
  //   }
  // }, [setUserInfo]);

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

  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold">회원 정보 (필수)</h2>
      <div className="border border-b-1"></div>
      <ul className="flex flex-col gap-10">
        {Object.entries(fields).map(([field, value]) => (
          <li key={field} className="flex gap-10 text-xl font-semibold">
            <span className="w-[35%]">{getFieldLabel(field)}</span>
            {editMode[field as keyof EditModeState] ? (
              <Input
                id={field}
                type={field === 'email' ? 'email' : 'text'}
                value={value}
                onChange={(e) => handleChange(e, field as keyof FieldsState)}
                required
                className="border border-gray-400 p-1"
              />
            ) : (
              <div>{value}</div>
            )}
            {field !== 'email' && (
              <span className="cursor-pointer flex-grow text-right">
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
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-end gap-10 text-xl">
        <Button
          className="text-red-600"
          onClick={() => console.log('회원탈퇴')}
          type="button"
        >
          <span style={{ color: fontColor, fontSize: fontSize }}>회원탈퇴</span>
        </Button>
      </div>
    </section>
  );
};

export default MypageInfoMolecules;

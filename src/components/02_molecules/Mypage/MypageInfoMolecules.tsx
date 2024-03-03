import React, { useState } from 'react';
import Input from '@/components/01_atoms/Input/Input';
import Button from '@/components/01_atoms/Button/Button';
import Button01 from '@/components/01_atoms/Button/Button01';
export interface MypageInfoMoleculesProps {
  fontColor?: string;
  fontSize?: string;
  size?: number;
}

const MypageInfoMolecules: React.FC<MypageInfoMoleculesProps> = ({
  fontColor,
  fontSize,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState('김드림');
  const [id, setId] = useState('dream');
  const [email, setEmail] = useState('dream99@gmail.com');
  const [phone, setPhone] = useState('010-1234-5678');
  const [address, setAddress] = useState('서울특별시 성동구');

  const textStyle: React.CSSProperties = {
    color: fontColor,
    fontSize: fontSize,
  };
  // 수정된 정보를 저장하는 함수
  const handleSave = () => {
    // 여기에서 데이터베이스에 수정된 정보를 업데이트하는 로직을 추가
    console.log('수정된 정보를 저장합니다.');
    setIsEditing(false); //수정 모드 종료
  };

  return (
    <section className="flex flex-col gap-10  w-[53.75rem]">
      <h2 className="text-[2.06rem] font-semibold">회원 정보 (필수)</h2>
      <div className="border border-b-1"></div>
      <ul className="flex flex-col gap-20 ">
        <li className="flex gap-10 text-[1.75rem] ">
          <span className="w-[35%]">이름</span>
          {isEditing ? (
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-400 p-1"
            />
          ) : (
            <div>{name}</div>
          )}
          <span
            className=" cursor-pointer flex-grow text-right"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Button01 type="button"> {isEditing ? '저장' : '수정'}</Button01>
          </span>
        </li>
        <li className="flex gap-10 text-[1.75rem] ">
          <span className="w-[35%]">아이디</span>
          <Input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="border border-gray-400 p-1"
          />
        </li>
        <li className="flex gap-10 text-[1.75rem] ">
          <span className="w-[35%]">이메일</span>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-400 p-1"
          />
        </li>
        <li className="flex gap-10 text-[1.75rem] ">
          <span className="w-[35%]">휴대전화</span>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-gray-400 p-1"
          />
        </li>
        <li className="flex gap-10 text-[1.75rem] ">
          <span className="w-[35%]">주소</span>
          <Input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border border-gray-400 p-1"
          />
        </li>
      </ul>
      <div className="flex gap-10 text-2xl">
        <Button className="text-red-600 " onClick={handleSave} type="button">
          <span style={textStyle}>회원탈퇴</span>
        </Button>
        <Button onClick={handleSave} type="button">
          <span style={{ fontSize: fontSize }}>저장</span>
        </Button>
      </div>
    </section>
  );
};

export default MypageInfoMolecules;

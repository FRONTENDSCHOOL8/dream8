import React from 'react';
import useLoginFormStore from '@/store/useLoginFormStore';
import { useNavigate } from 'react-router-dom';
import { pb } from '@/api/pocketbase';

const Logout = () => {
  const { clearUser, setIsLoggedIn } = useLoginFormStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser(); // 사용자 정보 초기화
    setIsLoggedIn(false); // 로그인 상태 변경
    navigate('/');
    pb.authStore.clear();
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};

export default Logout;

import { useState, useEffect } from 'react';
import { pb } from '@/api/pocketbase';

interface UserData {
  id: string;
  name: string;
  nick_name: string;
}

function useGetUserData(): UserData[] {
  const [usersData, setUsersData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: UserData[] = await pb.collection('users').getFullList();
        setUsersData(response);
      } catch (error) {
        console.error('Error fetching user data');
      }
    };

    fetchData();
  }, []);

  return usersData;
}

export default useGetUserData;

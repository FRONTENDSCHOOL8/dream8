import { pb } from '@/api/pocketbase';
import { ExchangeItem, useListStore } from '@/store/useListStore';
import { useEffect } from 'react';

function useGetList() {
  const { Data, setData } = useListStore();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resultList: ExchangeItem[] = await pb
        .collection('exchange')
        .getFullList({ sort: '-created', expand: 'field' });
      setData(resultList);
    } catch (error) {
      console.error('Error fetching exchange data:', error);
    }
  };

  return Data;
}

export default useGetList;

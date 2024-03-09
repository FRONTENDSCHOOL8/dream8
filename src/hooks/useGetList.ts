import { pb } from '@/api/pocketbase';

async function useGetList() {
  const resultList = await pb
    .collection('exchange')
    .getFullList({ sort: '-created', expand: 'field' });

  return resultList;
}

export default useGetList;

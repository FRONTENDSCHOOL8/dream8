import { pb } from '@/api/pocketbase';

async function useGetOneUser(id: string) {
  const data = await pb.collection('exchange').getOne(id, {
    expand: 'field',
  });

  return data;
}

export default useGetOneUser;

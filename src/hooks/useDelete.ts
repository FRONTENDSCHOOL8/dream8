import { pb } from '@/api/pocketbase';

async function useDelete(id: string) {
  await pb.collection('exchange').delete(id);
}

export default useDelete;

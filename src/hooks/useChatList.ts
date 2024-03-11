import { pb } from '@/api/pocketbase';

export const FetchChatRoom = async (id) => {
  const data = await pb.collection('chat').getOne(id, {
    expand: 'field',
  });
  return data;
};

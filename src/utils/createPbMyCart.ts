import { pb } from '@/api/pocketbase';
export default async function createMyCartData(
  userId: string,
  productId: string
) {
  const data = {
    userId,
    productId,
  };
  await pb.collection('my_cart').create(data);
}

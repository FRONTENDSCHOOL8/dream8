import { pb } from '@/api/pocketbase';

async function hasDuplicateData(userId, productId) {
  try {
    await pb
      .collection('my_cart')
      .getFirstListItem(`userId="${userId}" && productId="${productId}"`);
    return true;
  } catch (error) {
    return false;
  }
}

export default async function createMyCartData(
  userId: string,
  productId: string
) {
  const data = {
    userId,
    productId,
  };
  if ((await hasDuplicateData(userId, productId)) == false) {
    await pb.collection('my_cart').create(data);
  } else {
    console.log('이미 카트에 담겼습니다');
  }
}

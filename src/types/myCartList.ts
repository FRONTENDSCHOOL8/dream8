import { ProductListsType } from './index';

export interface MyCartListItem {
  myCartID: string;
  productId: string;
  price: number;
  isChecked: boolean;
}
export interface MyCartDataItem {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  userId: string;
  expand: {
    productId: ProductListsType;
  };
  isPayed: boolean;
}

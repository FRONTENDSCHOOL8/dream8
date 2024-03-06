import create from 'zustand';

export interface ExchangeItem {
  id: string;
  title: string;
  type: string;
  brand: string;
  model_name: string;
  grade: string;
  trade_method: string;
  product_detail: string;
  product_img: string;
  expand: {
    field: {
      user_name: string;
    }[];
  };
}

interface ExchangeStore {
  Data: ExchangeItem[];
  setData: (data: ExchangeItem[]) => void;
}

export const useListStore = create<ExchangeStore>((set) => ({
  Data: [],
  setData: (data) => set({ Data: data }),
}));

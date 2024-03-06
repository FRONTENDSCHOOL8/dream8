import { StoryObj } from '@storybook/react';
import MypageTransaction from '@/components/02_molecules/Mypage/MypageTransaction';

/**@type{import('@storybook/react').Meta} */
export default {
  title: '거래내역',
  component: MypageTransaction,
};

type Story = StoryObj<typeof MypageTransaction>;

export const 거래내역: Story = {
  args: {},
};
